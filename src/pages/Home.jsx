import FeaturedPro from './FeaturedPro'
import LatestPro from './LatestPro'
import Offers from './Offers'
import './Styles/Home.css'
import {Link} from 'react-router-dom'
import shop from '../assets/images/shop.png'



function Home() {
  return (
    <>
        <div className='home'>
          <div className='home-left'>
          <h1>Shop Smart Shop Swiftly!</h1>
          <p className='home-desc'> 
              Shopping made more convenient for youGet What You Need, Fast and Hassle-Free <br />
              <span>Swift-Buy:</span>  Where Convenience Meets Quality
          </p>
        <Link to="/signUp"> <button className='home-btn'>Explore Now &nbsp;  &#8594;</button></Link> 
          </div>
          <div className='home-right'>
            <img src={shop} alt="shop" />
          </div>
        </div>
        <FeaturedPro/>
       
        <Offers/>
        <LatestPro/>
    </>
  )
}

export default Home
