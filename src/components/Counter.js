import React,{useState} from 'react'


function Counter(props) {
const [count,setCount]=useState(0)
const handleClick=()=>{
    setCount(count+1)
}
  return (
    <div>
      <button className='btn btn-primary m-3'>{props.cartCount}</button>
    </div>
  )
}

export default Counter
