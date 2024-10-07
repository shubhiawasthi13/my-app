import React from 'react'
import Card from './card'
import Rahul from './assets/rahul.jpeg'
import Eng from './assets/eng.jpeg'
import Modi from './assets/modi.jpeg'
function services() {
  return (
  <>
     <div className='card-container m-5'>
      <div className='box'>
      <Card title = "News-1" img = {Rahul}/>
      </div>
      <div className='box'>
      <Card title = "News-2" img = {Eng}/>
      </div>
      <div className='box'>
      <Card title = "News-3" img ={Modi}/>
      </div>
      <div className='box'>
      <Card title = "News-4" img = {Rahul}/>
      </div>
      <div className='box'>
      <Card title = "News-5" img = {Eng}/>
      </div>
      <div className='box'>
      <Card title = "News-6" img ={Modi}/>
      </div>
    </div>
  </>
  )
}

export default services
