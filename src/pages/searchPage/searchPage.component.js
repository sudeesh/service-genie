import React from "react";

// components
import Search from "../../components/search/search.component";
import Map from "../../components/map/map.component";

const SearchPage = (props) => {
  const { latitude, longitude } = props;
  return (
    <>
      <Search />
      <Map latitude={latitude} longitude={longitude} />
    </>
  );
};

export default SearchPage;
