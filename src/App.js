import './App.scss';
import React from 'react';
import { Route } from 'react-router-dom';
// commenting homepage for temporary purpose
// import Homepage from "./components/homePage/homePage.component";
import SearchPage from './pages/searchPage/searchPage.component';
import DetailsPage from './pages/detailsPage/detailsPage.component';
import LocationList from './pages/locationList/locationList.component';

// component
import Footer from '../src/components/footer/footer.component';
import FancyHeaderComponent from './components/fancyheader/fancyheader.component';
import useDevice from './customHooks/findDevice/useDevice';

const App = () => {
  const breakpoints = [
    { name: 'miniphone', min: 0, max: 320 },
    { name: 'phone', min: 320, max: 640 },
    { name: 'tablet', min: 640, max: 1080 },
    { name: 'desktop', min: 1080, max: Infinity },
  ];
  const device = useDevice({ breakpoints });

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
      </main>
      <Footer />
    </div>
  );
};

export default App;
