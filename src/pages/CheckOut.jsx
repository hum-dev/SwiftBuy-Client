import './Styles/CheckOut.css'
// import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Context } from '../context/UserDashboardContext/Context';
// import PaymentForm from '../Stripe/PaymentForm';

function CheckOut({product}) {

  // const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleOrderClick = () => {
  
    // setShowPaymentForm(true);
  };

  return (
    <>
      <div className='cart-page'>
         

      
        {product?.map((product) => (
          <div key={product.product_id} className='cart-body'>
           
            <div className='cart-header'>
               
              <h3>{product.name}</h3>
              
            </div>
            <div className='item'>
              <div className="product">
                <p>{product.description}</p>
                <p>price :  ${product.price}</p>
               
                <button onClick={handleOrderClick}>Order</button>
              </div>
            </div>
          </div>
        ))}

      
      </div>

      
      {/* {showPaymentForm && <PaymentForm />} */}
    </>
  );
}

CheckOut.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      product_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  )
};

export default CheckOut
