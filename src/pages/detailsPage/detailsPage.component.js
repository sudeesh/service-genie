import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import StarRatings from "react-star-ratings";
import Button from "@material-ui/core/Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Popover,
} from "@material-ui/core";

// image
import tyre from "../../images/tyre.png";
import oil from "../../images/oil-bottle.png";
import spray from "../../images/spray-can.png";
import carWash from "../../images/car-wash.png";
import ac from "../../images/ac.png";
import accessories from "../../images/hubcap.png";
import ecu from "../../images/ecu.png";

// service
import {
  getGaragesByNameandLocation,
  getReviewRating,
  getOverallReviewRating,
} from "../../services/services";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

// style
import "./detailsPage.styles.scss";
import MobileDetailsPage from "./detailsPage.mobile.component";
import VerifiedTile from "../../components/common/verified.title";
import BackToSearchButton from "../../components/backtosearch/backtosearch";
import Loader from "../../components/loader/loader";
import useGaTracker from "../../useGaTracker";

const DetailsPage = (props) => {
  useGaTracker();
  const [name, setGarageName] = useState({});
  const [centerDetails, setCenterDetails] = useState();
  const [review, setReview] = useState({});
  const [overAllRating, SetOverAllrating] = useState();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // const [reviewDialogStatus, setReviewDialogStatus] = useState(false);

  //  Added for sharing link for social media
  const getGarageName = props.location.search.split("?")[1];
  const getGarageLocation = props.location.search.split("?")[2];

  const sericeCentrename = getGarageName
    .replace("garageName=", "")
    .replaceAll("%20", " ");
  const serviceLocation = getGarageLocation
    .replace("location=", "")
    .replaceAll("%20", " ");
  const updatedName =
    props.location.state !== undefined
      ? props.location.state.val
      : sericeCentrename;
  const updatedLocation =
    props.location.state !== undefined
      ? props.location.state.location
      : serviceLocation;

  useEffect(() => {
    getGaragesByNameandLocation(updatedName, updatedLocation)
      .then((res) => setGarageName(res.data[0]))
      .catch((error) => error.message);
  }, [updatedName, updatedLocation]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCenterDetails(window.location.href);
    getReviewRating(updatedName, updatedLocation)
      .then((res) => setReview(res.data))
      .catch((error) => error.message);
    getOverallReviewRating(updatedName, updatedLocation)
      .then((res) => SetOverAllrating(res.data))
      .catch((error) => error.message);
  }, [updatedName, updatedLocation]);

  if (name && Object.keys(name).length === 0) {
    return <Loader />;
  }

  if (props.device.breakpoint === "phone") {
    return <MobileDetailsPage {...props} />;
  }

  // for future

  // const openReviewDialog = () => {
  //   setReviewDialogStatus(true);
  // };

  // const handleCancel = () => {
  //   setReviewDialogStatus(false);
  // };
  // const handleSubmit = () => {
  //   setReviewDialogStatus(false);
  // };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseShare = () => {
    setAnchorEl(null);
  };

  const openShare = Boolean(anchorEl);
  const shareId = open ? "simple-popover" : undefined;

  if (name === undefined) {
    return (
      <p style={{ textAlign: "center", paddingTop: "10px", width: "100%" }}>
        Service center description is not available currently, Admin will update
        soon
      </p>
    );
  } else {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        xs={10}
        className="center-div details-container"
      >
        <Grid container>
          <BackToSearchButton />

          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            container
            style={{ paddingRight: "30px" }}
          >
            <Grid item xs container direction="column">
              <Grid item xs className="description-panel">
                <VerifiedTile
                  garageTitle={name.garageTitle}
                  verified={name.verified}
                />
                <p>
                  <div className="address-text-image">
                    <FontAwesomeIcon
                      icon={faMapMarkedAlt}
                      className="offest-margin-right-10"
                    />
                    {name.address}
                  </div>
                </p>
                <div>
                  <span>Rating:</span>
                  {overAllRating &&
                  overAllRating.averageGarageRatings === "NaN" ? (
                    "No Reviews"
                  ) : (
                    <>
                      <StarRatings
                        rating={
                          overAllRating && overAllRating.averageGarageRatings
                            ? parseInt(overAllRating.averageGarageRatings)
                            : 0
                        }
                        starRatedColor="#eea44d"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="3px"
                      />
                      {review.length ? (
                        <button
                          variant="contained"
                          color="primary"
                          onClick={handleClickOpen}
                          style={{ marginLeft: "10px" }}
                          className="material-ui-review-btn review__button review__button--color-change"
                        >
                          {review.length && review.length === 1
                            ? `${review.length} Review`
                            : `${review.length} Reviews`}
                        </button>
                      ) : null}
                    </>
                  )}
                  {/* <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "10px" }}
                onClick={openReviewDialog}
              >
                Write a review
              </Button>
              <ReviewDialog
                status={reviewDialogStatus}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              /> */}
                </div>
                <p className="details-container__since-weekoff-container details-container__since-weekoff-container--style">
                  <span>
                    Since <span>{name.dateOfEst}</span>
                  </span>
                  <button className="details-container__weekoff-button details-container__weekoff-button--badge">
                    {name.weekOff}
                  </button>
                </p>
                <p>
                  <span>Operating Hours:</span> {name.operatingHours}
                </p>
                <p>
                  <span>Payment Mode:</span> {name.paymentMode}
                </p>
                <p>
                  <span>Common services offered:</span>

                  <ul className="services-list">
                    {name.garageServices && name.garageServices.gsAndOil ? (
                      <li>
                        <img
                          src={oil}
                          alt="Tyre"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `https://wa.me/919361040506?text=I%20need%20General%20Service%20Oil%20Change%20@%20${name.garageTitle},%20${name.location}`;
                          }}
                        />
                        <div className="image-caption">
                          General Service & Oil Change
                        </div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.pbAndT ? (
                      <li>
                        <img
                          src={spray}
                          alt="Painting & Tinkering"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `https://wa.me/919361040506?text=I%20need%20Painting%20Tinkering%20@%20${name.garageTitle},%20${name.location}`;
                          }}
                        />
                        <div className="image-caption">
                          Painting & Tinkering
                        </div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.carWash ? (
                      <li>
                        <img
                          src={carWash}
                          alt="CarWash"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `https://wa.me/919361040506?text=I%20need%20Car%20Wash%20@%20${name.garageTitle},%20${name.location}`;
                          }}
                        />
                        <div className="image-caption">CarWash</div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.acAndCL ? (
                      <li>
                        <img
                          src={ac}
                          alt="AC Repair & Cleaning"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `https://wa.me/919361040506?text=I%20need%20AC%20Repair%20Cleaning%20@%20${name.garageTitle},%20${name.location}`;
                          }}
                        />
                        <div className="image-caption">
                          AC Repair & Cleaning
                        </div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.wAndS ? (
                      <li>
                        <img
                          src={tyre}
                          alt="Wheels & Spares"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `https://wa.me/919361040506?text=I%20need%20Wheels%20Spares%20@%20${name.garageTitle},%20${name.location}`;
                          }}
                        />
                        <div className="image-caption">Wheels & Spares</div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.engAndEcu ? (
                      <li>
                        <img
                          src={ecu}
                          alt="ECU Coding"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `https://wa.me/919361040506?text=I%20need%20ECU%20Coding%20@%20${name.garageTitle},%20${name.location}`;
                          }}
                        />
                        <div className="image-caption">ECU Coding</div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.acc ? (
                      <li>
                        <img
                          src={accessories}
                          alt="Accessories"
                          className="cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `https://wa.me/919361040506?text=I%20need%20Accessories%20@%20${name.garageTitle},%20${name.location}`;
                          }}
                        />
                        <div className="image-caption">Accessories</div>
                      </li>
                    ) : null}
                  </ul>
                </p>
                <div>
                  <>
                    {review.length ? (
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="max-width-dialog-title"
                        className="custom-dialog"
                      >
                        <DialogTitle id="max-width-dialog-title">
                          <b>Reviews</b>
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            {review &&
                              review.map((x, i) => (
                                <div key={x}>
                                  <h4>{x.reviewerName}:</h4>
                                  <p>{x.review}</p>
                                </div>
                              ))}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose} color="primary">
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    ) : null}
                  </>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            style={{ paddingTop: "10px" }}
            className="description-panel"
          >
            <div className="image-container">
              {name.garageImage === "" ? (
                <img src="http://via.placeholder.com/400x200" alt="garage" />
              ) : (
                <img
                  src={`data:image/jpeg;base64,${name.garageImage}`}
                  alt="garage"
                />
              )}
            </div>
            <p>
              <span>About Workshop:</span> {name.garageDescription}
            </p>
            <p className="action-container">
              <button
                className="common-button book-now-btn cursor-pointer action__share action__share--button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${name.garageTitle},%20${name.location}`;
                }}
              >
                Schedule Now
              </button>
              <button
                className="common-button book-now-btn cursor-pointer action__directions action__direction--button"
                onClick={() =>
                  (window.location.href = `http://maps.google.com?q=${name.latitude},${name.longitude}`)
                }
              >
                Directions
              </button>
            </p>
          </Grid>
        </Grid>
        <button
          className="share__button share__button--transform common-button"
          aria-describedby={shareId}
          onClick={handleClick}
        >
          LIKE TO SHARE
        </button>
        <Popover
          id={shareId}
          open={openShare}
          anchorEl={anchorEl}
          onClose={handleCloseShare}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          className="share__popper"
          disableScrollLock
        >
          <div>
            <div className="share-icons">
              <FacebookShareButton
                url={centerDetails}
                quote="Service geni shared a service center"
              >
                <FacebookIcon size={32} />
              </FacebookShareButton>
              <TwitterShareButton
                quote="Service geni shared a service center"
                url={centerDetails}
              >
                <TwitterIcon size={32} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={centerDetails}
                title="Service geni shared a service center"
              >
                <WhatsappIcon size={32} />
              </WhatsappShareButton>
            </div>
          </div>
        </Popover>
      </Grid>
    );
  }
};

export default DetailsPage;
