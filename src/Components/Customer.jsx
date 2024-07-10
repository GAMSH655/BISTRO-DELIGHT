import React from 'react'
import "./Customer.css"
import Ellen from "../assets/Ellen.png"
import Sarah from "../assets/Sarah.png"
import Ridwan from "../assets/Ridwan.png"
import Qoute from "../assets/Qoute.svg"
import CustImg from "../assets/Custom.png"
import Meat from "../assets/Meat.png"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Customer = () => {
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
  const CustomerCollections = [
    {customerImg: Ellen,
    CustomerFeedBAck:"Incredible flavors and convenient delivery. Bistro Delight is a game-changer",
    customerName: "Ellen matt"
    },
    {customerImg: Sarah,
    CustomerFeedBAck:"Bistro Delight has transformed our family dinners! The food is always top-notch",
    customerName: "sarah adekunle"
    },
    {customerImg: Ridwan,
    CustomerFeedBAck:"Incredible flavors and convenient delivery. Bistro Delight is a game-changer",
    customerName: "Ridwan bashiru"
    },
    {customerImg: Ridwan,
    CustomerFeedBAck:"Incredible flavors and convenient delivery. Bistro Delight is a game-changer",
    customerName: "Ridwan bashiru"
    },
  ]
  return (
    <div>
    <div className='customerComponent'>
        <div className="underLay">
            {
              CustomerCollections.map(({customerName, customerImg, CustomerFeedBAck} , index)=>{
                
                return <div  className="innerLay" key={index} >
                
                 <span className='qoutes'>&rdquo;</span>
                  <img src={customerImg} alt="" className='customerImg' /> 
                 <div className="LaytextBox">
                <h3 className="OverLayName">{customerName}</h3>
                <p  className="overLayText">{CustomerFeedBAck}</p>
               </div>       
                </div>
              })
  
            }
        </div>
        <div className="asideCustomerDiv">
          <h3 className="customeTitle">What Our Customers Say</h3>
          <p className="customP">Our outstanding customer reviews speak for themselves, highlighting our commitment to quality and exceptional dining experiences</p>
            <img src={CustImg} alt=""  className='CustImg'/>
          </div>
     </div>
         <button className="viewM">view menu</button>

          <div className="partner">
            <div className="PartnerDivText">
              <h3 className="patnerTtile">
              Partner With Bristo Delight
              </h3>
              <p className="pP">
              We’re always looking for passionate farmers and agricultural suppliers to join our network. At Bistro Delight, we prioritize fresh, high-quality ingredients sourced sustainably from local producers
              </p>
            </div>
            <img src={Meat} alt=""  className='meat'/>
          </div>
     </div>
  )
}

export default Customer