import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import StarRatings from "react-star-ratings";

// image
import carAvatar from "../../images/car-avatar.png";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

//Styles
import "./tileList.styles.scss";

const TileList = (props) => {
  let history = useHistory();
  const onClickDetail = (name, location) => {
    history.push({
      pathname: "/details",
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5} lg={5} className="description-panel">
              <div className="text-header-container">
                <img src={carAvatar} alt="car avatar" />
                <h3
                  className="text-transform-captilize cursor-pointer"
                  onClick={() => onClickDetail(x.garageTitle, x.location)}
                >
                  {x.garageTitle}
                </h3>
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
            <Grid item xs={12} sm={4} lg={4}>
              <Grid item container direction="column" spacing={2}>
                <Grid item xs>
                  <div>
                    {x.garageOverallRating.averageGarageRatings === "NaN" ? (
                      "No Reviews"
                    ) : (
                      <>
                        <StarRatings
                          rating={parseInt(
                            x.garageOverallRating.averageGarageRatings
                          )}
                          starRatedColor="rgb(2238, 255, 0)"
                          numberOfStars={5}
                          name="rating"
                          starDimension="20px"
                          starSpacing="3px"
                        />
                        <span style={{ paddingLeft: "10px" }}>
                          {x.garageOverallRating.totalGarageReviews > 1
                            ? `${x.garageOverallRating.totalGarageReviews} reviews`
                            : `${x.garageOverallRating.totalGarageReviews} review`}
                        </span>
                      </>
                    )}
                  </div>
                  <p>
                    {x.verified === true ? (
                      <button className="common-button verified-color">
                        Verified
                      </button>
                    ) : null}
                    <button className="common-button available-color">
                      {x.weekOff}
                    </button>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3} lg={3} className="text-center">
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
                know more about the service center and their offerings
              </div>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    ))
  );
};

export default TileList;
