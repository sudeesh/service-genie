import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

/* component */
import TileList from '../../components/tileList/tileList.component';
import {
  getAllGaragesUsingRegex,
  getLocationByLocation,
} from '../../services/services';

import './locationList.styles.scss';

const LocationList = (props) => {
  let history = useHistory();
  const [location, setLocation] = useState('');
  useEffect(() => {
    if (props.location.state.searchName === 'location') {
      getLocationByLocation(props.location.state.val).then((res) => {
        return setLocation(res.data);
      });
    } else {
      getAllGaragesUsingRegex(props.location.state.val).then((res) => {
        if (
          res.data.length === 1 &&
          props.location.state.searchName === 'garage'
        ) {
          let name = '';
          let location = '';
          res.data.map((x) => {
            name = x.garageTitle;
            location = x.location;
            return true;
          });
          history.push({
            pathname: '/details',
            search: `?garageName=${props.location.state.val}?location=${location}`,
            state: { val: name, location: location },
          });
        }
        return setLocation(res.data);
      });
    }
  }, [props.location.state, history]);

  const handleClick = () => {
    history.push({
      pathname: '/',
    });
  };
  console.log('props.device.breakpoints :>> ', props.device);
  const listHeading = () => {
    const { breakpoint } = props.device;
    if (breakpoint !== 'phone') {
      return `Car Service Centres
          around ${props.location.state.val}`;
    } else {
      return (
        <>
          <p>Car Service Centres</p>
          <p>around {props.location.state.val}</p>
        </>
      );
    }
  };

  const renderHeading = () => {
    return props.location.state.searchName === 'location'
      ? listHeading()
      : `Branches of
          ${props.location.state.val}`;
  };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      className="location-list"
    >
      <Grid item lg={10}>
        <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="location-list__heading">{renderHeading()}</span>

          <Button
            variant="contained"
            onClick={handleClick}
            className="location-list__search-button location-list--button"
          >
            Back to search
          </Button>
        </h2>
        <TileList list={location} />
      </Grid>
    </Grid>
  );
};

export default LocationList;
