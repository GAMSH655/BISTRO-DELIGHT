import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink} from 'react-router-dom'
import "./Header.css"
import Corn from "../assets/Corn.png"
import { FaBars  , FaTimes} from 'react-icons/fa'
import { useState } from 'react'
const Header = () => {
   const [openMenu , setOpenMenu] = useState(false)
   
   const HanldeMenuBtn = () =>{
     setOpenMenu(!openMenu )
   }
  return (
       <div>
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
           <button className='MenuBtn' onClick={HanldeMenuBtn}>
            {
               openMenu ?  <FaTimes/>  :    <FaBars/>
            }
             </button>
      </div>
         {/*  mobile header */}
         {
            openMenu && ( <div className='mobile_navlink_container'>
               <a href="" className='MobLinks'>home</a>
               <a href=""  className='MobLinks'>About us</a>
               <a href=""  className='MobLinks'>Contact us</a>
               <button className='MobheaderBTn'>register</button>
            </div>)
            }
        
       </div>
  )
}

export default Header