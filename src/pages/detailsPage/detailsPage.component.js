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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// image
import tyre from "../../images/tyre.png";
import oil from "../../images/oil-bottle.png";
import spray from "../../images/spray-can.png";
import carWash from "../../images/car-wash.png";
import ac from "../../images/ac.png";
import accessories from "../../images/hubcap.png";

// service
import {
  getGaragesByName,
  getReviewRating,
  getOverallReviewRating,
} from "../../services/services";

// style
import "./detailsPage.styles.scss";

const DetailsPage = (props) => {
  const [name, setGarageName] = useState({});
  const [share, setShare] = useState(false);
  useEffect(() => {
    getGaragesByName(props.location.state.val)
      .then((res) => setGarageName(res.data))
      .catch((error) => error.message);
  }, [props.location.state.val]);

  const [review, setReview] = useState({});
  const [overAllRating, SetOverAllrating] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getReviewRating(props.location.state.val, props.location.state.location)
      .then((res) => setReview(res.data))
      .catch((error) => error.message);
    getOverallReviewRating(
      props.location.state.val,
      props.location.state.location
    )
      .then((res) => SetOverAllrating(res.data))
      .catch((error) => error.message);
  }, [props.location]);

  const socialShare = () => {
    setShare(!share);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      xs={10}
      className="center-div"
    >
      <Grid container>
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
              <h3 className="text-transform-captilize">{name.garageTitle}</h3>
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
                      starRatedColor="rgb(2238, 255, 0)"
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                      starSpacing="3px"
                    />{" "}
                  </>
                )}
              </div>
              <p>
                {console.log("review", review)}
                <span>Date of Establish:</span> {name.dateOfEst}
              </p>
              <p>
                <span>Located at:</span> {name.address}
              </p>
              <p>
                <span>Operating Hours:</span> {name.operatingHours}
              </p>
              <p>
                <span>Payment Mode:</span> {name.paymentMode}
              </p>
              <p>
                <span>About Workshop:</span> {name.garageDescription}
              </p>
              <p>
                <span>weekOff: </span> {name.weekOff}
              </p>

              <div>
                {overAllRating &&
                overAllRating.averageGarageRatings === "NaN" ? (
                  "No Reviews"
                ) : (
                  <>
                    <span className="offset-padding-left-5">
                      {overAllRating && overAllRating.totalGarageReviews}
                      {overAllRating && overAllRating.totalGarageReviews <= 1
                        ? " Review"
                        : " Reviews"}
                    </span>
                    {review.length >= 1 ? (
                      <div className="review-container">
                        <h4 className="text-header">Reviews</h4>
                        {review &&
                          review
                            .filter((item, idx) => idx < 5)
                            .map((x, i) => (
                              <div key={x}>
                                <h4>{x.reviewerName}:</h4>
                                <p>{x.review}</p>
                              </div>
                            ))}
                        {review.length > 5 ? (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClickOpen}
                          >
                            Show more Reviews
                          </Button>
                        ) : null}
                      </div>
                    ) : null}
                    {console.log("review", review)}

                    {review.length >= 1 ? (
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
                                <>
                                  <h4>{x.reviewerName}:</h4>
                                  <p key={x}>{x.review}</p>
                                </>
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
                )}
              </div>

              <div>
                <div className="icons-conatner">
                  <a
                    className="material-icons cursor-pointer"
                    href={`http://maps.google.com?q=${name.latitude},${name.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    location_on
                  </a>
                  <span
                    className="material-icons cursor-pointer"
                    onClick={socialShare}
                  >
                    share
                  </span>
                </div>
                {share ? (
                  <div className="share-icons">
                    <FacebookShareButton
                      url="https://www.facebook.com/"
                      quote="Service genie shared a service center"
                    >
                      <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url="https://twitter.com/">
                      <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url="https://wa.me/919361040506"
                      title="Service genie shared a service center"
                    >
                      <WhatsappIcon size={32} />
                    </WhatsappShareButton>
                  </div>
                ) : null}
              </div>

              <p className="text-center">
                <button
                  className="common-button book-now-btn cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${name.garageTitle},%20${name.location}`;
                  }}
                >
                  Schedule Now
                </button>
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
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
          <h4>Common services offered:</h4>
          <ul className="services-list">
            {name.garageServices && name.garageServices.gsAndOil ? (
              <li>
                <img src={oil} alt="Tyre" />
                <div className="image-caption">
                  General Service & Oil Change
                </div>
              </li>
            ) : null}
            {name.garageServices && name.garageServices.pbAndT ? (
              <li>
                <img src={spray} alt="Painting & Tinkering" />
                <div className="image-caption">Painting & Tinkering</div>
              </li>
            ) : null}
            {name.garageServices && name.garageServices.carWash ? (
              <li>
                <img src={carWash} alt="CarWash" />
                <div className="image-caption">CarWash</div>
              </li>
            ) : null}
            {name.garageServices && name.garageServices.acAndCL ? (
              <li>
                <img src={ac} alt="AC Reapir & Cleaning" />
                <div className="image-caption">AC Reapir & Cleaning</div>
              </li>
            ) : null}
            {name.garageServices && name.garageServices.wAndS ? (
              <li>
                <img src={tyre} alt="Wheels & Spares" />
                <div className="image-caption">Wheels & Spares</div>
              </li>
            ) : null}
            {name.garageServices && name.garageServices.engAndEcu ? (
              <li>
                <img src={tyre} alt="ECU Coding" />
                <div className="image-caption">ECU Coding</div>
              </li>
            ) : null}
            {name.garageServices && name.garageServices.acc ? (
              <li>
                <img src={accessories} alt="Accessories" />
                <div className="image-caption">Accessories</div>
              </li>
            ) : null}
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsPage;
