import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

/* component */
import TileList from "../../components/tileList/tileList.component";
import { getLocationByLocation } from "../../services/services";

const LocationList = (props) => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    getLocationByLocation(props.location.state.val).then((res) => {
      return setLocation(res.data);
    });
  }, [props.location.state.val]);

  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <Grid item lg={10}>
        <h2>Service centers in {props.location.state.val}</h2>
        <TileList list={location} />
      </Grid>
    </Grid>
  );
};

export default LocationList;
