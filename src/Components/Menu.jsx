import React from 'react'
import Table from "../assets/Table.png"
import FoodMenu from './FoodMenu';
const Menu = () => {
  return (
    <div className='menuPage'>
      <h3 className="deliveryTitle">
        Discover Our Menu 
        </h3>
        <p className="delievryP">
        Explore a variety of gourmet dishes crafted with the finest ingredients,
        </p>
         <FoodMenu/>
              <div className="FloorGrid">
                 <h3 className="why">why choose bristo</h3>
                 <p className="why">Reasons why Bristo Delight is the number one stop for classic dining</p>

               <div className="AsideFlex">
                 <img src={Table} alt="" className='table' />

                <div className="asideGrid">
                   <div className="GridCard"  data-aos="zoom-in-up">
                     <span className="number">1</span>
                     <h3 className="GridCardText" >
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard"  data-aos="zoom-in-up">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard"  data-aos="zoom-in-up">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard"  data-aos="zoom-in-up">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard"  data-aos="zoom-in-up">
                     <span className="number">1</span>
                     <h3 className="GridCardText">
                     Exquisite Flavors
                     </h3>
                     <p className="gridParagraph">
                     Our chefs craft each dish with the finest ingredients and culinary techniques to deliver unforgettable taste experiences
                     </p>
                   </div>
                   <div className="GridCard"  data-aos="zoom-in-up">
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


