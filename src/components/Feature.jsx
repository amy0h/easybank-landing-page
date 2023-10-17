import React from 'react'

export const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature">
        <img src={icon} alt={title} />
        <h3 className='feature-title'>{title}</h3>
        <p className='desc'>{description}</p>
    </div>
  )
}