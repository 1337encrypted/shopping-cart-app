import React,{useState} from 'react'


function Counter(props) {

  return (
    <div>
      <button className='btn btn-primary m-3'>{props.cartCount}</button>
    </div>
  )
}

export default Counter
