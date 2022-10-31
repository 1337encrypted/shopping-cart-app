import React, {useState} from 'react'

let prod = {
  Computers: 
  [{pid:100,pname:"Macbook Mac studio",price:80000, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585990/Croma%20Assets/Computers%20Peripherals/Desktops/Images/9009476698142.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"},
  {pid:101,pname:"Ryzen 5",price:60000, ImageUrl:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_pT7b9V4Gtws5ZOjwjk3i0yXziiVdnPiTq211JEKYErTJ4r-bpl1js3VOMG-B0DIyqYXQ4yq3c-U&usqp=CAc"},
  {pid:102,pname:"Intel i9",price:50000, ImageUrl:"https://www.thevaluestore.in/image/cache/catalog/2021/Intel/core-i9-12900k-1-1000x1000.jpg"}],
  
  Laptops: 
  [{pid:200,pname:"Macbook Air",price:80000, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666277779/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/256712_0_y4ghxi.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"},
  {pid:201,pname:"ASUS TUF gaming",price:68000, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664417481/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256263_0_hhjvoi.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"},
  {pid:202,pname:"Microsoft surface GO",price:70900, ImageUrl:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664415757/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257307_0_w9hown.png/mxw_2256,s_jp2,s_videoimg,ns_atwebp,f_auto"}],
  
  Servers: 
  [{pid:300,pname:"Dell Inspiron Desktop",price:70989, ImageUrl:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/inspiron-3910-desktop/media-gallery/in3910-csy-00000ff-bl-noodd-nomcr.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=362&qlt=100,1&resMode=sharp2&size=362,402&chrss=full"},
  {pid:301,pname:"Dell OptiPlex 7000",price:93267, ImageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/products/desktops-and-all-in-ones/optiplex/7000-tsff/media-gallery/optiplex-7000t-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full"},
  {pid:302,pname:"Dell T440 tower server",price:132000, ImageUrl: "https://www.eagle.in/wp-content/uploads/2018/10/Dell-T440-Server.jpg"}]
}

function ProductList() {

  const [AllProds,setProds] = useState([]);

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

  
  return (
    <div style={{"width":"70%", "text-align":"center","background-color":"cyan"}}>
      <h1 className='text-center text-info'>Product List</h1>
      <div className='container-fluid mx-2'></div>
      <div className='row mt-3 mx-2'>
        <div className='col-md-4'>
          <button className='btn btn-warning' onClick={handleClickComputers} >Computers</button>
          <button className='btn btn-warning' onClick={handleClickLaptops} >Laptops</button>
          <button className='btn btn-warning' onClick={handleClickServers} >Servers</button>

          <center><ul className='text-center bg-red'>
           {AllProds.map(prod=><li style={{"display":"flex", "flex-direction":"col", "margin":"10px", "justify-content":"center"}} key={prod.pid}>{prod.pname} <img src={prod.ImageUrl} alt="image" width="100px" height="100px" /> {prod.price} <button className='btn btn-secondary '>Add To Cart</button> </li>)}
          </ul></center>

        </div>
      </div>
    </div>

  )
}

export default ProductList