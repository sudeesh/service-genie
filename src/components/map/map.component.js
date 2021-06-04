import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { getAllGaragesByLatAndLong } from "../../services/services";

const mapStyles = {
  width: "100%",
  height: "85%",
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

  onMarkerClick = (props, marker, e) => {
    this.props.history.push({
      pathname: "/details",
      search: `?garageName=${props.name}`,
      state: { val: props.name, location: props.location },
    });
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

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
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
      >
        {this.state.markerData &&
          this.state.markerData.map((x) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                title={x.garageTitle}
                name={x.garageTitle}
                location={x.location}
                position={{ lat: x.latitude, lng: x.longitude }}
              />
            );
          })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: secretkey,
})(MapContainer);
