import React from "react";

// components
import Search from "../../components/search/search.component";
import Map from "../../components/map/map.component";

const SearchPage = (props) => {
  const { latitude, longitude, history } = props;
  console.log("latitude", { latitude, longitude });
  return (
    <>
      <Search />
      <Map latitude={latitude} longitude={longitude} history={history} />
    </>
  );
};

export default SearchPage;
