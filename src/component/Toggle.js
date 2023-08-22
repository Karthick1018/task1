import React, { useState } from 'react'

const Toggle = () => {
    const[click,setClick]=useState(true)
    const Switch=()=>{
        setClick(!click)
    }
    
  return (
    <div className='App'>
        <h1>Task-2</h1>
        <h2 style={{color:"red"}}>Fan<br/><span>{click ? "on":"off"}</span></h2>
        <button type='button' onClick={Switch}>{click ? "off":"on"}</button>   
         </div>
  )
}

export default Toggle;










