import React from "react";

function Subcards(props) {
  return (
    <div className="w-11/12 sm:w-1/3 bg-white h-full border-2 sm:m-4 mt-4 sm:p-2 p-1 items-center align-middle  rounded-lg">
      <div className="flex flex-row justify-around ">
        <div className="md:w-32 md:h-32 sm:w-20 sm:h-20 w-24 h-24 mt-2">
          <img
            className="w-full h-full"
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            alt="weather"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <h1 className="lg:text-7xl font-bold md:text-5xl text-5xl sm:text-center">
            {props.data.temperature}°C
          </h1>
          <h3 className="text-xl text-center font-bold text-gray-500">
            Feels like 20°C
          </h3>
        </div>
      </div>
      <div className="flex justify-center sm:my-3 sm:mt-6 my-2">
        <h1 className="md:text-3xl text-2xl font-bold text-center text-gray-500">
          {props.data.city},India
        </h1>
      </div>
      <div className="flex justify-center sm:mt-8 sm:mb-5 my-4">
        <h1 className="md:text-4xl text-4xl font-bold text-center">
          Air Quality Index
        </h1>
      </div>
      <div className="flex sm:flex-col flex-row sm:gap-x-0 gap-x-5 sm:mb-0 mb-1 justify-center">
        <div className="sm:my-3 ">
          <h1 className="md:text-9xl text-6xl text-center font-bold text-red-600">
            {props.data.aqi}
          </h1>
        </div>
        <div className="my-3">
          <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold text-center">
            Very Poor
          </h1>
        </div>
      </div>
      <div className="sm:mt-5 sm:block hidden">
        <h3 className="text-center text-base md:text-2xl font-bold ">
          03 Nov, 2021
        </h3>
        <h3 className="text-center text-base md:text-2xl font-bold ">
          11:32 PM
        </h3>
      </div>
    </div>
  );
}

export default Subcards;
