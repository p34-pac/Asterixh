/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import logo from '../../assets/svg/Asterixh.svg'
import Hero from './Hero'
import Button from '../button/Button'
import Menu from '../Menu/Menu'

function Header({pres}) {
  return (
    <>
          <Menu pres={pres}/>

          <div className='mainHeader'>
              <div className="topSection">
                  <span className="logo"><img src={logo} alt="logo" /></span>
                  <div className="navLinks">
                      <a href="/" className={pres=="home"?'active':null}>Home</a>
                      <a href="/about" className={pres=="about"?'active':null}>About</a>
                      <a href="/contact-me" className={pres=="contact-me"?'active':null}>Contact</a>
                      <a href="/works" className={pres=="works"?'active':null}>Works</a>
                      <a href="/services" className={pres=="services"?'active':null}>Services</a>
                  </div>
              </div>
              <Hero
                  thirdSection={<Button>Get in touch</Button>} />
          </div>
    </>
  )
}

export default Header