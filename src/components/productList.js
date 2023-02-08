import React, {useState} from 'react'
import Home from "./Home";
import Cart from "./Cart";
import "./Cart.css"

let prod = new Promise((resolve, reject) => {
  fetch("https://shopping-cart-backend.sbtopzzzlg.repl.co/products")
    .then(response => {
      response.json()
        .then(json => resolve(json.data.products))
        .catch(reject);
    })
    .catch(reject);
});

var qty = {};
var cart=[]

function ProductList() {
  const [count,setCount]=useState(0);
  const [AllProds,setProds] = useState([]);
  const [cart,setCart] = useState([]);

  const handleClickComputers= async ()=>{
    let Allcomputers = (await prod).filter(product => product.category === "Computers");
    setProds(Allcomputers);
  }

  const handleClickLaptops= async ()=>{
    let AllLaptops= (await prod).filter(product => product.category === "Laptops");
    setProds(AllLaptops);
  }

  const handleClickServers= async ()=>{
    let AllServers= (await prod).filter(product => product.category === "Servers");
    setProds(AllServers);
  }

  function addtocart(id){
    var flag;
    console.log(cart,qty);
    setCount(count+1);
    let item = {};
    if(cart.length == 0){
      item.pid = AllProds.find(item=>(item._id===id))._id;
      item.name = AllProds.find(item=>(item._id===id)).name;
      item.price = AllProds.find(item=>(item._id===id)).price;
      console.log("1");
      setCart(cart => [...cart, item]);
      if (id in qty)
        qty[id] = qty[id] + 1;
      else
        qty[id] = 1;
    }
    else{ 
      for (let i = 1; i < cart.length+1; i++) {
        const element = cart[i-1];
        if(element.pid != id){
          flag=0;
        }
        else{
          flag=1;
          break;
        }
      }
      if(flag==0){
        item.pid = AllProds.find(item=>(item._id===id))._id;
        item.name = AllProds.find(item=>(item._id===id)).name;
        item.price = AllProds.find(item=>(item._id===id)).price;
        if (id in qty)
          qty[id] = qty[id] + 1;
        else
          qty[id] = 1;
        setCart(cart=>[...cart,item]);
      }
      else{
        if (id in qty)
          qty[id] = qty[id] + 1;
        else
          qty[id] = 1;

      }
    }
    
  }
  return (
    <div>
      <Home cartCount={count} />
      <div style={{"display":"flex"}}>
        <div style={{"width":"70%", "textAlign":"center","backgroundColor":"cyan","margin":"10px"}}>
          <h1 className='textCenter' style={{color:"black"}}>Product List</h1>
          <div className='containerFluid mx-2'></div>
          <div className='row mt-3 mx-2'>
            <div className='col-md-5 space-between'>
              <button className='btn btn-warning m-2' onClick={handleClickComputers}>Computers</button>
              <button className='btn btn-warning m-2' onClick={handleClickLaptops} >Laptops</button>
              <button className='btn btn-warning m-2' onClick={handleClickServers} >Servers</button>

              <ul className='bg-red' style = {{"display":"flex", "align-items":"center","list-style":"none"}}>
              {AllProds.map(prod=>
                <li style={{"flex":"0 0 1", "margin":"10px"}} key={prod._id}>
                  {prod.name} 
                  <img src={prod.image} alt="image" width="100px" height="100px" /> 
                  {prod.price} 
                  <button className='btn btn-secondary' onClick={()=>addtocart(prod._id)}>Add To Cart</button> </li>)}
              </ul>


            </div>
          </div>
        </div>
        <div style={{"width":"30%", "textAlign":"center","backgroundColor":"cyan","margin":"10px"}}>
          <h3>Your Cart</h3>
          {/* <button className='btn btn-secondary' onClick={()=>showcart()}>Show cart</button> */}
          <table>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </table>
          {cart.map(item=>(
            <Cart pid={item.pid} name={item.name} price={item.price} qty={qty[item.pid]}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList