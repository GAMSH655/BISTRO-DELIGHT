import React from 'react'
import "./Faq.css"
import { useState } from 'react'
import { FaPlus , FaMinus } from 'react-icons/fa'
const Faqs = () => {

    const [openQuestion , setOpenQuestion] = useState(false);
    function HandleToggle(){
        setOpenQuestion(!openQuestion)
    }
    const Array_of_Questions = [
      {
        Questions : "How can i palce an order",
        Answer  : "  ipsum dolor, sit amet consectetur adipisicing elit Porro quod itaque quae quibusdam amet facere quas fugit repellat distinctio saepe architecto vero quisquam voluptatibus explicabo dicta rem laboriosam non labore"
      },
      {
        Questions : "What are Bistro Delight's opening hours?",
        Answer  : "  ipsum dolor, sit amet consectetur adipisicing elit Porro quod itaque quae quibusdam amet facere quas fugit repellat distinctio saepe architecto vero quisquam voluptatibus explicabo dicta rem laboriosam non labore"
      },
      {
        Questions : "Do you offer vegetarian and vegan options?",
        Answer  : "  ipsum dolor, sit amet consectetur adipisicing elit Porro quod itaque quae quibusdam amet facere quas fugit repellat distinctio saepe architecto vero quisquam voluptatibus explicabo dicta rem laboriosam non labore"
      },
      {
        Questions : "How can I make a reservation at Bistro Delight?",
        Answer  : "  ipsum dolor, sit amet consectetur adipisicing elit Porro quod itaque quae quibusdam amet facere quas fugit repellat distinctio saepe architecto vero quisquam voluptatibus explicabo dicta rem laboriosam non labore"
      },
      {
        Questions : "What payment methods do you accept at Bistro Delight?",
        Answer  : "  ipsum dolor, sit amet consectetur adipisicing elit Porro quod itaque quae quibusdam amet facere quas fugit repellat distinctio saepe architecto vero quisquam voluptatibus explicabo dicta rem laboriosam non labore"
      },
    ]
  return (
    <div className='faqsComponents'>
        <h3 className='faqTitle'> Frequently Asked Questions</h3>
        <p className='Faqs_P'>Got questions? We’ve got answers! If you don’t find what you’re looking for, feel free to contact us</p>
        {/* <div className="faqsContainer"> */}
            {
                 Array_of_Questions.map(({Questions , Answer} , index) =>{
                    return  <div className='' key={index}  onClick={HandleToggle}>
                    <div className="faq_Container_Header" >
                   <p className="Questions">{Questions}</p> 
                   <p className="showQuestion">{openQuestion ? <FaMinus/> : <FaPlus/>}</p>
                   </div>
                      <div className={`answerContainer ${openQuestion ? "active" : " "}`}>
                      <p className="answers">{Answer}</p>
                      </div>
                        </div>
                 } )
            }

            <div className="newsLetterDiv">
                 <h3 className="signUp">Sign Up To Our Newsletter</h3>
                 <div className="inputDiv">
                 <input type="text" placeholder='enter your email here' />
                 <button className='newsLetterBTn_show'>submit</button>
                 <br />
                 <button className='newsLetterBTn_None'>submit</button>
                 </div>
               
                <p className="signText">Your privacy is important to us, we will never spam you or share your info with third parties. You can unsubscribe anytime</p>
            </div>
    </div>
  )
}

export default Faqs