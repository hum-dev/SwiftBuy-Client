import './Styles/View.css'
import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {apiDomain} from '../utils'

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    
    fetchOrders();
  }, []);


  const fetchOrders = async () => {
    try {
      const response = await fetch(`${apiDomain}/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const allOrders = await response.json();
      setOrders(allOrders);
      console.log(allOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  const handleDelete = async (order_id) => {
    try {
      const response = await fetch(`${apiDomain}/order/${order_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      
      const deleteOrder = await response.json();
      setOrders(deleteOrder);
      // fetchUsers();
      if (response.status === 200) {
        console.log(response)
        toast.success("order deleted successfully");
        fetchOrders();
       
      }
      
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };
  return (
    <div className="table__wrapper">
      <div className="user-table">
        <table>
          <thead>
            <tr className="row">
              <th>ID</th>
              <th>Pro-id</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>email</th>
              <th>userId</th>
              <th>Dates</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, order_id) => (
              <tr key={order_id} className='col'>
                <td>{order.order_id}</td>
                <td>{order.product_id}</td>
                <td>{order.quantity}</td>
                <td>{order.amount}</td>
                <td>{order.email}</td>
                <td>{order.id}</td>
                <td>{order.order_date}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(order.order_id)}
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

export default OrderList
