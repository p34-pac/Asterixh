/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './SkillCard.css'
import webDevIllustration from '../../assets/svg/skillwebdev.svg'
import Button from '../button/Button'

function SkillCard({skill, duration, illustration}) {
  return (
    <div className='SkillCard'>
        <div className="illustration">
            <img src={webDevIllustration} alt="skill Illustration" />
        </div>
        <div className="text">
            <b className='skill'>{skill}</b>
            <b className='duration'>{duration} years</b>
        </div>
        <span className="cta">
            <Button className="hoverGrow">Get in touch</Button>
        </span>
    </div>
  )
}

export default SkillCard