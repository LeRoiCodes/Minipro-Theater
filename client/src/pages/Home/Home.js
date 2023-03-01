import React from 'react'
import './Home.css'
import img2 from '../../images/Popcorn with soda pop cinematic clapper and 3D glasses.png'

function Home() {
  return (
    <div className='intro'>
      <div className='intro_text'>
        <h1>MOVIE TICKET BOOKING</h1>
        <p>Get your movie ticket, your favorite movie snacks and reserve your preferred seat at your convinience.</p>
        <a className='btn_red'>GET STARTED</a>
      </div>
      <img src={img2} alt="popcorn"/>
    </div>
  )
}

export default Home