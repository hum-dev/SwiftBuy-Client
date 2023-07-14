import './Styles/FProduct.css'
import img from '../assets/images/handbag.png'
import ProductCard from './ProductCard';

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
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 3,
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 4,
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 5,
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 6,
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 7,
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 8,
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 9,
      image: img,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 10,
      image: img,
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
 
    
}

export default FeaturedPro
