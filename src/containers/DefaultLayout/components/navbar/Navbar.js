import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import Logo from "./static/image/logo.svg";
import SpNav from "./static/image/sp-menu.svg";
import LogoSmall from "./static/image/logo-small.svg";
import Cart from "./static/image/cart.svg";
import Close from "./static/image/close.svg";
import CloseWhite from "./static/image/close-white.svg";
import { ReactComponent as Search } from "./static/image/search.svg";
import './static/Navbar.scss';
import { addToCart } from '../../../../store/CartSlice';
import { Category } from '../../../../app/data';

const Navbar = ({fixNavbar}) => {
	
    // let cartData = useSelector(state => state.CartSlice.list);
	const [close, setClose] = useState(false);
	const dispatch = useDispatch();
	const [spClose, setSpClose] = useState(false);

	const handleWrapperClose = () => {
		setClose(!close);
	}
	
	const handleSpNavbar = () => {
		setSpClose(!spClose);
	}

	let cartArray = [];
	let getTotalPrice = 0;
    let cartData = useSelector(state => state.CartSlice.list);
    if(cartData){
		getTotalPrice = 0;
        cartData.data.map(item => {
            cartArray.push(item);
			getTotalPrice = getTotalPrice + (Number(item.price) * item.qty);
		});
    }

	const handleRemoveCart = (id) => {
		const index = cartData.data.findIndex(item => item.id === id);
		cartArray.splice(index, 1);
        const add = { data: cartArray };
		dispatch(addToCart(add));
	}

	const [searchValue, setSearchValue] = useState('');
	const getInputValue = (e) => {
		setSearchValue(e.target.value);
	}
	let history = useHistory();
	const handleSearch = () => {
		history.push({
            pathname: '/search',
			search: `?text=${searchValue}`
        });
	}
  return (
	<div className={fixNavbar ? 'navbar-wrapper navbar-sticky': 'navbar-wrapper'}>
		<Container>
			<Row>
				<Col md={12}>
					<div className="main-navbar">
						<div className="nav-list-block">
							<Link to="/" className="logo-block">
								<img src={fixNavbar ? LogoSmall : Logo} alt="" />
							</Link>
							{Category.map(({name, slug}) => (
								<Link key={slug} to={`/category/${slug}`} className="item">
									{name}
								</Link>
							))}
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
							<div className={fixNavbar ? 'search' : 'search d-none'}>
								<input type="text" onChange={getInputValue} placeholder="Search a for quick order" />
								<Search onClick={handleSearch}className={searchValue === '' ? 'icon-block disabled' : 'icon-block'} height="15" width="15" />
							</div>
							<div className="cart-toggle">
								<img src={Cart} className="icon-block" onClick={handleWrapperClose} />
								{cartData && cartData.data.length > 0 && (<span>{cartData.data.length}</span>)}
							</div>
							<div onClick={handleSpNavbar} className="sp-nav">
								<img src={SpNav} alt="sp nav" />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
		<div className={!close ? 'cart-list-wrapper shadow-lg hide-cart' : 'cart-list-wrapper shadow-lg'}>
			<img className="close-btn" src={Close} alt="" onClick={handleWrapperClose} />
			<div className="cart-header">
				<p>My Items</p>
				{cartData && (<span>Total: {cartData.data.length}</span>)}
			</div>
			<div className="cart-body">
				{cartData && cartData.data.length ? cartData.data.map(({id, name, image, qty, totalPrice}) => (
						<div className="item" key={`cart-${id}`}>
							<div className="image-block">
								<img src={image} alt={name} />
							</div>
							<div className="content">
								<p>{name}</p>
								<p>Quentity: {qty}</p>
								<p>Price: {totalPrice}</p>
							</div>
							<img onClick={() => handleRemoveCart(id)} className="close" src={Close} alt="" />
						</div>
					)
				) : (
					<h2>Cart List is Empty</h2>
				)}
			</div>
			{cartData && cartData.data.length ? (
					<div className="cart-footer">
						<p>total: {getTotalPrice.toFixed(2)}$</p>
						<Link to="/checkout" className="checkout-button">Checkout Now</Link>
					</div>
				) : (<div className="cart-footer no-border"></div>)
			}
		</div>
		<div className={spClose ? 'sp-category flip' : 'sp-category'}>
			<Container>
				<Row>
					<Col md={12}>
						<div className="category-wrapper">
							<span className="sp-close">
								<img onClick={handleSpNavbar} src={CloseWhite} alt="sp-close" />
							</span>
							{Category.map(({name, slug}) => (
								<Link key={slug} to={`/category/${slug}`} className="item">
									{name}
								</Link>
							))}
							<div className="sp-contact">
								<p>Email Us: email.9009@gmail.com</p>
								<p>Call For Order Now: (215) 203-6212</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</div>
  );
};

export default Navbar;