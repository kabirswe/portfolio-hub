import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// import { useDispatch, useSelector } from 'react-redux';
import Logo from "./static/image/logo.svg";
import SpNav from "./static/image/sp-menu.svg";
import "./static/Navbar.scss"
const Navbar = () => {	
    // let cartData = useSelector(state => state.CartSlice.list);
  return (
	<div className="navbar-wrapper">
		<Container>
			<Row>
				<Col md={12}>
					<div className="main-navbar">
						<div className="nav-list-block">
							<a href="/" className="logo-block">
								<img src={Logo} alt="" />
							</a>															
						</div>
						<div className="nav-menu">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Page</a></li>
								<li><a href="#">Portfolio</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Shop</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
						<div clasName="search-icon">
							<img src="#" alt="card-img"/>
							<img src="#" alt="serch-img"/>
							<img src="#" alt="serch-img"/>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
		
	</div>
  );
};

export default Navbar;