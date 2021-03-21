import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

// image
import carAvatar from "../../images/car-avatar.png";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

//Styles
import "./tileList.styles.scss";

const TileList = (props) => {
  let history = useHistory();
  const onClickDetail = (event) => {
    history.push({
      pathname: "/details",
      search: `?garageName=event`,
      state: { value: event },
    });
  };
  const { list } = props;
  return list.map((x) => (
    <List className="list-container" key={x.id}>
      <ListItem>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h3>
              <img src={carAvatar} alt="car avatar" /> {x.garageTitle}
            </h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              {x.address}
            </p>
            <p className="text-underline">{x.operatingHours}</p>
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item container direction="column" spacing={2}>
              <Grid item xs>
                <p>
                  <button className="common-button verified-color">
                    Verified
                  </button>
                  <button className="common-button available-color">
                    Available All days
                  </button>
                </p>
                <h3>Customer rating</h3>
                <div
                  className="cursor-pointer"
                  onClick={() => onClickDetail(x.garageTitle)}
                >
                  Details <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <p>Serivices starting at</p>
            <p>
              <b>Rs. 1670</b>
            </p>
            <p>
              <button className="common-button book-now-btn">Book Now</button>
            </p>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  ));
};

export default TileList;
