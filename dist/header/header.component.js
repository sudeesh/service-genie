import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png"; // styles

import "./header.styles.scss";

const Header = () => /*#__PURE__*/React.createElement("header", {
  className: "row top no-wrap flex-column"
}, /*#__PURE__*/React.createElement("div", {
  className: "header-top text-center"
}, "For all the car lovers out there!"), /*#__PURE__*/React.createElement("div", {
  className: "header-menu"
}, /*#__PURE__*/React.createElement("div", {
  className: "col-1"
}, /*#__PURE__*/React.createElement("button", {
  variant: "dark",
  className: "common-button"
}, "Accessories store"), /*#__PURE__*/React.createElement("button", {
  variant: "outline-secondary",
  className: "common-button"
}, "Premium services")), /*#__PURE__*/React.createElement("div", {
  className: "col-2 text-center"
}, /*#__PURE__*/React.createElement(Link, {
  to: "/"
}, /*#__PURE__*/React.createElement("img", {
  src: Logo,
  alt: "service genie",
  className: "logo"
}))), /*#__PURE__*/React.createElement("div", {
  className: "col-1 text-right"
}, /*#__PURE__*/React.createElement("button", {
  variant: "link",
  className: "link-btn common-button"
}, "Sign up"), /*#__PURE__*/React.createElement("button", {
  variant: "link",
  className: "link-btn common-button"
}, "Login"))));

export default Header;