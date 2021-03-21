import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";

/* component */
import TileList from "../tileList/tileList.component";

const LocationList = (props) => {
  useEffect(() => {
    const response = fetch(
      `http://localhost:8080/api/v1/getGaragesOnLocation?location=anna%20nagar`
    );
    console.log("response", response);
  }, []);
  const values = [
    {
      id: 1,
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
    },
    {
      id: 5,
      garageTitle: "Service Centre",
      latitude: 21.33,
      longitude: 53.847818,
      contact: "098408 68786",
      altContact: null,
      paymentMode: null,
      dateOfEst: null,
      location: "anna nagar",
      address: "Old No 52, New No 105, Vasantha Garden Main Road,test",
      operatingHours: "Opens at 8:30 am",
      weekOff: "MON",
      pinCode: "600031",
    },
  ];
  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <Grid item lg={10}>
        <h2>Service centers in {props.location.state.value}</h2>
        <TileList list={values} />
      </Grid>
    </Grid>
  );
};

export default LocationList;
