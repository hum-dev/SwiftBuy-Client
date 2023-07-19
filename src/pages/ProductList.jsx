import './Styles/View.css'
import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {apiDomain} from '../utils'

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    
    fetchProducts();
  }, []);


  const fetchProducts = async () => {
    try {
      const response = await fetch(`${apiDomain}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const allProducts = await response.json();
      setProducts(allProducts);
      console.log(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  const handleDelete = async (product_id) => {
    try {
      const response = await fetch(`${apiDomain}/product/${product_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      
      const deleteProduct = await response.json();
      setProducts(deleteProduct);
      // fetchUsers();
      if (response.status === 200) {
        console.log(response)
        toast.success("Product deleted successfully");
        fetchProducts();
       
      }
      
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className="table__wrapper">
      <div className="user-table">
        <table>
          <thead>
            <tr className="row">
              <th>ID</th>
              <th>Name</th>
              <th>Desc</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, product_id) => (
              <tr key={product_id} className='col'>
                <td>{product.product_id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category_id}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(product.product_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList
