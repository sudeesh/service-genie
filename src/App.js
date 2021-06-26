import "./App.scss";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
// commenting homepage for temporary purpose
// import Homepage from "./components/homePage/homePage.component";
import SearchPage from "./pages/searchPage/searchPage.component";
import DetailsPage from "./pages/detailsPage/detailsPage.component";
import LocationList from "./pages/locationList/locationList.component";

// component
import Header from "../src/components/header/header.component";
import Footer from "../src/components/footer/footer.component";
import { usePosition } from "./customHooks/usePosition";

const App = () => {
  const [lat, setLat] = useState(13.0827);
  const [long, setLongitude] = useState(80.2707);

  const highAccuracySettings = {
    enableHighAccuracy: true,
  };

  const { latitude, longitude, timestamp, accuracy, speed, error } =
    usePosition(true, highAccuracySettings);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(showPosition);
  //   }
  // });

  // const showPosition = (position) => {
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude);
  // };
  return (
    <div className="grid-container">
      <Header />
      <main>
        {/* <Route exact path="/" render={(props) => <Homepage {...props} />} /> */}
        <Route
          exact
          path="/"
          render={(props) => (
            <SearchPage {...props} latitude={latitude} longitude={longitude} />
          )}
        />
        <Route
          exact
          path="/details"
          render={(props) => <DetailsPage {...props} />}
        />
        <Route
          exact
          path="/location-list"
          render={(props) => <LocationList {...props} />}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
