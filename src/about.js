import React from 'react'
import Card from './card'
import Pushpa from './assets/puspa.jpeg'


function About() {
  return (
    <>
    <div className='card-container m-5'>
      <div className='box'>
      <Card title = "News-1" img = {Pushpa}/>
      </div>
      <div className='box'>
      <Card title = "News-2" img = {Pushpa}/>
      </div>
      <div className='box'>
      <Card title = "News-3" img ={Pushpa}/>
      </div>
      <div className='box'>
      <Card title = "News-4" img = {Pushpa}/>
      </div>
      <div className='box'>
      <Card title = "News-5" img = {Pushpa}/>
      </div>
      <div className='box'>
      <Card title = "News-6" img = {Pushpa}/>
      </div>
    </div>
    </>
  )
}

export default About
