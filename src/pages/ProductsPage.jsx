import './Styles/ProductPage.css'
import ProductCard from './ProductCard'
// import pro from '../assets/images/Watch.png'
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/ApiCalls.js';

const ProductsPage = () => {
  const Products = useSelector((state) => state.product.items);
    const dispatch = useDispatch();

  


    useEffect(() => {

        const fetchProductData = async () => {
            try {
                const data = await getProducts(dispatch);
                console.log(data); 
            } catch (err) {
                console.log(err);
            }
        };

        fetchProductData();
    }, [dispatch]);

  
  

  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <div className="product-grid">
        {Products.map((product) => (
          <ProductCard key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );

}

export default ProductsPage
