import React from 'react'
import Counter from './Counter'
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate();

  return (
    <div>

     <div style={{backgroundColor:"purple", padding:"10px", justifyContent:"space-between"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>

        <Counter cartCount={props.cartCount}/>

        <h1 className='text-center'>Shopping Cart</h1> 
        <img src="https://img.icons8.com/3d-fluency/94/null/shopping-cart.png" alt='Cart' width="60px" height="60px "></img> 

        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{backgroundColor:"yellow"}}>
        <ul class="navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="#" style={{color:"deeppink"}}>Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"darkgreen"}}>Customer Care</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"navy"}} onClick={() => navigate("/about")}>About Us</a>
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