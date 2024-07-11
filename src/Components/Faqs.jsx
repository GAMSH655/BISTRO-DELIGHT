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
            

        {/* </div> */}
    </div>
  )
}

export default Faqs