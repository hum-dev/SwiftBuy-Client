import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainNav from './components/MainNav'
import NavHero from './components/NavHero'

import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import FeaturedPro from './pages/FeaturedPro'
import Offers from './pages/Offers'
import LatestPro from './pages/LatestPro'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'
import ProductsPage from './pages/ProductsPage'
import ProductsDetails from './pages/ProductsDetails'
import Orders from './pages/Orders'
import CheckOut from './pages/CheckOut'
import Delivery from './pages/Delivery'
import Payments from './pages/Payments'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import ViewUser from './pages/ViewUser'
import ProductList from './pages/ProductList'
import AddProduct from './pages/AddProduct'
import OrderList from './pages/OrderList'
import { useSelector } from 'react-redux'



function App() {
 // const {user} = useContext(Context)
  const userVal = useSelector(state => state.user.user);
  console.log(userVal);

  return (
    
      <BrowserRouter>
      <>
      {
        userVal ? <MainNav /> : <NavHero/>
      }
     
      {/* <NavHero /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<FeaturedPro />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/latest" element={<LatestPro /> } />
          <Route path="/login" element={<Login /> } />
          <Route path="/signUp" element={<SignUp /> } />
          
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/details" element={<ProductsDetails />} />
          <Route path="/order" element={<Orders/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/payment" element={<Payments/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/product/:id" element={<ProductsDetails/>} />
          <Route path="*" element={<NotFound/>} />

          <Route path="/admin" element={<Admin />} >
            <Route path="viewuser" element={<ViewUser/>} />
            <Route path="productList" element={<ProductList/>} />
            <Route path="addProduct" element={<AddProduct/>} />
            <Route path="orderList" element={<OrderList/>} />
            </Route>

        </Routes>
        <Footer />
        </>
      </BrowserRouter>

    
  )
}

export default App
