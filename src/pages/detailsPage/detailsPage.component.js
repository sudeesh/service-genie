import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import StarRatings from "react-star-ratings";

// image
import tyre from "../../images/tyre.png";
import oil from "../../images/oil-bottle.png";
import spray from "../../images/spray-can.png";
import carWash from "../../images/car-wash.png";
import ac from "../../images/ac.png";
import accessories from "../../images/hubcap.png";

// service
import { getGaragesByName } from "../../services/services";

// style
import "./detailsPage.styles.scss";

const DetailsPage = (props) => {
  const [name, setGarageName] = useState({});
  useEffect(() => {
    getGaragesByName(props.location.state.val)
      .then((res) => setGarageName(res.data))
      .catch((error) => error.message);
  }, [props.location.state.val]);

  const [review, setReview] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://20.198.80.220:8080/api/v1/getOverallReviewRatingsOfGarage?garageName=${props.location.state.val}&location=${props.location.state.location}`
      )
      .then((res) => setReview(res.data));
  }, [props.location]);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      xs={10}
      className="center-div"
    >
      <Grid container>
        <Grid item xs={6} sm container>
          <Grid item xs container direction="column">
            <Grid item xs className="description-panel">
              <h3>{name.garageTitle}</h3>
              <p>
                <span>Address:</span> {name.address}
              </p>
              <p>
                <span>Date of Establish:</span> {name.dateOfEst}
              </p>
              <p>
                <span>Operating Hours:</span> {name.operatingHours}
              </p>
              <p>
                <span>Paymant Mode:</span> {name.paymentMode}
              </p>
              <p>
                <span>Rating:</span>
                {review.averageGarageRatings === "NaN" ? (
                  "No Reviews"
                ) : (
                  <>
                    <StarRatings
                      rating={
                        review.averageGarageRatings
                          ? parseInt(review.averageGarageRatings)
                          : 0
                      }
                      starRatedColor="rgb(2238, 255, 0)"
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                      starSpacing="3px"
                    />
                    <span className="offset-padding-left-5">
                      {review.totalGarageReviews}
                      {review.totalGarageReviews <= 1 ? " Review" : " Reviews"}
                    </span>
                  </>
                )}
              </p>
              <p>
                <span>Detail:</span> Specialist with premium brands ranging from
                Hummer, Jaguar, BMW, Audi, etc Known for on-time delivery and
                Economical billing. Can be trusted to handle complicated issues
                that have been even rejected by stalwarts in the Industry.
                Garage equipped with in-house paintbooth and body shopping
                facilities.
              </p>
              <p class="text-center">
                <button
                  className="common-button book-now-btn cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${name.garageTitle},%20${name.location}`;
                  }}
                >
                  Book
                </button>
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {name.garageImage === "" ? (
            <img src="http://via.placeholder.com/400x200" alt="garage" />
          ) : (
            <img
              src={`data:image/jpeg;base64,${name.garageImage}`}
              alt="garage"
            />
          )}
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
