import React from 'react'
import {Link} from 'react-router-dom';

function Card({title, img}) {
  return (
    <div className="card">
    <div className='card-img'>
      <img src={img} alt="cart-img"/>
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit sapiente voluptate dolorem, recusandae in commodi dignissimos assumenda voluptas animi ab quos unde architecto provident itaque nulla magni magnam non.</p>
      <Link href="#" className="card-link btn btn-danger">Read more</Link>
    </div>
  </div>
  )
}

export default Card
