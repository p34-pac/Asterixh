/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './Textarea.css'

function Textarea(props) {
  const [value, setValue] = useState("")
  const textbox = useRef()
  const [placeHolder, setPlaceHolder] = useState(false)

  function handleChangeValue(event){
    setValue(event.target.outerText);
    let element = {
      componentName: "Textarea",
      componentClass: props.className,
      componentId: props.id,
      value: event.target.outerText,
      ...props

    }
    try {
      props.onChange(element)
    } catch (error) {
      return
    }
  }
  useEffect(() => {
    if(value.trim() == ""){
        setPlaceHolder(true)
    }else{
        setPlaceHolder(false)
    }
}, [value])

  

  return (
    <div className={props.className?"textarea "+props.className:"textarea"}>
        <header>
            <b className="title" >{props.title?props.title:"Title"}</b>
        </header>
        {props.children}
        <div ref={textbox} className="textbox" data-placeholder-shown={placeHolder} placeholder={props.placeholder?props.placeholder:"Type text here"} contentEditable onKeyUp={handleChangeValue}>
          
        </div>

        
        
    </div>
  )
}

export default Textarea