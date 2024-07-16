import {Link} from 'react-router-dom'
import './navbar.css'
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import brandLogo from '../../images/icons//wehoops-logo.png'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const closeMobile = () =>{
    scrollToTop()
    setBurgerMenu(false)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds smooth scrolling behavior
    });
  };
  return (
    <>
    <div className="top-nav">
      <div className="top-contact-info">
        <div className="top-email">
          <IoIosMail className='contact-top-icon'/>
          <p>we.hoopsociety@gmail.com</p>
        </div>
        <div className="top-email">
          <FaSquarePhone className='contact-top-icon'/>
          <p>(780) 335-5238</p>
        </div>
      </div>
      
      <div className="top-contact-button">
        <a className='financial-link' href="https://jumpstart.canadiantire.ca/pages/individual-child-grants" target='_blank'>Financial Support</a>
        <Link to='/registration'>
           <button className='top-register-btn'>Register Now!</button>
        </Link>
        
      </div>
    </div>
    <div className='nav-container'>

      <nav className='main-nav'>

        <ul className={`nav-item ${burgerMenu ? 'active' : ''}`}>
          <li className='nav-list'>
            <Link to="/" className='nav-link' onClick={closeMobile}>Home</Link>
          </li>
          <li className='nav-list'>
            <Link to="/programs" className='nav-link' onClick={closeMobile}>Programs</Link>
          </li>
          <div className="logo">
          <Link to="/"  className='logo-link'>
            <img className='nav-logo' src={brandLogo} alt="Nav Logo"  />
          </Link>
          </div>
          <li className='nav-list'>
            <Link to="/gallery" className='nav-link' onClick={closeMobile}>Gallery</Link>
          </li>
          <li className='nav-list'>
            <Link to="/about" className='nav-link' onClick={closeMobile}>About Us</Link>
          </li>
        </ul>
        <div className='nav-button' onClick={() => setBurgerMenu(!burgerMenu)}>
          {
            burgerMenu ? <IoCloseSharp className='close-menu'/>  : <GiHamburgerMenu className='burger-menu'/>
          }
        </div>
      </nav>
    </div>
    </>
    
  )
}

export default Navbar
