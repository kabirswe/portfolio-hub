import React, {useState, useEffect} from 'react';
import './styles/Cart.scss';
import PlusImage from './assets/plus.svg';
import MinusImage from './assets/minus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart } from '../../store/CartSlice';

const Cart = ({id, name, img, qty, price, category}) => {
    const [quentity, setQuentity] = useState(1);
    const [cartAdded, setCartAdded] = useState(false);
    const handleQty = (parem) => {
        if(parem === 'plus' && quentity < 99) {
            setQuentity(quentity + 1);
        } 
        if(parem === 'minus' && quentity > 1) {
            setQuentity(quentity - 1);
        }
    }
    let cartArray = [];
    let cartData = useSelector(state => state.CartSlice.list);
    if(cartData){
        cartData.data.map(item => (
            cartArray.push(item)
        ));
    }
    const findData = cartArray.find((item) => item.id === id);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        setCartAdded(true);
        const newData = {
            id: id,
            name: name,
            image: img,
            price: price,
            totalPrice: price*quentity,
            qty: quentity
        };
        const findCartData = cartArray.find(({ id }) => id === newData.id);
        if(!findCartData) {
            cartArray.push(newData);
            const add = { data: cartArray };
            console.log("cart dispatch")
            dispatch(addToCart(add));
        }
    };

    useEffect(() => {
		if(findData) {
            setCartAdded(true);
        } else {
            setCartAdded(false);
        }
	});

    return (
        <div className="cart-item">
            <img src={img} alt="" />
            <p className="name">{name}</p>
            <p className="quentity">{qty}</p>
            <p className="price">${price}</p>
            <div className="button-block">
                <button className={cartAdded ? 'shadow-sm cart-added' : 'shadow-sm'} onClick={handleAddToCart}>Add to Cart</button>
                <span className="minus shadow-sm" onClick={() => handleQty('minus')}>
                    <img src={MinusImage} alt="" />
                </span>
                <span className="text">{quentity}{category != 'grocery' ? 'lb' : ''}</span>
                <span className="plus shadow-sm" onClick={() => handleQty('plus')}>
                    <img src={PlusImage} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Cart;
