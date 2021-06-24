import React from "react";

// styles
import "./footer.styles.scss";

export default function Footer() {
  return (
    <footer className="row center footer-conatiner">
      <div>
        <ul className="footer-list">
          <li>HOME</li>
          <li>DOORSTEP SERVICES</li>
          <li>ECU CODING & REPAIR</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
          <li>BLOGS</li>
          <li>VIRAL KINDNESS</li>
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <input type="text" placeholder="Search..." className="input-footer" />
        <p className="copy-right">
          Copyright © 2021 Service Geni - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
