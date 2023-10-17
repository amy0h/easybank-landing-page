import React from 'react'
import { snsIcons } from '../../constants'
import { footerLinks } from '../../constants'
import Button from '../../components/Button'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <img 
        src='/logo-white.svg'
        alt='logo'
      />
      <div className='sns-container'>

        {snsIcons.map((icon, index) => (
            <img
              className='sns-link'
              src={icon.src}
              alt={icon.alt}
              key={icon.index}
            />
          ))}
      </div>
      <div className='footer-links-container'>
        {footerLinks.map((item) =>
          <li
            key={item.label}
            className='footer-links'
          >
              <a
                  href={item.href}
                  className='footer-links-item'>
                  {item.label}
              </a>
          </li>
        )}
      </div>
      <Button>
        Request Invite
      </Button>
      <p className='rights'>
        © Easybank. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer