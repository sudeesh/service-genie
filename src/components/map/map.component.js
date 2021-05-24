import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const config = {
  SECRET_KEY: "AIzaSyAhnpl8m5jed67sO1DueRlrPk8muzWUtQU",
};

const secretkey = config.SECRET_KEY;

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.latitude,
          lng: this.props.longitude,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: secretkey,
})(MapContainer);
