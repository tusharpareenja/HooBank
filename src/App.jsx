import { useState } from 'react'
import React from 'react'
import styles from './style'
import{Navbar, Hero, Stats, Business,
  Billing,
  CardDeal,
  Testimonial,
  Client,
  CTA,
  Footer } from './Components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className= {`${styles.boxWidth}`}>
          <Navbar/>
          
        </div>
         
      </div>

      <div className= {`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>

      </div>
      <div className= {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonial/>
          <Client/>
          <CTA/>
          <Footer/>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
