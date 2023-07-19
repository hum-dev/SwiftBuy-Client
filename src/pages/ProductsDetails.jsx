// import './Styles/ProductDetails.css'
// import { useParams } from 'react-router-dom';

import './Styles/ProductDetails.css';

import PropTypes from 'prop-types';


const ProductsDetails = ({ match, product }) => {
  const { id } = match.params;
  // const { image, name, description, price } = product;
  // const { id } = useParams();
  return (
    <>
      products details
      <div className='pro-det'>
        <p>Product ID: {id}</p>
        <div className='det-left'>
          {/* <img src={image} alt={name} /> */}
        </div>
        <div className='det-right'>
          <h3>{product.name}</h3>
          {/* <p>{description}</p> */}
          {/* <p>Price: ${price}</p> */}
          {/* <button onClick={onClose}>Close</button>. */}
        </div>
      </div>
    </>
  );
};

ProductsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductsDetails;


