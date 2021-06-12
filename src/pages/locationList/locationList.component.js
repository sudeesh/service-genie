import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

/* component */
import TileList from "../../components/tileList/tileList.component";
import {
  getAllGaragesUsingRegex,
  getLocationByLocation,
} from "../../services/services";

const LocationList = (props) => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (props.location.state.searchName === "location") {
      getLocationByLocation(props.location.state.val).then((res) => {
        return setLocation(res.data);
      });
    } else {
      getAllGaragesUsingRegex(props.location.state.val).then((res) => {
        return setLocation(res.data);
      });
    }
  }, [props.location.state]);

  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      {console.log("test", props.location.state)}
      <Grid item lg={10}>
        <h2>Car Service Centers around {props.location.state.val}</h2>
        <TileList list={location} />
      </Grid>
    </Grid>
  );
};

export default LocationList;
