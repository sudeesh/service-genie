import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const mapComponent = (props) => {
  function Map() {
    return (
      <GoogleMap
        defaultZoom={30}
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}
        options={{
          gestureHandling: "greedy",
          zoomControl: false,
        }}
      />
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCl_GKMMttHggG45MF_2WzVFqQRZeM0mN4&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `62.7vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default mapComponent;
