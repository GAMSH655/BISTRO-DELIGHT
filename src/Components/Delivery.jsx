import React from 'react'
import { BsBagCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import "./Delivery.css"
import { PiTruck } from "react-icons/pi";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Delivery = () => {
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
       <div className="delievryTextBox">
       <h3 className="deliveryTitle">
        Fast & Reliable Delivery   
        </h3>
        <p className="delievryP">
        At Bistro Delight, we make it easy to enjoy gourmet meals without leaving home. Our delivery service is designed to be quick, convenient, and reliable. Here's how it works:
        </p>
       </div>
       <div className="deliveryThreeBOx" data-aos="zoom-in-left">
         <div className="DeliveryBox">
         <BsBagCheck className='deliveryIcons'/>
          <h3 className="deliveryTitle">order</h3>
            <p  className='delievryText'>Browse our menu on the Scooty app and pick your favorite dishes</p>
         </div>
         <div className="DeliveryBox">
         <MdOutlinePayment className='deliveryIcons'/>
          <h3 className="deliveryTitle">Payment</h3>
            <p  className='delievryText'>Pay securely through the app using your preferred payment method. It's fast and secure</p>
         </div>
         <div className="DeliveryBox">
         <BsBagCheck className='deliveryIcons'/>
          <h3 className="deliveryTitle">package</h3>
            <p className='delievryText'>Browse our menu on the Scooty app and pick your favorite dishes</p>
         </div>
         <div className="DeliveryBox">
         <PiTruck className='deliveryIcons'/>
          <h3 className="deliveryTitle">delivery</h3>
            <p p className='delievryText'>Our delivery team will bring your meal straight to your door, ensuring it arrives quickly</p>
         </div>
       </div>
    </div>
  )
}

export default Delivery