import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section__padding bg__dark">
      <div className="container">
        <div className="footer__content grid text__light text__center">
          <div className="footer__content--item">
            <a href="#" className="footer__navlink">
              Dev Point
            </a>
            <p className="para__text">
              &copy; 2025 All rights reserved. Designed by Anubhav
            </p>
          </div>

          <div className="footer__content--item">
            <a href="mailto:someone@gmail.com">sharmaanubhav2403@@gmail.com</a>
          </div>

          <div className="footer__content--item">
            <h3 className="footer__title">Projects</h3>
            <ul className="footer__links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="footer__content--item">
            <h3 className="footer__title">News</h3>
            <ul className="footer__links">
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Legals</a>
              </li>
            </ul>
          </div>

          <div className="footer__content--item">
            <h3 className="footer__title">Social LInks</h3>
            <ul className="footer__links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
