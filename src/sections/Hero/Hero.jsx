import React from 'react'
import Button from '../../components/Button'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='col-first'>
        <img
          className='hero-img'
          alt='hero image'
          src='/image-mockups.png'  
        />
      </div>
      <div className='col-second'>
        <h1 className='title'>
            Next generation digital banking
        </h1>
        <p className='desc'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much more.
        </p>
        <Button>
          Request Invite
        </Button>
      </div>

    </section>
  )
}

export default Hero