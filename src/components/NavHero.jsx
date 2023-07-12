import './styles/NavHero.css'
import logo from '../assets/images/swift-buy logo.png'
import {Link} from 'react-router-dom'
function NavHero() {
  return (
    <div className='navHero'>
      <div className='hero-left'>
          <img src={logo} className='logo' alt="" />
      </div>
      <div className='hero-right'>
          <Link to='/login' className='hero-link'>Login</Link>
          <Link to='/signUp' className='hero-link'>SignUp</Link>
      </div>
    </div>
  )
}

export default NavHero
