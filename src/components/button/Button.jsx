/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div className="button">
      <div {...props}  style={{"--deg":`${props.PersDegree}deg`}} className={'Dbutton '+props.className} >
        <span className="inner">{props.children}</span>
      </div>
    </div>
  )
}

export default Button