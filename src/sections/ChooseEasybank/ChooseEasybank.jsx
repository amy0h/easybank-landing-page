import React from 'react'
import { features } from '../../constants'
import { Feature } from '../../components/Feature'
import './ChooseEasybank.css'

const ChooseEasybank = () => {
  return (
    <section className='choose-easy-bank'>
      <div className='section-title'>
        <h2 className='title'>Why choose Easybank?</h2>       
        <p className='desc'>
          We leverage Open Banking to turn your bank account into your
          financial hub. Control your finances like never before.
        </p>
      </div>
      <div className='features-container'>
        {features.map((feature, index) => (
            <Feature key={index} {...feature}/>
          ))}
      </div>
    </section>
  )
}

export default ChooseEasybank