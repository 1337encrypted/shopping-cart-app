import React from 'react'

function Home(props) {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
        {props.cartCount}
      <h1 className='text-center'>Shopping Cart</h1>
      <img src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt='Cart' width="60px" height="60px "></img>

    </div>
  )
}

export default Home
