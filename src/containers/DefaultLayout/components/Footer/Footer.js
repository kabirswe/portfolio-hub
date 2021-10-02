import React from "react";
// import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import Facebook from "./static/image/facebook.svg";
import Google from "./static/image/google-plus.svg";
import Twitter from "./static/image/twitter.svg";
import Linkedin from "./static/image/linkedin.svg";
import FooterBg from "./static/image/footer-bg.jpg";
import "./static/Footer.scss";

const Footer = () => {
  return (
    <div className="main-footer">
      {/* <img
			src={FooterBg}
			className="footer-bg"
			alt="top right bg"
		/> */}
      <Container>
       <div className="content-wrapper">
          <div className="company-section">
            <h2>
              The Pascal
            </h2>
            <input/>
            <p>
              Stay Always in touch.! Subscribe our newsletter
            </p>
          </div>
          <div className="contact-section">
            <h3>Contacts</h3>
            <p>
              19th bowery street new york 
            </p>
            <p>
              email@email.com
            </p>
            <p>
              +8880000114558
            </p>
          </div>
          <div className="latest-news">
            <h3>Latest News</h3>
            <p> Best 15 Secrets of digital Transformation</p>
            <p> November 22 </p>
            <p> Best 15 Secrets of digital Transformation</p>
            <p> November 22 </p>
          </div>

       </div>
      </Container>
    </div>
  );
};

export default Footer;
