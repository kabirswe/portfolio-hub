import React from 'react';
import { Link } from "react-router-dom";

import { Container } from 'react-bootstrap';
import Facebook from './static/image/facebook.svg';
import Google from './static/image/google-plus.svg';
import Twitter from './static/image/twitter.svg';
import Linkedin from './static/image/linkedin.svg';
import FooterBg from './static/image/footer-bg.jpg';
import './static/Footer.scss';

const Footer = () => {
  return (
	<div className="main-footer">
		<img
			src={FooterBg}
			className="footer-bg"
			alt="top right bg"
		/>
		<Container>
			<div className="content-wrapper">
				<div className="contact-block">
					<div className="contact">
						<p>Call For Order Now</p>
						<p>(215) 203-6212</p>
					</div>
					<div className="social-icons">
						<p>Follow Us</p>
						<Link to=""><img src={Facebook} alt="social icon" /></Link>
					</div>
				</div>
				<div className="address-block">
					<p>email9009@gmail.com</p>
					<p>129 S Main St, Hatfield, PA 19440</p>
				</div>
			</div>
			<div className="copy-right-wrapper">
				<p>©2021 All Rights Reserved by by Deshi Halal Meat & market Inc.</p>
			</div>
		</Container>
	</div>
  );
};

export default Footer;