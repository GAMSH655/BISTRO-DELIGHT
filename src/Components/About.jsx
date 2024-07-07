import React from 'react'
import "./About.css"
import Chair from "../assets/Chair.png"
const About = () => {
  return (
    <div>
         <div className="ABout">
             <div className="ABout_text_Box"> 
                <h3 className="about_Title">about  bistro Delight</h3>
                <p className="ABout_p">
                At Bistro Delight, we’re dedicated to delivering an exceptional dining experience. Nestled in the heart of the city, our restaurant offers a warm, inviting atmosphere perfect for any occasion. Our menu features a diverse array of dishes, blending local flavors with international flair, all crafted by our talented chefs using the freshest ingredients. 
                We believe in the art of fine dining and the joy of sharing delicious meals with loved ones. Whether you're enjoying a meal in our cozy dining area or opting for the convenience of our delivery service, we ensure that every dish is prepared to perfection and served with care.
                </p>
             </div>
             <img src={Chair} alt=""  className='chair'/>
         </div>
    </div>
  )
}

export default About