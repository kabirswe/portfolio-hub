import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// import { useDispatch, useSelector } from 'react-redux';
import Logo from "./static/image/logo.svg";
import SpNav from "./static/image/sp-menu.svg";
const Navbar = () => {
	
    // let cartData = useSelector(state => state.CartSlice.list);
  return (
	<div className="navbar-wrapper">
		<Container>
			<Row>
				<Col md={12}>
					<div className="main-navbar">
						<div className="nav-list-block">
							<Link to="/" className="logo-block">
								<img src={Logo} alt="" />
							</Link>
							{/* {Category.map(({name, slug}) => (
								<Link key={slug} to={`/category/${slug}`} className="item">
									{name}
								</Link>
							))} */}
								{/* <Link to="/category/chicken" className="item">
									Antibiotic Free Chicken
								</Link>
								<Link to="/category/beef" className="item">
									Beef
								</Link>
								<Link to="/category/goat" className="item">
									Goat
								</Link>
								<Link to="/category/lamb" className="item">
									Lamb
								</Link>
								<Link to="/category/veal" className="item">
									Veal
								</Link>
								<Link to="/category/grocery" className="item">
									Grocery
								</Link> */}
							
						</div>
					</div>
				</Col>
			</Row>
		</Container>
		
	</div>
  );
};

export default Navbar;