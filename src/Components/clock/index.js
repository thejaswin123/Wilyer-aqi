import React, { Component } from 'react';

// function Clock() {
//     return (
//         <div className='m-10'>
//             <div className='bg-black w-40 h-40 rounded-full p-3'>

//             </div>
//         </div>
//     );
// }

// export default Clock;

class Clock extends Component {

    constructor() {
      super()
  this.state={time:new Date(),date:new Date()}
  
    }
  
    currentTime()
    {
      this.setState({
        time: new Date()
      })
    }
    currentDate(){
        this.setState({
            date: new Date()
        })
    }
    componentWillMount()
    {
  setInterval(()=>this.currentTime(),1000)
    }
  
  
    render() {
  
      return (
        <div className='m-10' >
         <div className='flex flex-col w-40 h-40 rounded-full items-center justify-center' style={{backgroundImage: `url("http://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/PHOTO-dark%20and%20stormy%20cloudscape-istock-1125x534-Landscape.jpg?itok=xyVD1jOK")`}}>
        <h1 className='text-white text-2xl'>
          {this.state.time.toLocaleTimeString()}
        </h1>
        <div className='flex flex-row justify-between w-40'>
        <div className='bg-white w-2 h-0.5'></div>
        <div className='bg-white w-2 h-0.5'></div>
        </div>
        <div className='flex flex-row justify-between w-40 transform rotate-45'>
        <div className='bg-white w-2 h-0.5'></div>
        <div className='bg-white w-3 h-0.5'></div>
        </div>
        <div className='flex flex-row justify-between w-40 transform rotate-90'>
        <div className='bg-white w-2 h-0.5'></div>
        <div className='bg-white w-3 h-0.5'></div>
        </div>
        <div className='flex flex-row justify-between w-40 transform -rotate-45'>
        <div className='bg-white w-3 h-0.5'></div>
        <div className='bg-white w-2 h-0.5'></div>
        </div>
        <h5 className='text-white text-lg'>{this.state.date.toLocaleDateString()}</h5>
         </div>
        </div>
        
      )
    }
  }
  
  export default Clock;