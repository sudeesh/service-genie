import React from 'react';

// styles
import './footer.styles.scss';

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
      <div style={{ display: 'flex' }}>
        <input type="text" placeholder="Search..." className="input-footer" />
        <p className="copy-right">
          Copyright © 2021 Service Geni - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
