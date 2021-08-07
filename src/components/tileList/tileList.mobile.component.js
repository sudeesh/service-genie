import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import StarRatings from 'react-star-ratings';

// image
import verifiedBadge from '../../images/Verified.png';

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

//Styles
import './tileList.styles.scss';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: '100%',
  },
  verifiedBadge: {
    width: '20px',
    height: '20px',
    marginLeft: '5px',
  },
}));

const TileListMobile = (props) => {
  const classes = useStyles();

  let history = useHistory();
  const onClickDetail = (name, location) => {
    history.push({
      pathname: '/details',
      search: `?garageName=${name}?location=${location}`,
      state: { val: name, location: location },
    });
  };
  const { list } = props;

  if (props.device.breakpoint !== 'phone') {
  }

  return (
    list &&
    list.map((x) => (
      <List className="list-container" key={x.garageTitle}>
        <ListItem>
          <Paper elevation="3" className={classes.paper}>
            <Grid container spacing={3} className="list-container-grid">
              <Grid item xs={12} sm={5} lg={5} className="description-panel">
                <div className="text-header-container">
                  <h3
                    className="text-transform-captilize cursor-pointer"
                    onClick={() => onClickDetail(x.garageTitle, x.location)}
                  >
                    {x.garageTitle}
                  </h3>
                  {Boolean(x.verified || false) ? (
                    <img
                      src={verifiedBadge}
                      alt={`${x.garageTitle} verfied`}
                      className={classes.verifiedBadge}
                    />
                  ) : null}
                </div>
                <Grid item xs className="list-container__rating-container">
                  <div>
                    {x.garageOverallRating.averageGarageRatings === 'NaN' ? (
                      'No Reviews'
                    ) : (
                      <>
                        <StarRatings
                          rating={parseInt(
                            x.garageOverallRating.averageGarageRatings
                          )}
                          starRatedColor="#eea44d"
                          numberOfStars={5}
                          name="rating"
                          starDimension="20px"
                          starSpacing="3px"
                        />
                        <p style={{ margin: '0' }}>
                          {x.garageOverallRating.totalGarageReviews > 1
                            ? `${x.garageOverallRating.totalGarageReviews} reviews`
                            : `${x.garageOverallRating.totalGarageReviews} review`}
                        </p>
                      </>
                    )}
                  </div>
                  <button className="common-button available-color">
                    {x.weekOff}
                  </button>
                </Grid>

                <div className="address-text-image">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    className="offest-margin-right-10"
                  />
                  {x.address}
                </div>
                <div className="operation-hours-style">
                  <span>Operating Hours:</span>
                  {x.operatingHours}
                </div>
                <div className="know-more-panel text-center">
                  <>
                    <div className="services__heading">
                      <p className="services__heading--brand-blue">
                        Services starting at:{' '}
                        <b className="services__heading--no-color">
                          &#8377; {x.startingPrice}
                        </b>
                      </p>
                    </div>
                    <div
                      className="cursor-pointer know-more__link"
                      onClick={() => onClickDetail(x.garageTitle, x.location)}
                    >
                      <span>{`Know more and Schedule`}</span>
                    </div>
                  </>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </ListItem>
      </List>
    ))
  );
};

export default TileListMobile;
