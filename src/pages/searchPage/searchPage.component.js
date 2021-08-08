import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

// components
import Search from "../../components/search/search.component";
import Map from "../../components/map/map.component";

const SearchPage = (props) => {
  const { latitude, longitude, history } = props;
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Search />
      <Map latitude={latitude} longitude={longitude} history={history} />
    </>
  );
};

export default SearchPage;
