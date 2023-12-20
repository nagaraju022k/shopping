import React from 'react';
import '../App.css';
import img1 from '../components/images/img1.gif';
import { Link } from 'react-router-dom';

const Trenary = () => {

   
    return (
        <>
        <article className='article'>
        <img className='picture' src={img1} alt="background" />
      <div className='header'>
        <h1>Welcome to my <span>WebSite</span></h1>
        <button> <Link to="login">Signup</Link></button>
        <button>LogIn</button>

        </div>
    </article>
        
        </>

    )
}

export default Trenary