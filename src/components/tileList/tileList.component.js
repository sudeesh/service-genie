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

const TileList = (props) => {
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
                <div className="address-text-image">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    className="offest-margin-right-10"
                  />
                  {x.address}
                </div>
                <p>
                  <span>Operating Hours:</span>
                  {x.operatingHours}
                </p>
              </Grid>
              <Grid item xs={12} sm={4} lg={4} className="rating-panel">
                <Grid item container direction="column" spacing={2}>
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
                          <span style={{ paddingLeft: '10px' }}>
                            {x.garageOverallRating.totalGarageReviews > 1
                              ? `${x.garageOverallRating.totalGarageReviews} reviews`
                              : `${x.garageOverallRating.totalGarageReviews} review`}
                          </span>
                        </>
                      )}
                    </div>
                    <p>
                      <button className="common-button available-color">
                        {x.weekOff}
                      </button>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                lg={3}
                className="know-more-panel text-center"
              >
                {props.device.breakpoint !== 'phone' ? (
                  <>
                    <p>Services starting at</p>
                    <p>
                      <b>&#8377; {x.startingPrice}</b>
                    </p>
                    <p>
                      <button
                        className="common-button book-now-btn cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${x.garageTitle},%20${x.location}`;
                        }}
                      >
                        Schedule Now
                      </button>
                    </p>
                    <div
                      className="cursor-pointer text-underline"
                      onClick={() => onClickDetail(x.garageTitle, x.location)}
                    >
                      {`Know more about ${x.garageTitle}`}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="services__heading">
                      <p>Services starting at</p>
                      <p>
                        <b>&#8377; {x.startingPrice}</b>
                      </p>
                    </div>
                    <p>
                      <button
                        className="common-button book-now-btn cursor-pointer schedule-now__button--width"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${x.garageTitle},%20${x.location}`;
                        }}
                      >
                        Schedule Now
                      </button>
                    </p>
                    <div
                      className="cursor-pointer text-underline know-more__link"
                      onClick={() => onClickDetail(x.garageTitle, x.location)}
                    >
                      {`Know more about ${x.garageTitle}`}
                    </div>
                  </>
                )}
              </Grid>
            </Grid>
          </Paper>
        </ListItem>
      </List>
    ))
  );
};

export default TileList;
