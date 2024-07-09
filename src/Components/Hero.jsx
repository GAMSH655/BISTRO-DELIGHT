import React from 'react'
import "./Hero.css"
import Bigpot from "../assets/Bigpot.png"
import Time from "../assets/Time.png"
import Phone from "../assets/Phone.png"
import Location from "../assets/Location.png"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(()=>{
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    })

  })
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
               <img data-aos="fade-right"  src={Bigpot} alt="" className='heroImg' />
        </div>
        <div className="threeBoxex" data-aos="fade-right">
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

// https://5pp0pdjg-5173.uks1.devtunnels.ms/