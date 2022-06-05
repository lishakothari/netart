import React from 'react';
import data from '../data/about.json'
import image from '../assets/3.png'

const About = () => {
    return ( 
        <div className='about-container'>
            <h5 className='about-item'>{data.title}</h5>
            <img className='aboutimg' src={image} alt='products' />
            <h5 className='about-item'>{data.info}</h5>
        </div>
     );
}
 
export default About;