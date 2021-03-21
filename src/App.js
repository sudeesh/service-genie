import "./App.scss";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
// commenting homepage for temporary purpose
// import Homepage from "./components/homePage/homePage.component";
import SearchPage from "./components/searchPage/searchPage.component";
import DetailsPage from "./components/detailsPage/detailsPage.component";
import LocationList from "./components/locationList/locationList.component";

// component
import Header from "../src/common/header/header.component";
import Footer from "../src/common/footer/footer.component";

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    }
  });

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
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
