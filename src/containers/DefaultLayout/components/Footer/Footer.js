import React from "react";
// import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import Facebook from "./static/image/facebook.svg";
import Google from "./static/image/google-plus.svg";
import Twitter from "./static/image/twitter.svg";
import Linkedin from "./static/image/linkedin.svg";
import FooterBg from "./static/image/footer-bg.jpg";
import "./static/Footer.scss";
import BrandLogo from './static/image/brandLogo.png'


const usefulLinks=["Group Profiles","Vision & Values","History","Awards", "Leadership", "CSR", "Sustainability", "Careers", "Media"]
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
            <img src={BrandLogo}/>
            <input type="text" placeholder="email"/>
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
            <div className="social-icons">
              <a>
                <img src={Facebook}/>
              </a>
              <a>
                <img src={Twitter}/>
              </a>
              <a>
                <img src={Linkedin}/>
              </a>
            </div>
          </div>
          <div className="contact-section">
            <h3>
              Useful Links
            </h3>
            {usefulLinks.map((index) => (
                <p>
                  {index}
                </p>
            ))}
            
          </div>
          <div className="latest-news">
            <h3>Latest News</h3>
            <p> Best 15 Secrets of digital Transformation</p>
            <p> November 22 </p>
            <p> Best 15 Secrets of digital Transformation</p>
            <p> November 22 </p>
          </div>
       </div>
       <div className="copyright-section">
            <p>
             Copyright &copy; 2020 the Pascal by <a> WebGeniusLab. </a> All rights reserved
            </p>
          </div>
      </Container>
      
    </div>
  );
};

export default Footer;
