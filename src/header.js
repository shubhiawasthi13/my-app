//import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import { useRef } from "react";


function Header (){
 //const [theme, setTheme] = useState("light-theme")
  // const [text, SetText] = useState("dark mode")

  // const ToggleTheme = () => {
  //    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme")
  //    text === "light Mode" ? SetText("dark Mode") : SetText("light Mode")
  // };

  // useEffect(() => {
  //  document.body.className = theme;
  // }, [theme]);
  
  const navRef  = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
    return(
    <>
      <header className="header">
        <h3 style={{fontStyle:"italic"}} className="text-danger">LatestNews</h3>
          <ul ref={navRef}>
            <li> 
              <NavLink to="./"
               className={({isActive}) =>
              `${isActive ? "text-danger" : "text-dark"} list`
            }
            >
            Home
            </NavLink>

            </li>
            <li> 
              <NavLink to="/entertainment"
               className={({isActive}) =>
              `${isActive ? "text-danger" : "text-dark"} list`
            }
            >
            Entertainment
            </NavLink>

            </li>
            <li> 
              <NavLink to="/trending-news"
               className={({isActive}) =>
              `${isActive ? "text-danger" : "text-dark"} list`
            }
            >
            Trending News
            </NavLink>

            </li>
            <li> 
              <NavLink to="/all-news"
               className={({isActive}) =>
              `${isActive ? "text-danger" : "text-dark"} list`
            }
            >
            All News
            </NavLink>
            </li>
            </ul>  

           {/* <div>
           <button className="position-absolute top-0" onClick={ToggleTheme} 
            >{text}</button>
           </div> */}

           <div>
            <input type='search'
            className='searchbar'
            placeholder='search here....'
            />
           </div>
           
           <div>
            <button className="menu-btn" onClick={showNavBar}>
             <FaBars/>
            </button>
           </div>
       
          
          
     
     
 
      </header>
 
    </>

    )
}
export default Header