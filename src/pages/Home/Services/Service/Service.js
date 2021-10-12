import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log(props.service);
    const {name, price, img, description} = props.service;
    return (
        <div className="service">
            <img className="image" style={{width:"100%"}} src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price : {price}</h5>
            <small>{description}</small>
        </div>
    );
};

export default Service;