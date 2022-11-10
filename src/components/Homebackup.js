import React from 'react';
import Counter from "./Counter";
function Home(props) {
  return (
    <div style={{backgroundColor:"purple", padding:"10px", display:"flex", justifyContent:"space-between"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>

        {/* <img src="F:\ReactJs\shopping-cart-app\src\images\cart1.png" alt='Cart' width="60px" height="60px "></img> */}
        <img src="https://img.icons8.com/3d-fluency/94/null/shopping-cart.png" alt='Cart' width="60px" height="60px"/>
        <Counter cartCount={props.cartCount}/>
        <h1 className='text-center' style={{"color":"rgb(36,211,253)"}}>Shopping Cart</h1>

      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{color:"deeppink"}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color:"green"}}>Customer Care</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color:"navy"}}>About Us</a>
            </li>
            <li className="nav-item dropdown">
              {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
              {/* Dropdown link */}
              {/* </a> */}
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Home
