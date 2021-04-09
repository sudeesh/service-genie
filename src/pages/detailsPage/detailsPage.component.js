import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

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
    debugger;
    getGaragesByName(props.location.state.val)
      .then((res) => setGarageName(res.data))
      .catch((error) => error.message);
  }, [props.location.state.val]);

  // const [review, setReview] = useState({});

  // useEffect(() => {
  //   getOverallReviewRatingsOfGarage(
  //     props.location.state.val,
  //     props.location.state.location
  //   ).then((res) => {
  //     debugger;
  //     console.log("res", res);
  //     return setReview(res.data);
  //   });
  // }, [props.location]);w);

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
                <span>Mobile Number:</span> {name.contact}
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
                <span>Detail:</span> Specialist with premium brands ranging from
                Hummer, Jaguar, BMW, Audi, etc Known for on-time delivery and
                Economical billing. Can be trusted to handle complicated issues
                that have been even rejected by stalwarts in the Industry.
                Garage equipped with in-house paintbooth and body shopping
                facilities.
              </p>
              <button className="common-button book-now-btn">Book</button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img
            src={`data:image/jpeg;base64,${name.garageImage}`}
            alt="garage"
          />
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
