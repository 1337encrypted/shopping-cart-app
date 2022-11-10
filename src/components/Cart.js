import React,{useState,useEffect} from 'react'
import "./Cart.css"
function Cart(props) {
  return (
    <div>
      <table>
        {/* <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr> */}
        <tr key={props.pid}>
          <td>{props.name}</td>
          <td>{props.qty}</td>
          <td>{props.price}</td>
          <td>{props.qty*props.price}</td>
        </tr>
       
      </table>
    </div>
  )
}

export default Cart