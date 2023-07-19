import './Styles/Dashboard.css'

import  {  useState } from 'react';
import {Link} from 'react-router-dom'

import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';
import { FaBars } from 'react-icons/fa';

function Dashboard() {
    
    const [collapsed, setCollapsed] = useState(false);
    
    
      return (
        <div className="admin-container">
          <Sidebar className="sidebar" collapsed = {collapsed}> 
          <Menu className='menu'>
            <MenuItem icon = {<FaBars/>} onClick= {() => {
              setCollapsed(!collapsed);
            }}>

            Dashboard
            </MenuItem>
           
            <SubMenu label='Users' title="Users">
              <MenuItem component={<Link to='Viewuser'/>}>  
              view Users
              </MenuItem>
             
            </SubMenu>
            
            <SubMenu label='Products' title="Product" style={{color: "#0c0c22"}}>
               
              <MenuItem component={<Link to='ProductList'/>}>Product List</MenuItem>
              
              <MenuItem component={<Link to="AddProduct"/>}>Add Product</MenuItem>
            </SubMenu>
            
            <SubMenu label='Orders' title="Orders">
              
              <MenuItem component={<Link to='OrderList'/>}>Order List</MenuItem>
             
              
              
             
            </SubMenu>
          </Menu>
          </Sidebar>
         
        </div>
      );
}

export default Dashboard
