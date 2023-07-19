import './Styles/ProductCard.css'
// import ProductDetails from './ProductsDetails'
import { IoIosAddCircle } from 'react-icons/io'
import {Link, useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';

const ProductCard = ({product}) => {
    const navigate = useNavigate()

    const { image, name, description, price } = product;   
    
    const handleProductClick = () => {
        navigate('/product:/id')
      };

    return (
        <>
        <Link to={'product/${product.id}'}>
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
        </Link>

            {/* <ProductDetails
                product={product}
            /> */}
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


