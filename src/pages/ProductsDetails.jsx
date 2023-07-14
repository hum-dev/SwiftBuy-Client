import './Styles/ProductDetails.css'


import './Styles/ProductDetails.css';

import PropTypes from 'prop-types';

 const ProductsDetails = ({product, onClose}) => {
  const { image, name, description, price } = product;
  return (
    <div>
      <div className='det-left'>
      <img src={image} alt={name} />
      </div>
      <div className='det-right'>
      <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

ProductsDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductsDetails;

