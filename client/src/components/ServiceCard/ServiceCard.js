import React from 'react'
import './ServiceCard.css'

function ServiceCard({image, text}) {
  return (
    <div className='service_card'>
        <img className='bg' src={image} alt={text}/>
        <p>{text}</p>
    </div>
  )
}

export default ServiceCard