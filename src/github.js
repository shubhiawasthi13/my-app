// import React, { useEffect, useState } from 'react';
import Card from "./card"
import Akhilesh from './assets/akhilesh.jpeg'
import Cricket from './assets/cricket.jpeg'
import Car from './assets/car.jpeg'
import Bhala from './assets/bhala.jpeg'
import Rahul from './assets/rahul.jpeg'
import Modi from './assets/modi.jpeg'
function Github() {
//     const [data, setData] = useState([])
//   useEffect(() => {
// fetch('https://api.github.com/users/shubhiawasthi13')
// .then(response => response.json())
// .then(data => {
// setData(data)
// })
//   },[])
  return (
  //   <div className='bg-success m-4 p-5'>
  //     <p>GitHub Account</p>
  //  <h1 className='text-center text-light'>GitHub Followers : {data.followers}</h1>
  //  <h4 className='text-light'>username: {data.name}</h4>
  //  <h4 className='text-light'>userBio: {data.bio}</h4>
  
  //   </div>
  <>
     <div className='card-container m-5'>
        <div className='box'>
        <Card title = "News-1" img = {Akhilesh}/>
        </div>
        <div className='box'>
        <Card title = "News-2" img = {Rahul}/>
        </div>
        <div className='box'>
        <Card title = "News-3" img = {Car}/>
        </div>
        <div className='box'>
        <Card title = "News-4" img = {Cricket}/>
        </div>
        <div className='box'>
        <Card title = "News-5" img = {Bhala}/>
        </div>
        <div className='box'>
        <Card title = "News-6" img = {Modi}/>
        </div>
  
          
   
      </div>
  </>
  )
}

export default Github
