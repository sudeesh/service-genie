import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

// styles
import "./header.styles.scss";

const Header = () => (
  <header className="row top no-wrap flex-column">
    <div className="header-menu">
      {/* buttton styles */}
      <div className="col-1">
        {/* <button variant="dark" className="common-button">
          Accessories store
        </button>
        <button variant="outline-secondary" className="common-button">
          Premium services
        </button> */}
      </div>
      {/* logo */}
      <div className="col-2 text-center">
        <a href="https://www.servicegeni.in/">
          <img src={Logo} alt="service genie" className="logo" />
        </a>
      </div>

      <div className="col-1 text-right">
        {/* <button variant="link" className="link-btn common-button">
          Sign up
        </button>
        <button variant="link" className="link-btn common-button">
          Login
        </button> */}
      </div>
    </div>
  </header>
);

export default Header;
