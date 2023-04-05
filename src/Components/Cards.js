import React from 'react';
import './Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import building from "../Assets/building.jpg";

const Cards = (props) => {
  // const unique_id = props.id;
  // const small_id = unique_id.slice(0,8);

  return (
    <div className='card-grp'>
    <Card  className='card'>
      <Card.Img variant="top" src={building} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text} 
        </Card.Text>
        <Link to='/Project' className='card-link'>
        <Button variant="primary" className='card-btn'>
          View
            {/* <Link to={`/Project/${small_id}`} className='card-link'>View</Link> */}
        </Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards