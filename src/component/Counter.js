import React, { useState } from 'react'

const Counter = () => {
    const[add,setAdd]=useState(0)
    const Increse =()=>{
        setAdd(add+1)
    }
    const Decrese=()=>{
        setAdd(add-1)
    }
    const Reset=()=>{
        setAdd(0)
    }

  return (
    <div className='App'>
        <h1>Counter Component <br/> Task-1<br/>{add}</h1>
        <button type="button" class="btn btn-primary btn-lg" onClick={Increse}>click to Add</button>
        <button type="button"class="btn btn-success btn-lg" onClick={Reset}>click to Reset</button>
        <button type="button" class="btn btn-danger btn-lg"onClick={Decrese}> click to Remove</button>
       
    </div>
  )
}

export default Counter;





