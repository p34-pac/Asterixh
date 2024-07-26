/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import bg from "../../assets/images/herobg.png"
import heroIllustration from "../../assets/svg/illustrationhome.svg"



function Hero({thirdSection, secondSection,secondShow=true, thirdShow=true}) {
  return (
    <div className='hero'>
        <span className="bg">
            <img className='imgFill' src={bg} alt="bg" />
        </span>

        <div className="heroContext">
            <div className="illustration">
                <img className='imgFill' src={heroIllustration} alt="illustration" />
            </div>
            <div className="content">
                <span className="main"><b>Paul Peter</b></span>
                
                {
                    secondShow?<span className="sub"><b>{secondSection}</b></span>:null
                }
                {
                    thirdShow?<span className="third">{typeof(thirdSection)=='string'?<b>{thirdSection}</b>:thirdSection}</span>:null
                }
                
            </div>
        </div>

        <span className="scroll">Scroll
            <i className="ICNdropArrow">
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 15.5L13 9.5M7 15.5L1 9.5M7 15.5V1.5" stroke="#0D040E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </i>
        </span>
    </div>
  )
}

export default Hero