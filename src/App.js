import "./App.scss";
import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
// commenting homepage for temporary purpose
// import Homepage from "./components/homePage/homePage.component";
import SearchPage from "./pages/searchPage/searchPage.component";
import DetailsPage from "./pages/detailsPage/detailsPage.component";
import LocationList from "./pages/locationList/locationList.component";

// component
import Footer from "../src/components/footer/footer.component";
import FancyHeaderComponent from "./components/fancyheader/fancyheader.component";
import useDevice from "./customHooks/findDevice/useDevice";
import AddNewGarage from "./pages/AddNewGarage/addnewgarage";
// import LandscapeScreen from './components/landscapeScreen/landscapeScreen';

import ReactGA from "react-ga";

ReactGA.initialize("UA 205741741-1", {
  debug: true,
  titleCase: false,
});

const App = () => {
  const breakpoints = [
    { name: "phone", min: 0, max: 640 },
    { name: "tablet", min: 640, max: 1080 },
    { name: "desktop", min: 1080, max: Infinity },
  ];
  const device = useDevice({ breakpoints });

  if (device.os.includes("Mac OS") || device.browser.includes("Safari")) {
    import("./reset.scss");
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="grid-container">
      <FancyHeaderComponent device={device} />
      <main>
        {/* <Route exact path="/" render={(props) => <Homepage {...props} />} /> */}
        <Route exact path="/" render={(props) => <SearchPage {...props} />} />
        <Route
          exact
          path="/details"
          render={(props) => <DetailsPage {...props} device={device} />}
        />
        <Route
          exact
          path="/location-list"
          render={(props) => <LocationList {...props} device={device} />}
        />
        <Route
          exact
          path="/add-new-garage"
          render={(props) => <AddNewGarage {...props} device={device} />}
        />
      </main>
      <Footer path={window.location.pathname} />
    </div>
  );
};

export default withRouter(App);
