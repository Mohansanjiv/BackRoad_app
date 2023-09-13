import React from 'react'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
import { socialLinks } from './data'

const Footer = () => {
  return (
    <footer className="section footer">
    <PageLinks parentClass="footer-link" itemClass="footer-link"/>
      <ul className="footer-icons">
       {  
        socialLinks.map((link)=>{
          return(
            <SocialLinks key={link.id} {...link} itemClass="footer-icon" /> 
              )
          })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
