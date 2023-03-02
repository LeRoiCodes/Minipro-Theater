import React from 'react'
import './MovieCard.css'
import star from '../../images/Star 17.png';
import star1 from '../../images/Star 13.png';

function MovieCard( {image, title, rating} ) {
  return (
    <div className='movie_card'>
          <img className='bg' src={image} alt={title}/>
          <div className='movie_text'>
            <div className='movie_desc'>
              <h4>{title}</h4>
              <div className='movie_rating'> 
              {
                [...Array(rating)].map((e, i) => <img src={star} alt='star' />)
              }
              {
                [...Array(5-rating)].map((e, i) => <img src={star1} alt='star' />)
              }
              </div>
            </div>
            <a className='btn_red'>BOOK</a>
          </div>
        </div>
  )
}

export default MovieCard