import React from 'react'
import './Projects.css';
import Cards from './Cards';
import { v4 as uuid } from 'uuid';

const Projects = () => {
  return (
    <div>
    <Cards title="Project Nimmavaram" text="Some quick example text to build on the card title and make up the
          bulk of the card's content." id={uuid()}/>
    <Cards title="Project Hill Range" text="Some quick example text to build on the card title and make up the
          bulk of the card's content." id={uuid()}/>
    <Cards title="Project Dew Drop" text="Some quick example text to build on the card title and make up the
          bulk of the card's content." id={uuid()}/>
    </div>
  )
}

export default Projects