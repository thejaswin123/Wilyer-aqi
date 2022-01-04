import React from 'react'
import Subcards from './subcards';



function Cards() {
    return (
        <>
        <div className='flex flex-col sm:flex-row items-center w-full h-full'>
            <Subcards />
            <Subcards />
            <Subcards /> 
        </div>
        </>
    );
}

export default Cards;
