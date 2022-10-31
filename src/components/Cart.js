import React from 'react'

function Cart(props) {
  return (
    <div>
        <ul>
            <li key={props.pid}>{props.name}    {props.price}</li>
        </ul>
    </div>
  )
}

export default Cart