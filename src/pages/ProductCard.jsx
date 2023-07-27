import './Styles/ProductCard.css'
// import ProductDetails from './ProductsDetails'
import { IoIosAddCircle } from 'react-icons/io'
// import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
// import  { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getProducts } from '../redux/ApiCalls.js';
import getProductImage from '../image.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const {  name, description, price, productName } = product;

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        console.log(product)
    }


    return (
        <>
            
                <div className="product-page-card">
                    <div className="image">
                        <img src={getProductImage(productName)} alt="product" />
                    </div>

                    <div className='pro-text'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='pro-text-btm'>
                        <p>Price: ${price} </p>
                        <button className="add-to-cart" onClick={() => handleAddToCart(product)}><IoIosAddCircle /></button>
                    </div>
                    
                </div>
            
        </>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;






