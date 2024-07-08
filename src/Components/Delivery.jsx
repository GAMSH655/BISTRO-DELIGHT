import React from 'react'
import { BsBagCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import "./Delivery.css"
import { PiTruck } from "react-icons/pi";
const Delivery = () => {
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
       <div className="deliveryThreeBOx">
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