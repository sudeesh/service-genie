import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

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
  apiKey: "AIzaSyD1PNeY3KohNcsk_iwZtPCf4Qv7g9jnGjM",
})(MapContainer);
