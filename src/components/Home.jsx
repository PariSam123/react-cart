import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../Context'

function Home() {
  const context = useContext(DataContext)
  const [products] = context.productApi.products

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-danger">Home</h3>
        </div>
      </div>
      <dvi className="row align-content-center justify-content-center d-flex">
        {
          products.map((item,index) => {
            const {id, title, price, description, rating, thumbnail} = item

            return (
              <div className="col-md-4 mt-2" key={index}>
                <div className="card">
                  <NavLink to={`/product/${id}`}>
                    <img src={thumbnail} alt="no product image" className='img-fluid rounded' />
                  </NavLink>
                  <div className='card-body'>
                    <h6 className='text-success display-6 text-center'> {title} </h6>
                    <p className='text-secondary'>&#8377; {price} </p>
                    <p className='text-muted'>
                      <strong> Rating</strong>
                      <span className='text-warning'> {rating} </span>
                    </p>
                  </div>
                </div>
                <div>
                  <p> {description} </p>
                </div>
              </div>
            )
          })
        }
      </dvi>
    </div>
  )
}

export default Home
