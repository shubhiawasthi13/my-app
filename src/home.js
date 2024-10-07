//import App from './App';
import Banner from './assets/banner.jpeg'
import Card from './card';
import Cricket from './assets/cricket.jpeg'
import Car from './assets/car.jpeg'
import Bhala from './assets/bhala.jpeg'

function Home (){
    return(
    <>
     <div className='home'>
        <img src= {Banner} alt='banner'></img>
      </div>
      <h3 className='text-center p-4'>Latest News</h3>
      <div className='card-container'>
        <div className='box'>
        <Card title = "News-1" img = {Cricket}/>
        </div>
        <div className='box'>
        <Card title = "News-2" img = {Bhala}/>
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
        <Card title = "News-6" img = {Car}/>
        </div>
  
          
   
      </div>
    </>
      
    )
}
export default Home