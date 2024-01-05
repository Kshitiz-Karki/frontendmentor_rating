import './css/style.css'
import star from './assets/images/icon-star.svg'
import thankYou from './assets/images/thank-you.svg'
import Rating from './components/Rating'
import { useState } from 'react'

function App() {

  const [ ratings, setRatings ] = useState([
    { id: 1, value: '1', isHeld: false },
    { id: 2, value: '2', isHeld: false },
    { id: 3, value: '3', isHeld: false },
    { id: 4, value: '4', isHeld: false },
    { id: 5, value: '5', isHeld: false },
  ])
  const [ feedbackSubmitted, setFeedbackSubmitted ] = useState(false)
  const [ rating, setRating ] = useState(null)

  const toggleIsheld = id => {
    setRatings(prevState => prevState.map(x =>
      x.id === id
        ? { ...x, isHeld: !x.isHeld }
        : { ...x, isHeld: false }
    ))
  }

  const handleSubmit = () => {
    setFeedbackSubmitted(true)
    const { value } = ratings.find(x => x.isHeld)
    setRating(value)
  }

  const ratingElements = ratings.map(rating => 
    <Rating
      key={rating.id} 
      rating={rating}
      toggleIsheld={toggleIsheld}
  />)

  return (
    <>
      <div className="vh-full flex-center">
        <div className="container feedback">
          <div className='container-inner'>
            {
              feedbackSubmitted
                ? 
                  <section className='flex-center thank-you'>
                    <img 
                      src={thankYou} 
                      alt="" 
                    />
                    <h3>You selected {rating} out of 5</h3>
                    <h2>Thank you!</h2>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
                  </section>
                : 
                  <article>
                    <div className="circle flex-center no-pointer"> 
                      <img 
                        src={star} 
                        alt="small orange star"
                      />
                    </div>
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <section className="flex-row">
                      {ratingElements}
                    </section>
                    <button className='submit-btn' onClick={handleSubmit}>SUBMIT</button>
                  </article>
            }

          </div>
        </div>
        <div className="attribution container">
          <section>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="#">Kshitiz</a>.
          </section>
        </div>
      </div>
    </>
  )
}

export default App
