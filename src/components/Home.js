import React from 'react'
import Counter from './Counter'

function Home() {
  return (
    <div style={{backgroundColor:"purple", padding:"10px"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>

        <Counter/>
        <h1 className='text-center'>Shopping Cart</h1>
        <img src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt='Cart' width="60px" height="60px "></img>

        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="#" style={{color:"deeppink"}}>Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"green"}}>Customer Care</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"navy"}}>About Us</a>
        </li>
        <li class="nav-item dropdown">
        {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
        {/* Dropdown link */}
        {/* </a> */}
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        </div>
        </li>
        </ul>
        </div>
        </nav>
        </div>
  )
}

export default Home
