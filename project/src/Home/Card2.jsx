import React from 'react'
import {discoutProducts} from '../Assets/products'

const Card2 = () => {
  return (
    <div className='container mt-4 mb-4'>
      <h2 className='text-center'>Big Discount</h2>
      <div className='row g-2'>
        {
          discoutProducts.map((items) => (
            <div className='col-md-4'>
              <div className='card' style={{ height: '100%' }}>
                <div className='d-flex justify-content-between m-2'>
                  <span className='p-2' style={{ backgroundColor: '#0f3460', color: 'white', borderRadius: '5px' }}>{items.discount}% off</span>
                  <i class="bi bi-heart-fill"></i>
                </div>
                <div className='card-body'>
                  <div className='card-img-top d-flex justify-content-center'>
                    <img src={items.imgUrl} class="card-img-top w-75 " alt={items.id} />
                  </div>
                  <div className='card-title'>
                    <h6 class="card-title">{items.productName}</h6>
                    <span className='d-flex mt-4 mb-4'>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
                      <i class="bi bi-star"></i>
                    </span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h6>$ {items.price}</h6>
                    <button
                      style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card2