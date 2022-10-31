import React from 'react'

function ProductList() {
  return (
    <div>
      <h1 className='text-center text-info'>Product List</h1>
      <div className='container-fluid mx-2'></div>
      <div className='row mt-3 mx-2'>
        <div className='col-md-4'>
          <button className='btn btn-warning'>computers</button>
          <button className='btn btn-warning'>Laptops</button>
          <button className='btn btn-warning'>Servers</button>
        </div>
        {/* <div className='col-md-9'>
        </div> */}
      </div>
    </div>

  )
}

export default ProductList