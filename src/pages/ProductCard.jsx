import './Styles/ProductCard.css'
import ProductDetails from './ProductsDetails'
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io'

import PropTypes from 'prop-types';



const ProductCard = ({product}) => {
    const { image, name, description, price } = product;   
    const [isHidden, setIsHidden] = useState(false);

    const handleDetailClose = () => {
        setIsHidden(false);
    };
    
      const handleProductClick = () => {
        setIsHidden(true);
      };

    return (
        <>
            <div className="product-page-card" onClick={handleProductClick}>
                <img src={image} alt={name} />
                <div className='pro-text'>
                <h3>{name}</h3>
                <p>{description}</p>
                </div>
                <div className='pro-text-btm'>
                <p>Price: {price} </p>
                <button className="add-to-cart"><IoIosAddCircle /></button>
                </div>
            </div>
            {isHidden && (
                <ProductDetails
                product={product}
                onClose={handleDetailClose}
                />
      )}
        </>

    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;


