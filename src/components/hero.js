import React from 'react';
import data from '../data/hero.json'
import medal from '../assets/1.png'
import prize from '../assets/2.png'
import '../index.css'

const Hero = () => {
    return (  
        <div className="flex-container">
            <div className="flex-item-left">
                <img src={medal} alt='medal' className='hero' />
            </div>
            <div className="flex-item-right">
                <h4>{data.title}</h4>
                <ul>
                    <li> {data.data1}</li>
                    <li>{data.data1}</li>
                </ul>
                <img src={prize} alt='prize' className='hero' />
                <h4>{data.info}</h4>
            </div>
        </div>
    );
}
 
export default Hero;