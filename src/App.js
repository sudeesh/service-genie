import "./App.scss";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
// commenting homepage for temporary purpose
// import Homepage from "./components/homePage/homePage.component";
import SearchPage from "./pages/searchPage/searchPage.component";
import DetailsPage from "./pages/detailsPage/detailsPage.component";
import LocationList from "./pages/locationList/locationList.component";

// component
// import Header from "../src/common/header/header.component";
// import Footer from "../src/common/footer/footer.component";

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
      {/* Hidded header for time being as we are integrating with wix */}
      {/* <Header /> */}
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
      {/* Hidded footer for time being as we are integrating with wix */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
