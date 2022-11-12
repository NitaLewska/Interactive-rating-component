import './Card.css'
import star from './images/icon-star.svg'   
import phone from './images/illustration-thank-you.svg'
import React from 'react'


export default function Card() {
    const [grade, setGrade] = React.useState(0)
    const [submitted, setSubmitted] = React.useState(false)
    return (
        submitted ? (
            <article className='thanks_article'>
                <img src={phone} alt="star_icon" className='thanks_image'></img>
                <p>You selected {grade} out of 5</p>
                <h3>Thank you!</h3>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, 
  don't hesitate to get in touch!</p>
            </article>
        ) : (
            <article>
                <img src={star} alt="star_icon" className='star_image'></img>
                <h3>How did we do?</h3>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>   
                <button onClick={() => {setGrade(1)}} className={grade===1 ? "selected" : ""}>1</button>
                <button onClick={() => {setGrade(2)}} className={grade===2 ? "selected" : ""}>2</button>
                <button onClick={() => {setGrade(3)}} className={grade===3 ? "selected" : ""}>3</button>
                <button onClick={() => {setGrade(4)}} className={grade===4 ? "selected" : ""}>4</button>
                <button onClick={() => {setGrade(5)}} className={grade===5 ? "selected" : ""}>5</button>
                <button onClick={() => {setSubmitted(true)}} disabled={grade!==0 ? false : true}>Submit</button>
            </article>)
    )
}