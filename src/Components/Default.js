import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './Default.css'
import { UserOutlined } from '@ant-design/icons';

const Default = () => {
  return (
    <div className='container'>
        <div className='inner-container'>
            <h2 className='heading'>Login/Register as:</h2>
            <Link to='/admin' className='card-link'>
            <Button type="primary" style={{backgroundColor: "black", width: "200px"}}>
            <UserOutlined style={{fontSize: "20px"}}/>
            Administrator
            </Button></Link>

            <Link to='/login' className='card-link'>
            <Button type="primary" style={{backgroundColor: "black", width: "200px"}}>
            <UserOutlined style={{fontSize: "20px"}}/>
            User
            </Button></Link>
        </div>
    </div>
  )
}

export default Default