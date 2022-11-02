import React,{useState} from 'react'


function Counter() {
const [count,setCount]=useState(0)
const handleClick=()=>{
    setCount(count+1)
}
  return (
    <div>
      <button className='btn btn-danger m-3'>{count}</button>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter
