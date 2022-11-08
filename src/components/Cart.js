import React,{useState,useEffect} from 'react'

function Cart(props) {
  const [qty,setQty]=useState([0,0,0,0,0,0,0,0,0]);
  var cart=new Map()
  var temp=[]

  useEffect=()=>{
    temp.push({
      name:props.name,
      price:props.price
    })
    cart.push()
  }

  return (
    <div>
        <ul>
            <li key={props.pid}>{props.name}  {qty[props.pid-100]}  {props.price}</li>
            
        </ul>
    </div>
  )
}

export default Cart