import { Outlet } from "react-router-dom"
import './Styles/Admin.css'
import Dashboard from "./Dashboard"

function Admin() {
  return (
    <div className="view_user">
    <Dashboard/>
    <div className="data">
    <Outlet/>
    </div>
    
  </div>
  )
}

export default Admin
