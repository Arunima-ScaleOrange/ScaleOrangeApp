import React, {useState} from 'react';
import './Nimmavaram.css';
import plot from './NIMMAVARAM.jpg';
import data from "./data.json";
import { Modal } from 'antd';

const Nimmavaram = () => {
    const[isModalOpen, setIsModalOpen]=useState(false);
    const[plotId, setPlotId]=useState(1);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleClick = (id) => {
        setIsModalOpen(true);
        setPlotId(id);
    };

  return (
    <div className="image-container">
        <map name="clickable">
        {
            data.map((value) => {
                return(
                    <div className='image-area'>
                            <area 
                                alt={value.id} 
                                title={value.title} 
                                shape="poly"
                                coords={value.coords}  
                                onClick={() => {handleClick(value.id)}}
                            />
                    </div> 
                )
            })
        }
        </map>

        <div className="plot1" > 
            <img className='plot1-img' usemap="#clickable" src={plot} alt="plot"/>
        </div>    
        
        <Modal centered title="Plot Information" open={isModalOpen}  onOk={handleOk} onCancel={handleCancel} className="modal-container">
        <ul><li className={data[plotId-1].status}>{data[plotId-1].status}</li></ul>
                <p>This is {data[plotId-1].title}</p>
                <p>Price: 1 Cr</p>
                <p>Location: {data[plotId-1].location}</p>
                <p>Area: 0 sq. ft.</p>    
        </Modal>
    </div> 
  )
}

export default Nimmavaram