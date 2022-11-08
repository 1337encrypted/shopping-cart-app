import React from 'react'

function Home(props) {
  return (
    <div style={{display:"flex","justifyContent":"center"}}>
        <h1>Shopping Cart</h1>
      <div style={{"justifyContent":"end","backgroundColor":"red"}}>  
        <img src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt='Cart' width="60px" height="60px "></img>
        <label>{props.cartCount}</label> 
      </div>

    </div>
  )
}

export default Home
