import React from 'react';
import data from '../data/products.json'

const Products = () => {
    return ( 
        <div className='products-container'>
            <h4> {data.title} </h4>
            <h5 style={{textAlign:"center"}}> {data.list} </h5>
        </div>
     );
}
 
export default Products;