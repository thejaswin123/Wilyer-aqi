import React from 'react'
import Marquee from "react-fast-marquee";

function Slider() {
    return (
        <div>
        <Marquee speed='300' className='text-4xl text-white font-bold' style={{'overflow': 'hidden'}}>
            Wilyer Pvt Ltd
        </Marquee>
        </div>
    );
}

export default Slider;
