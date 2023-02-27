import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
        <div className='welcome-msg'>
            <h2>{props.name ? `Welcome ${props.name}!` : "Please Login to continue >>"}</h2>
            <br/>
            <h2>{props.name ? <Link to="/" className='active'>Logout</Link> : <Link to="/" className='active'>Login</Link>}</h2>
        </div>
    </div>
  )
}

export default Home