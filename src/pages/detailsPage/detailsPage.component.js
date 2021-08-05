import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import StarRatings from 'react-star-ratings';
import Button from '@material-ui/core/Button';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// image
import tyre from '../../images/tyre.png';
import oil from '../../images/oil-bottle.png';
import spray from '../../images/spray-can.png';
import carWash from '../../images/car-wash.png';
import ac from '../../images/ac.png';
import accessories from '../../images/hubcap.png';
import ecu from '../../images/ecu.png';

// service
import {
  getGaragesByName,
  getReviewRating,
  getOverallReviewRating,
} from '../../services/services';

// style
import './detailsPage.styles.scss';
import MobileDetailsPage from './detailsPage.mobile.component';
import VerifiedTile from '../../components/common/verified.title';

const DetailsPage = (props) => {
  let history = useHistory();
  const [name, setGarageName] = useState({});
  const [centerDetails, setCenterDetails] = useState();
  const [review, setReview] = useState({});
  const [overAllRating, SetOverAllrating] = useState();
  const [open, setOpen] = React.useState(false);

  //  Added for sharing link for social media
  const getGarageName = props.location.search.split('?')[1];
  const getGarageLocation = props.location.search.split('?')[2];

  const sericeCentrename = getGarageName
    .replace('garageName=', '')
    .replaceAll('%20', ' ');
  const serviceLocation = getGarageLocation
    .replace('location=')
    .replaceAll('%20', ' ');
  const updatedName =
    props.location.state !== undefined
      ? props.location.state.val
      : sericeCentrename;
  const updatedLocation =
    props.location.state !== undefined
      ? props.location.state.location
      : serviceLocation;

  useEffect(() => {
    getGaragesByName(updatedName)
      .then((res) => setGarageName(res.data))
      .catch((error) => error.message);
  }, [updatedName]);

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

  const handleClick = () => {
    history.push({
      pathname: '/',
    });
  };

  console.log('props.device :>> ', props.device);

  if (props.device.breakpoint === 'phone') {
    return <MobileDetailsPage {...props} />;
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      xs={10}
      className="center-div details-container"
    >
      <div style={{ textAlign: 'right', width: '100%', marginTop: '10px' }}>
        <Link
          variant="contained"
          className="cursor-pointer back-search__button back-search__button--brand-button"
          color="primary"
          onClick={handleClick}
        >
          Back to search
        </Link>
      </div>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          lg={6}
          container
          style={{ paddingRight: '30px' }}
        >
          <Grid item xs container direction="column">
            <Grid item xs className="description-panel">
              <VerifiedTile
                garageTitle={name.garageTitle}
                verified={name.verified}
              />
              <div>
                <span>Rating:</span>
                {overAllRating &&
                overAllRating.averageGarageRatings === 'NaN' ? (
                  'No Reviews'
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
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClickOpen}
                        style={{ marginLeft: '10px' }}
                      >
                        {review.length && review.length >= 1
                          ? `${review.length} Review`
                          : `${review.length} Reviews`}
                      </Button>
                    ) : null}
                  </>
                )}
              </div>
              <p>
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

              <p className="action-container text-center">
                <a
                  className="common-button book-now-btn cursor-pointer action__share action__share--button"
                  href={`http://maps.google.com?q=${name.latitude},${name.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', fontSize: '13px' }}
                >
                  Share Location
                </a>
                <button
                  className="common-button book-now-btn cursor-pointer action__directions action__direction--button"
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
        <Grid item xs={12} sm={6} lg={6} style={{ paddingTop: '10px' }}>
          <div className="image-container">
            {name.garageImage === '' ? (
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
                <div className="image-caption">Painting & Tinkering</div>
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
                  alt="AC Reapir & Cleaning"
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `https://wa.me/919361040506?text=I%20need%20AC%20Repair%20Cleaning%20@%20${name.garageTitle},%20${name.location}`;
                  }}
                />
                <div className="image-caption">AC Reapir & Cleaning</div>
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsPage;
