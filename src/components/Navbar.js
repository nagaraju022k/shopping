import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css'




const Navbar = () => {

  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <div className='nav-elements'>
            <ul className='list'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="profile">UserDetails</Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar