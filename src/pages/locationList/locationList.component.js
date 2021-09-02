import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

/* component */
import TileList from "../../components/tileList/tileList.component";
import {
  getAllGaragesUsingRegex,
  getLocationByLocation,
} from "../../services/services";

import "./locationList.styles.scss";
import BackToSearchButton from "../../components/backtosearch/backtosearch";
import Loader from "../../components/loader/loader";
import useGaTracker from "../../useGaTracker";

const LocationList = (props) => {
  useGaTracker();
  let history = useHistory();
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (props.location.state.searchName === "location") {
      getLocationByLocation(props.location.state.val).then((res) => {
        return setLocation(res.data);
      });
    } else {
      getAllGaragesUsingRegex(props.location.state.val).then((res) => {
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
            search: `?garageName=${props.location.state.val}?location=${location}`,
            state: { val: name, location: location },
          });
        }
        return setLocation(res.data);
      });
    }
  }, [props.location.state, history]);

  console.log("props.device.breakpoints :>> ", props.device);
  const listHeading = () => {
    const { breakpoint } = props.device;
    if (breakpoint !== "phone") {
      return `Car Service Centres
          around ${props.location.state.val}`;
    } else {
      return (
        <>
          <p>Car Service Centres around {props.location.state.val}</p>
        </>
      );
    }
  };

  const renderHeading = () => {
    return props.location.state.searchName === "location" ? (
      listHeading()
    ) : (
      <p>Branches of {props.location.state.val}</p>
    );
  };

  if (Object.keys(location).length === 0) {
    return <Loader />;
  }

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      className="location-list"
    >
      <Grid item lg={10}>
        <BackToSearchButton renderedIn={"list-page"} />
        <h2
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          <span className="location-list__heading">{renderHeading()}</span>
        </h2>
        <TileList list={location} device={props.device} />
      </Grid>
    </Grid>
  );
};

export default LocationList;

