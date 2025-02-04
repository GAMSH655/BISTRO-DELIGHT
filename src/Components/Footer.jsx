import React from 'react'
import "./Footer.css"
import Corn from "../assets/Corn.png"
import { FaFacebook , FaLinkedin ,  FaEnvelope , FaPhone  , FaTwitter} from 'react-icons/fa6'
import Apple from "../assets/Apple.png"
import Google from "../assets/Google.png"
const Footer = () => {
  return (
    <div>
           <div className='Footer'>
        <div className="Footer_Logo_Container">
        <div className="logoConatiner">
         <h3 className='logoTExt'>
             bistro <span className='logoSpan'>delight</span>
         </h3>
           <img src={Corn} alt="" />
           </div>
           <div className="footerLinkDiv">
              <a href="" className="footerLink"> < FaFacebook /> </a>
              <a href="" className="footerLink"> <  FaLinkedin /> </a>
              <a href="" className="footerLink"> <  FaTwitter  /> </a>
           </div>
        </div>
        <div className="innerFooterDiv">
            <h3 className="footerTitle">support</h3>
            <p className="footer_p">privacy policy</p>
            <p className="footer_p">About us</p>
        </div>
        <div className="innerFooterDiv">
            <h3 className="footerTitle">support</h3>
            <p className="footer_p">privacy policy</p>
            <p className="footer_p">About us</p>
        </div>
        <div className="innerFooterDiv">
            <h3 className="footerTitle">contact us</h3>
            <p className="footer_p"> < FaEnvelope/> support@bristo.com</p>
            <p className="footer_p"> <FaPhone /> 0453173652451</p>
        </div>
        <div className="innerFooterDiv">
            <h3 className="footerTitle">download the app</h3>
              <img src= {Google} alt="" className='footerImg' />
              <br /><br />
              <img src= {Apple} alt=""  className='footerImg' />
        </div>
    </div>
      <div className="ll">
      <div className="line"></div>
      </div>
    </div>
  )
}

export default Footer