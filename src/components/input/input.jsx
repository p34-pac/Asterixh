/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './input.css'

function Input(props) {
    const [type, setType] = useState("")
    const [placeHolder, setPlaceHolder] = useState(false)

    function typing(event){
        let text = event.target.outerText;
        // event.target.innerText = ""
        setType(text)
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
        if(type.trim() == ""){
            setPlaceHolder(true)
        }else{
            setPlaceHolder(false)
        }
    }, [type])
    
  return (
    <div {...props} className={props.className?`input ${props.className}`:"input"} data-placeholder-shown={placeHolder} onKeyUp={typing} >
        {/* {type} */}
    </div>
)
}

export default Input