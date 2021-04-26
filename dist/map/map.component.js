import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const mapComponent = props => {
  function Map() {
    return /*#__PURE__*/React.createElement(GoogleMap, {
      defaultZoom: 30,
      defaultCenter: {
        lat: props.latitude,
        lng: props.longitude
      },
      options: {
        gestureHandling: "greedy",
        zoomControl: false
      }
    });
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WrappedMap, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCl_GKMMttHggG45MF_2WzVFqQRZeM0mN4&libraries=geometry,drawing,places",
    loadingElement: /*#__PURE__*/React.createElement("div", {
      style: {
        height: `100%`
      }
    }),
    containerElement: /*#__PURE__*/React.createElement("div", {
      style: {
        height: `62.7vh`
      }
    }),
    mapElement: /*#__PURE__*/React.createElement("div", {
      style: {
        height: `100%`
      }
    })
  }));
};

export default mapComponent;