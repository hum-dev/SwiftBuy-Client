import './Styles/FProduct.css'
import img from '../assets/images/handbag.png'

function FeaturedPro() {
  const products = [
    {
      id: 1,
      image: img,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: '9.99'
    },
    {
      id: 2,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 3,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 4,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 5,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 6,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 7,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 8,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 9,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 10,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    
  ];


  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className='pro-text'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            </div>
            <div className='pro-text-btm'>
            <span className="price"> {product.price}</span><p>Ksh</p>
            <button className="add-to-cart">+</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
 
    
}

export default FeaturedPro
