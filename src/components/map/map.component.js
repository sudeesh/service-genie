import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { getAllGaragesByLatAndLong } from "../../services/services";

const mapStyles = {
  width: "100%",
  height: "75%",
  overflow: "hidden",
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
      loading: true,
      latitude: 13.0827,
      longitude: 80.2707,
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        console.log("postion", position);
        this.setState({
          loading: false,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }

    getAllGaragesByLatAndLong(2, this.state.latitude, this.state.longitude)
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
  loadmap() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
        center={{ lat: this.state.latitude, lng: this.state.longitude }}
        className="map-holder"
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

  render() {
    console.log("latitude", this.state.latitude);
    return this.state.loading ? this.loadmap() : this.loadmap();
  }
}

export default GoogleApiWrapper({
  apiKey: secretkey,
})(MapContainer);
