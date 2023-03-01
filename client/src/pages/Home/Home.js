import React from 'react'
import './Home.css'
import img2 from '../../images/Popcorn with soda pop cinematic clapper and 3D glasses.png'

function Home() {
  return (
    <div className='home'>
    <section className='intro'>
      <div className='intro_text'>
        <h1>MOVIE TICKET BOOKING</h1>
        <p>Get your movie ticket, your favorite movie snacks and reserve your preferred seat at your convinience.</p>
        <a className='btn_red' href='#'>GET STARTED</a>
      </div>
      <img src={img2} alt="popcorn"/>
    </section>
    <hr />
    <section className='showing'>
      <h2>Now Showing</h2>
      <div className='show_container'>
        <div className='show_card'>
          <img />
          <div className='show_text'>
            <div>
              <h4>Happy halloween</h4>
            </div>
            <a className='btn_red'>BOOK</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home