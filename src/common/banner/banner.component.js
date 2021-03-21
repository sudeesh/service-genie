import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// gsap animation
import { TweenMax, Power3 } from "gsap";

// image
import Car from "../../images/car.png";

// styles
import "./banner.styles.scss";

const Banner = () => {
  let banner = useRef(null);
  let carImg = useRef(null);

  useEffect(() => {
    TweenMax.to(banner, 0.5, { left: "30%", y: 0, ease: Power3.easeIn });
    TweenMax.from(carImg, 0.8, { right: "30%", x: -500, ease: Power3.easeIn });
  }, []);

  return (
    <div className="row" ref={(el) => (banner = el)}>
      <div className="col-1 banner-image" ref={(el) => (carImg = el)}>
        <img src={Car} alt="First slide" />
      </div>
      <div className="col-1 align-text-center banner-text-container">
        IS YOUR CAR DUE FOR SERVICE?{" "}
        <p>FIND A GARAGE IN YOUR NEIGHBOURHOOD, RIGHT NOW!</p>
        <button>
          <Link to="/search">
            Search Now <FontAwesomeIcon icon={faSearch} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
