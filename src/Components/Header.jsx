import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink} from 'react-router-dom'
import "./Header.css"
import Corn from "../assets/Corn.png"
const Header = () => {
  return (
      <div className='headerContainer'>
         <div className="logoConatiner">
         <h3 className='logoTExt'>
             bistro <span className='logoSpan'>delight</span>
        </h3>
           <img src={Corn} alt="" />
         </div>
          <div>
             <a href="" className='navLinks'>home</a>
             <a href=""  className='navLinks'>About us</a>
             <a href=""  className='navLinks'>Contact us</a>
          </div>
           <button className='headerBTn'>register</button>
      </div>
  )
}

export default Header