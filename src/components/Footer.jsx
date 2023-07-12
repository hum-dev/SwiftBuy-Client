import './Styles/Footer.css'
import { BiLogoInstagram } from 'react-icons/bi'
import { IoLogoTwitter } from 'react-icons/io'
import { BiLogoFacebook } from 'react-icons/bi'
import { ImLocation } from 'react-icons/im'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { BiMailSend } from 'react-icons/bi'



function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer">
          <div className="footer-left">
            <div>
              <h4 > <span>Swift-Buy</span></h4>
              <p>
                Swift-Buy is a platform that allows you <br /> to buy and sell
                products online.
              </p>
            </div>
            <div className="links">
              <h4 className="footer-header">Useful Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Products</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-contacts">
              <h4 className="footer-header">Contact Us</h4>
              <div className='footer-contacts-content'>
                <p> <ImLocation /> Kenya, Kirinyaga County, Kerugoya, Kutus</p>
                <p> <BiSolidPhoneCall /> Phone: +254 712 345 678</p>
                <p> 
                <BiMailSend />   Email: &nbsp;
                  <a href="mailto: hum@example.com">humdev@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="footer-icons">
              <div className="social-icons">
                <h4 className="footer-header">Follow Us</h4>
                <div className="icons">
                  <BiLogoInstagram className="icon" />
                  <IoLogoTwitter className="icon" />
                  <BiLogoFacebook className="icon" />
          
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer__text">
            &copy; 2023 all right reserved.created by{" "}
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/humphrey-muriungi/"
            >
              Humphrey
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer
