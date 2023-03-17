import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Projects from './Projects';

const Home = (props) => {
  return (
    <div>
      <NavBar/>
        <div className='welcome-msg'>
            <h2>{props.name ? `Welcome ${props.name}!` : "Please Login to continue >>"}</h2>
            <br/>
            <h2>{props.name ? "" : <Link to="/" className='active'>Login</Link>}</h2>
        </div>
      <Projects/>
    </div>
  )
}

export default Home