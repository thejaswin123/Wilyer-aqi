import React, { useState } from "react";
import Cards from "../Components/cards";
function Aqi() {
  const [id, setId] = useState(window.location.pathname.split("/")[2]);

  return (
    <div
      style={{
        backgroundImage: `url("http://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/PHOTO-dark%20and%20stormy%20cloudscape-istock-1125x534-Landscape.jpg?itok=xyVD1jOK")`,
      }}
    >
      <Cards id={id} />
    </div>
  );
}

export default Aqi;
