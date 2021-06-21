import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

/* component */
import TileList from "../../components/tileList/tileList.component";
import {
  getAllGaragesUsingRegex,
  getLocationByLocation,
} from "../../services/services";

const LocationList = (props) => {
  let history = useHistory();
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (props.location.state.searchName === "location") {
      getLocationByLocation(props.location.state.val).then((res) => {
        return setLocation(res.data);
      });
    } else {
      getAllGaragesUsingRegex(props.location.state.val).then((res) => {
        console.log("pro", props.location.state);
        console.log("res", res.data);
        if (
          res.data.length === 1 &&
          props.location.state.searchName === "garage"
        ) {
          let name = "";
          let location = "";
          res.data.map((x) => {
            name = x.garageTitle;
            location = x.location;
            return true;
          });
          history.push({
            pathname: "/details",
            search: `?garageName=${props.location.state.val}`,
            state: { val: name, location: location },
          });
        }
        return setLocation(res.data);
      });
    }
  }, [props.location.state, history]);

  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <Grid item lg={10}>
        <h2>
          {props.location.state.searchName === "location"
            ? `Car Service Centers
          around ${props.location.state.val}`
            : `Branches of
          ${props.location.state.val}`}
        </h2>
        <TileList list={location} />
      </Grid>
    </Grid>
  );
};

export default LocationList;
