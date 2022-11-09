import React from 'react'

function Cart(props) {
  return (
    <div>
        <ul>
            <li style = {{"list-style":"none"}}key={props.pid}>{props.name}    {props.price}</li>
        </ul>
    </div>
  )
}

export default Cart