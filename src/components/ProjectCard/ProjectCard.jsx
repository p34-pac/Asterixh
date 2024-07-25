/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ProjectCard.css'
import placeHolder from "../../assets/images/projectCardImg.png"
import Button from '../button/Button'

function ProjectCard({setHoverState, ort='vertical'}) {
  return (
    <div className="ProjectCard" data-ort={ort} onMouseOver={()=>{try{setHoverState(true)}catch(err){return}}} onMouseOut={()=>{try{setHoverState(false)}catch(err){return}}}>
        <div className="productPlaceHolder">
            <img className='imgFill' src={placeHolder} alt="placeHolder" />
        </div>
        <div className="projectContext">
            <b className="projectTitle">Project fame</b>
            <b className="projectDetail">
            A website showing list of famous people, their reason for fame and their year of fame
            </b>
            <span className="cta">
                <Button className="hoverGrowRev">View source</Button>
                <Button className="hoverGrow">View Demo</Button>
            </span>
        </div>
    </div>
  )
}

export default ProjectCard