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
        buttonText="Accept"
        enableDeclineButton
        onDecline={() => {}}
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      >
        This website uses cookies to enhance the user experience. For more info,
        see our
        <a
          href="https://www.servicegeni.in/terms-conditions"
          style={{ color: "#fff", paddingLeft: "3px" }}
        >
          Terms and Conditions & Privacy Policy
        </a>
      </CookieConsent>
      <Search />
      <Map latitude={latitude} longitude={longitude} history={history} />
    </>
  );
};

export default SearchPage;
