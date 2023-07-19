import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { set } from 'react-hook-form';
// import axios from 'axios';

import './Styles/View.css'
import {apiDomain} from '../utils'
function ViewUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    try {
      const response = await fetch(`${apiDomain}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const allUsers = await response.json();
      setUsers(allUsers);
      console.log(allUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiDomain}user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      
      const deleteUser = await response.json();
      setUsers(deleteUser);
      // fetchUsers();
      if (response.status === 200) {
        console.log(response)
        toast.success("User deleted successfully");
        fetchUsers();
       
      }
      
    } catch (error) {
      console.error("Error deleting mentor:", error);
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
              <th>Email</th>
         
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => (
              <tr key={id} className='col'>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user.id)}
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

export default ViewUser
