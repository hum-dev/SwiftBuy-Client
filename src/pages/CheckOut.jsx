import './Styles/CheckOut.css'
import { useEffect } from 'react';

// import PropTypes from 'prop-types';
import getProductImage from '../image.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../redux/CartSlice';

import { FaArrowLeft } from 'react-icons/fa';
const CheckOut = () => {

  const cart = useSelector(state => state.cart);
  console.log("cart:", cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals());
}, [cart, dispatch]);

const handleAddToCart = (product) => {
    dispatch(addToCart(product));
};
const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
};
const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
};
const handleClearCart = () => {
    dispatch(clearCart(''));
};
  return (
    <>
      <div className='cart-page'>
       
      <div className="cart-container">
          <h2>Shopping Cart</h2>
          {cart.cartItems.length === 0 ?
            <div className="cart-empty">
              <p>Cart is empty</p>
              <div className="start-shopping">
                <Link to="/products">
                  <FaArrowLeft className="arrow-icon" />
                  <button>Start Shopping</button>
                </Link>
              </div>
            </div>
            :
            <div>
              <div className="titles">
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {cart.cartItems?.map(cartItem => (
                  <div className="cart-item" key={cartItem.product_id} >
                    <div className="cart-product">
                      <img src={getProductImage(cartItem.productName)} alt={cartItem.productName} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.description}</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                      </div>
                    </div>
                    <div className="cart-product-price">{cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                      <div className="count">{cartItem.quantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>+</button>
                    </div>
                    <div className="cart-product-total-price">${cartItem.price * cartItem.quantity}</div>
                  </div>
                ))}
              </div>
              <div className="cart-item-summary">
                <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
                <div className="cart-checkout">
                  <div className="subtotal">
     
                   
                    <button>Check Out</button>
                    <div className="continue-shopping">
                      <Link to="/products">
                        <FaArrowLeft className="arrow-icon" />
                        <button>Continue Shopping</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        </div>
    </>
 
            
)};

export default CheckOut
