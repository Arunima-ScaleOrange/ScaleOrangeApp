import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Project.css'
import Nimmavaram from '../Assets/Nimmavaram';

const Project = (props) => {
  return (
    <div className='container'>

      <div className='map-btn'>
      <Button type="primary" style={{backgroundColor: "black"}} >
      <Link to='/home' className='card-link'> Back </Link>
      </Button>

      <Button type="primary" style={{backgroundColor: "black"}} >
      <Link to='/MapView' className='card-link'> Map View </Link>
      </Button>
      </div>

      <div className='plot'>
      <Nimmavaram name={props.name}/>
      </div>

    </div>
  )
}

export default Project