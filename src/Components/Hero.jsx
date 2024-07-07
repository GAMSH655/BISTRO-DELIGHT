import React from 'react'
import "./Hero.css"
import Bigpot from "../assets/Bigpot.png"
import Time from "../assets/Time.png"
import Phone from "../assets/Phone.png"
import Location from "../assets/Location.png"
const Hero = () => {
  return (
    <div>
        <div className="HErodiv">
              <div className='HEroTExtBox'>
                <h3 className="exp">experince culinary</h3>
                <h3  className="exp"> excellent at</h3>
                <h3 className="bistro">bistro delight</h3>
                <p className="heroP">
                Welcome to Bistro Delight, where exceptional dining meets a warm and inviting atmosphere.
                </p>
                <button className='heroBTn'>order now</button>
              </div>
               <img src={Bigpot} alt="" className='heroImg' />
        </div>
        <div className="threeBoxex">
            <div className="box">
                <img src={Time} alt="" />
               <p className="boxTExt">
               Mon - Fri 7:00am to 11:00pm
               </p>
               <p className="boxExtraInfo">
                  waiting hours
               </p>
            </div>
            <div className="box">
                <img src={Phone} alt="" />
               <p className="boxTExt">
               +234-816-016-6685
               </p>
               <p className="boxExtraInfo">
                 call online
               </p>
            </div>
            <div className="box">
                <img src={Location} alt="" />
               <p className="boxTExt">
               Plot 6 GRA Ikeja Lagos
               </p>
               <p className="boxExtraInfo">
                our Location
               </p>
            </div>

        </div>
    </div>
  )
}

export default Hero