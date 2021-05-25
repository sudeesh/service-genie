import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { getAllGaragesByLatAndLong } from "../../services/services";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const config = {
  SECRET_KEY: "AIzaSyAhnpl8m5jed67sO1DueRlrPk8muzWUtQU",
};

const secretkey = config.SECRET_KEY;

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      markerData: [],
    };
  }

  componentDidMount() {
    getAllGaragesByLatAndLong(2, this.props.latitude, this.props.longitude)
      .then((res) => this.setState({ markerData: res.data }))
      .catch((error) => error.message);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={mapStyles}>
        {this.state.markerData &&
          this.state.markerData.map((x) => {
            console.log("x", x.latitude);
            return (
              <Marker
                onClick={this.onMarkerClick}
                name={"Kenyatta International Convention Centre"}
                position={{ lat: x.latitude, lng: x.longitude }}
              />
            );
          })}
        {/* <Marker
          onClick={this.onMarkerClick}
          name={"Kenyatta International Convention Centre"}
          position={{ lat: this.props.latitude, lng: this.props.longitude }}
        /> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: secretkey,
})(MapContainer);
