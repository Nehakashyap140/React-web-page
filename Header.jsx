import React from 'react';
import  './Header.css';

export default function Header()
{
  return(
      <>
         <div>
             <header className='header'>
                 <img src = "https://www.rebliss.in/webpic/rblogo.jpg" alt='image' width ="100px" height = "50px"/>
                 <nav className ="nav">
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact</li>
                 <li>Details</li>
             </nav>
             </header> 
         </div>
         </>
  )
};
