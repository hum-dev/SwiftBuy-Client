import './Styles/LProducts.css'
// import img from '../assets/images/handbag.png'
import ProductCard from './ProductCard';
import img2 from '../assets/images/converse.png'
function LatestPro() {
  const products = [
    {
      id: 1,
      image: img2,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: '9.99'
    },
    {
      id: 2,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 3,
      image:img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 4,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 5,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 6,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 7,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 8,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 9,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    {
      id: 10,
      image: img2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '14.99'
    },
    
  ];


  return (
    <div className="featured-products">
      <h2>Latest Products</h2>
      <div className="product-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>

    </div>
  );
}

export default LatestPro
