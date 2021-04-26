import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import StarRatings from "react-star-ratings"; // image

import carAvatar from "../../images/car-avatar.png"; //Icon

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"; //Styles

import "./tileList.styles.scss";

const TileList = props => {
  let history = useHistory();

  const onClickDetail = (name, location) => {
    history.push({
      pathname: "/details",
      search: `?garageName=${name}`,
      state: {
        val: name,
        location: location
      }
    });
  };

  const {
    list
  } = props;
  return list && list.map(x => /*#__PURE__*/React.createElement(List, {
    className: "list-container",
    key: x.garageTitle
  }, /*#__PURE__*/React.createElement(ListItem, null, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 4,
    className: "description-panel"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("img", {
    src: carAvatar,
    alt: "car avatar"
  }), " ", x.garageTitle), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faMapMarkedAlt,
    className: "offest-margin-right-10"
  }), x.address), /*#__PURE__*/React.createElement("p", {
    className: "text-underline"
  }, /*#__PURE__*/React.createElement("span", null, "operating Hours:"), x.operatingHours)), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 10,
    sm: true,
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    container: true,
    direction: "column",
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement("p", null, x.verified === true ? /*#__PURE__*/React.createElement("button", {
    className: "common-button verified-color"
  }, "Verified") : null, /*#__PURE__*/React.createElement("button", {
    className: "common-button available-color"
  }, x.weekOff)), /*#__PURE__*/React.createElement("h3", null, "Customer Ratings & Reviews"), /*#__PURE__*/React.createElement("div", null, x.garageOverallRating.averageGarageRatings === "NaN" ? "No Reviews" : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StarRatings, {
    rating: parseInt(x.garageOverallRating.averageGarageRatings),
    starRatedColor: "rgb(2238, 255, 0)",
    numberOfStars: 5,
    name: "rating",
    starDimension: "20px",
    starSpacing: "3px"
  }), /*#__PURE__*/React.createElement("span", null, x.garageOverallRating.totalGarageReviews, " reviews")))))), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 2,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("p", null, "Services starting at"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "\u20B9 ", x.startingPrice)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    className: "common-button book-now-btn cursor-pointer",
    onClick: e => {
      e.preventDefault();
      window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${x.garageTitle},%20${x.location}`;
    }
  }, "Book Now")), /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer text-underline",
    onClick: () => onClickDetail(x.garageTitle, x.location)
  }, "know more about the service center and their offerings"))))));
};

export default TileList;