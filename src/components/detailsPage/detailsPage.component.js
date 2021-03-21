import React from "react";
import Grid from "@material-ui/core/Grid";

// image
import headerImg from "../../images/hb-car-service.png";

const DetailsPage = (props) => {
  const values = {
    garageTitle: "Car Service Centre",
    latitude: 21.33,
    longitude: 53.847818,
    contact: "098408 68786",
    altContact: null,
    paymentMode: null,
    dateOfEst: null,
    location: "anna nagar",
    address: "Old No 52, New No 105, Vasantha Garden Main Road, Ayanavaram",
    operatingHours: "Opens at 8:30 am",
    weekOff: "MON",
    pinCode: "600031",
    garageServices: {
      gsAndOil: true,
      pbAndT: true,
      carWash: true,
      acAndCL: true,
      wAndS: true,
      engAndEcu: true,
      acc: true,
    },
  };

  return (
    <Grid
      conatiner
      justify="center"
      alignItems="center"
      xs={10}
      sapcing={2}
      className="center-div"
    >
      <Grid container spacing={2}>
        <Grid item xs={6} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <p>{values.address}</p>
              <h3>{values.garageTitle}</h3>
              <p>{values.contact}</p>

              <p>
                Specialist with premium brands ranging from Hummer, Jaguar, BMW,
                Audi, etc Known for on-time delivery and Economical billing. Can
                be trusted to handle complicated issues that have been even
                rejected by stalwarts in the Industry. Garage equipped with
                in-house paintbooth and body shopping facilities.
              </p>
              <button className="common-button book-now-btn">Book</button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} spacing={2}>
          <img src={headerImg} alt="Service center" style={{ width: "100%" }} />
          <h4>Common services offered:</h4>
          <ul>
            <li>{values.garageServices.gsAndOil ? "oil service" : null}</li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsPage;
