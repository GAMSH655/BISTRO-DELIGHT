import React from 'react'
import "./Menu.css"
import Caesar_Salad from "../assets/Caesar.png"
import shrimp_Scampi from "../assets/Shrimp.png"
import Grilled_salmon from "../assets/Grilled.png"
import Lemon_Sorbet from "../assets/Lemon.png"
import Alfredo_Pasta from "../assets/Alfredo.png"
import Greek_Salad from "../assets/Greek.png"
import Table from "../assets/Table.png"
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Menu = () => {
  // useEffect(()=>{
  //   AOS.init({
  //     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //     startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //     initClassName: 'aos-init', // class applied after initialization
  //     animatedClassName: 'aos-animate', // class applied on animation
  //     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
  //     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //     offset: 120, // offset (in px) from the original trigger point
  //     delay: 0, // values from 0 to 3000, with step 50ms
  //     duration: 2000, // values from 0 to 3000, with step 50ms
  //     easing: 'ease', // default easing for AOS animations
  //     once: false, // whether animation should happen only once - while scrolling down
  //     mirror: true, // whether elements should animate out while scrolling past them
  //     anchorPlacement: 'top-bottom',
  //   })
  // })
  
  const [star , setStar] = useState(0)
  const MenuCollections= [
    {
      menuImg:Caesar_Salad,
      menuName: "Caesar Salad" ,
      menuInfo:"Crisp romaine lettuce tossed with Caesar dressing and croutons"
    },
    {
      menuImg:shrimp_Scampi , 
      menuName:"shrimp Scampi ",
      menuInfo:"Succulent shrimp cooked in a garlic butter sauce"
    },
    {
      menuImg:Grilled_salmon , 
      menuName:"Grilled Salmon ",
      menuInfo:"Perfectly grilled salmon served with a lemon butter sauce"
    },
    {
      menuImg:Lemon_Sorbet , 
      menuName:"Lemon Sorbet",
      menuInfo:"Refreshing and zesty lemon-flavored frozen dessert"
    },
    {
      menuImg:Alfredo_Pasta,
      menuName:"Alfredo Pasta",
      menuInfo:"Creamy pasta infused with the rich flavor of truffles"
    },
    {
      menuImg:Greek_Salad, 
      menuName:"Greek Salad,",
      menuInfo:"Fresh salad with cucumbers, tomatoes, olives, and feta cheese"
    },

  ]
  return (
    <div className='menuPage'>
      <h3 className="deliveryTitle">
        Discover Our Menu 
        </h3>
        <p className="delievryP">
        Explore a variety of gourmet dishes crafted with the finest ingredients,
        </p>
           <div className="menuGrid">
             {
              MenuCollections.map(({menuImg ,menuInfo , menuName})=>{
                return <div className="MenuCard" data-aos="zoom-in-up">
                    <img src={menuImg} alt="" className='menuImg' />
                    <div className='Mainstar'>
                    <h3 className='menuName'>{menuName}</h3>
                       <div className="star">
                       {
                      Array.from({length:5}, (_ , i)=>{
                        return <div key={i}>
                        <FaStar key={i} onClick={()=>setStar(i + 1)}
                        style={{ color :i < star ?  "FFAD33" : ""}}
                />
            </div>
            })
           } 
                       </div>
                    </div>
                     <p className="menuInfo">{menuInfo}</p>
                </div>})
             }
              
              
              <button className="view">view menu</button>
              </div>
              <div className="FloorGrid"  data-aos="zoom-in-right">
                 <h3 className="why">why choose bristo</h3>
                 <p className="why">Reasons why Bristo Delight is the number one stop for classic dining</p>
{/*  */}
               <div className="AsideFlex">
                 <img src={Table} alt="" className='table' />

                <div className="asideGrid">
                   <div className="GridCard">
                     <span className="number">1</span>
                     <h3 className="GridCardText" >
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                </div>
              </div>
              </div>
    </div>
  )
}

export default Menu


