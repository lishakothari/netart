import React from 'react';
import data from '../data/about.json'
import image from '../assets/3.png'

const About = () => {
    return ( 
        <div className='about-container'>
            <h5 className='about-item'>{data.title}</h5>
            <img className='about-item' src={image} alt='products' width={1000} />
            <h5 className='about-item'>{data.info}</h5>
        </div>
     );
}
 
export default About;