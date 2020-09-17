import React from 'react';
import './nav.css';
import Link from'./link.jpg';
function nav()
{
    return(
        <div className="nav-div">        
           <div className="nav-bar">
            <nav>
              <ul>
              <li className="nav-logo-shortli">
                ShortLi <img src={Link} alt="Link-img" className="Linkimg"></img>
              </li>
               <span className="nav-button">
                   <li >
                       <button className="nav-coffee-button"> Accessto Premium </button>
                  </li>  
                  <li >
                       <button className="nav-coffee-button">   Buy me a cup of  Coffee </button>
                  </li>            
               </span>
              </ul>
            </nav>
           </div>
        </div>
    )
}
export default nav;