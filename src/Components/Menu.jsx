import React from 'react'
import "./Menu.css"
import Caesar_Salad from "../assets/Caesar.png"
import shrimp_Scampi from "../assets/Shrimp.png"
import Grilled_salmon from "../assets/Grilled.png"
import Lemon_Sorbet from "../assets/Lemon.png"
import Alfredo_Pasta from "../assets/Alfredo.png"
import Greek_Salad from "../assets/Greek.png"
const Menu = () => {
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
                return <div className="MenuCard">
                    <img src={menuImg} alt="" className='menuImg' />
                    <div>
                       <h3 className='menuName'>{menuName}</h3>
                    </div>
                     <p className="menuInfo">{menuInfo}</p>
                </div>
                
              })
             }
           </div>
    </div>
  )
}

export default Menu


