import React, {useState} from 'react'
import Home from "./Homebackup";
import Cart from "./Cart";
import "./Cart.css"
let prod = {
  Computers: 
    [{pid:1,pname:"Macbook Mac studio",price:80000, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585990/Croma%20Assets/Computers%20Peripherals/Desktops/Images/9009476698142.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"},
    {pid:2,pname:"Ryzen 5",price:60000, ImageUrl:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_pT7b9V4Gtws5ZOjwjk3i0yXziiVdnPiTq211JEKYErTJ4r-bpl1js3VOMG-B0DIyqYXQ4yq3c-U&usqp=CAc"},
    {pid:3,pname:"Intel i9",price:50000, ImageUrl:"https://www.thevaluestore.in/image/cache/catalog/2021/Intel/core-i9-12900k-1-1000x1000.jpg"}],
  
  Laptops: 
    [{pid:4,pname:"Macbook Air",price:80000, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666277779/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/256712_0_y4ghxi.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"},
    {pid:5,pname:"ASUS TUF gaming",price:68000, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664417481/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256263_0_hhjvoi.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"},
    {pid:6,pname:"Microsoft surface GO",price:70900, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664415757/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257307_0_w9hown.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"}],
  
  Servers: 
    [{pid:7,pname:"Dell Inspiron Desktop",price:70989, ImageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/inspiron-3910-desktop/media-gallery/in3910-csy-00000ff-bl-noodd-nomcr.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=362&qlt=100,1&resMode=sharp2&size=362,402&chrss=full"},
    {pid:8,pname:"Dell OptiPlex 7000",price:93267, ImageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/7000-tsff/media-gallery/optiplex-7000t-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full"},
    {pid:9,pname:"Dell T440 tower server",price:132000, ImageUrl: "https://www.eagle.in/wp-content/uploads/2018/10/Dell-T440-Server.jpg"}]
}
var qty=[0,0,0,0,0,0,0,0,0];
function ProductList() {
  const [count,setCount]=useState(0);
  const [AllProds,setProds] = useState([]);
  const [cart,setCart] = useState([]);

  const handleClickComputers=()=>{
    let Allcomputers= prod.Computers;
    setProds(Allcomputers);
  }

  const handleClickLaptops=()=>{
    let AllLaptops= prod.Laptops;
    setProds(AllLaptops);
  }

  const handleClickServers=()=>{
    let AllServers= prod.Servers;
    setProds(AllServers);
  }

  function addtocart(id){
    var flag;
    console.log(cart,qty);
    setCount(count+1);
    let item = {};
    if(cart.length == 0){
      item.pid = AllProds.find(item=>(item.pid===id)).pid;
      item.name = AllProds.find(item=>(item.pid===id)).pname;
      item.price = AllProds.find(item=>(item.pid===id)).price;
      console.log("1");
      setCart(cart=>[...cart,item]);
      qty[id-1]=qty[id-1]+1;
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
        item.pid = AllProds.find(item=>(item.pid===id)).pid;
        item.name = AllProds.find(item=>(item.pid===id)).pname;
        item.price = AllProds.find(item=>(item.pid===id)).price;
        qty[id-1]=qty[id-1]+1;
        setCart(cart=>[...cart,item]);
      }
      else{
        qty[id-1]=qty[id-1]+1;

      }
    }
    
  }
  return (
    <div>
      <Home cartCount={count} />
      <div style={{"display":"flex"}}>
        <div style={{"width":"70%", "textAlign":"center","backgroundColor":"cyan","margin":"10px"}}>
          <h1 className='textCenter text-info'>Product List</h1>
          <div className='containerFluid mx-2'></div>
          <div className='row mt-3 mx-2'>
            <div className='col-md-4'>
              <button className='btn btn-warning' onClick={handleClickComputers} >Computers</button>
              <button className='btn btn-warning' onClick={handleClickLaptops} >Laptops</button>
              <button className='btn btn-warning' onClick={handleClickServers} >Servers</button>

              <center><ul className='textCenter bg-red'>
              {AllProds.map(prod=>
                <li style={{"display":"flex", "flexDirection":"col", "margin":"10px", "justifyContent":"center"}} key={prod.pid}>
                  {prod.pname} 
                  <img src={prod.ImageUrl} alt="image" width="100px" height="100px" /> 
                  {prod.price} 
                  <button className='btn btn-secondary' onClick={()=>addtocart(prod.pid)}>Add To Cart</button> </li>)}
              </ul></center>

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
            <Cart pid={item.pid} name={item.name} price={item.price} qty={qty[item.pid-1]}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList