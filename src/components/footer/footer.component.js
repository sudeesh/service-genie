import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

// styles
import "./footer.styles.scss";

export default function Footer() {
  return (
    <footer className="row center footer-conatiner">
      {/* <div>
        <ul className="footer-list">
          <li>
            <a href="https://www.servicegeni.in/">HOME</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/doorstep">DOORSTEP SERVICES</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/ecu">ECU CODING & REPAIR</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/about-us">ABOUT US</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/contact-us">CONTACT</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/blogs">BLOGS</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/viral-kindness">
              VIRAL KINDNESS
            </a>
          </li>
        </ul>
      </div> */}
      <div
        style={{
          display: "flex",
        }}
      >
        <p
          className="copy-right"
          style={{ justifyContent: "ceter", alignItems: "center" }}
        >
          <FacebookShareButton quote="Service geni shared a service center">
            <FacebookIcon size={32} />
          </FacebookShareButton>
          <TwitterShareButton quote="Service geni shared a service center">
            <TwitterIcon size={32} />
          </TwitterShareButton>
          <WhatsappShareButton title="Service geni shared a service center">
            <WhatsappIcon size={32} />
          </WhatsappShareButton>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "top",
              marginTop: "12px",
              marginLeft: "10px",
            }}
          >
            Copyright © 2021 Service Geni - All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
