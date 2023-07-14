import './Styles/ProductPage.css'
import ProductCard from './ProductCard'
import pro from '../assets/images/Watch.png'

function ProductsPage() {
  
  const products = [
    {
      id: 1,
      image: pro,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
    },
    {
      id: 2,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 3,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 4,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 5,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 6,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 7,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 8,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 9,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 10,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 11,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 12,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 13,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 14,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 15,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
    {
      id: 16,
      image: pro,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
    },
   
  ];


  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );

}

export default ProductsPage
