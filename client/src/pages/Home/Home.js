import React from 'react'
import './Home.css'
import img2 from '../../images/Popcorn with soda pop cinematic clapper and 3D glasses.png';
import img3 from '../../images/cinema tickets.png';
import img4 from '../../images/cinema tickets (1).png';
import img5 from '../../images/cinema tickets (2).png';
import img6 from '../../images/cinema tickets (3).png';
import img7 from '../../images/About us.png';
import img9 from '../../images/popcorn bowl.png';
import img8 from '../../images/cinema tickets (4).png';
import img10 from '../../images/Cinema (1).png';
import img11 from '../../images/cinema.png';

import MovieCard from '../../components/MovieCard/MovieCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

function Home() {
  return (
    <div className='home'>
    <section id='intro'>
      <div className='intro_text'>
        <h1>MOVIE TICKET BOOKING</h1>
        <p>Get your movie ticket, your favorite movie snacks and reserve your preferred seat at your convinience.</p>
        <a className='btn_red' href='#'>GET STARTED</a>
      </div>
      <img src={img2} alt="popcorn"/>
    </section>
    <hr />
    <section id='showing'>
      <h2>Now Showing</h2>
      <div className='container'>
      <MovieCard 
        image={img3}
        title=' Happy Halloween'
        rating={4}
         />
        <MovieCard 
        image={img4}
        title='Strange World'
        rating={3}
         />
         <MovieCard 
        image={img5}
        title='Puss in boots'
        rating={5}
         />
         <MovieCard 
        image={img6}
        title='Pathaan'
        rating={5}
         />
      </div>
    </section>
    <section id='about'>
    <img  src={img7} alt='about'/>
    </section>
    <section id='services'>
      <h2>Our Services</h2>
      <div className='container'>
        <ServiceCard 
        image={img8} 
        text='Book your tickets to watch your favorite movies.'
        />
        <ServiceCard 
        image={img10} 
        text='Reserve your preferred seat'
        />
        <ServiceCard 
        image={img9} 
        text='Order for your favourite cinema snacks'
        />
        <ServiceCard 
        image={img11} 
        text='Watch movie trailers'
        />
      </div>
    </section>
    </div>
  )
}

export default Home