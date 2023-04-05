import React from 'react'
import Iframe from 'react-iframe'
import './MapView.css'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const MapView = () => {
  return (
    <div className='container'>
    <div className='btn-grp'>
      <Button type="primary" style={{backgroundColor: "black"}}>
      <Link to='/project' className='card-link'> Back </Link>
      </Button>

      <Button type="primary" style={{backgroundColor: "black"}}>
      <Link to='/home' className='card-link'> Home</Link>
      </Button>
    </div>
      <Iframe url="https://mapmyindia-testing.netlify.app/"
      />
    </div>
  )
}

export default MapView