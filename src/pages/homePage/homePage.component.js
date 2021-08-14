import React from "react";

// component
import Banner from "../../common/banner/banner.component";

// styles
import "./homePage.styles.scss";

const Homepage = () => (
    <div className="home-page-container">
        <div className="banner-bg"></div>
        <Banner />
    </div>
);

export default Homepage;