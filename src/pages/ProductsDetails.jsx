// import './Styles/ProductDetails.css'
import { useParams } from 'react-router-dom';

import './Styles/ProductDetails.css';

import PropTypes from 'prop-types';

 const ProductsDetails = ({product}) => {
  const { image, name, description, price } = product;
  const { id } = useParams();
  return (
    <div className='pro-det'>
      {/* <p>Product ID: {id}</p> */}
      <div className='det-left'>
      <img src={image} alt={name} />
      </div>
      <div className='det-right'>
      <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        {/* <button onClick={onClose}>Close</button> */}
        </div>
    </div>
  )
}

ProductsDetails.propTypes = {
  
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductsDetails;

