import React, { useState } from "react";
import Subcards from "./subcards";
import axios from "axios";
import { server } from "../../env";

function Cards(props) {
  const [card1, setCard1] = useState({});
  const [card2, setCard2] = useState({});
  const [card3, setCard3] = useState({});

  const getData = async () => {
    await axios.get(server + "/v1/weather/read/" + props.id).then((res) => {
      setCard1({
        aqi: res.data.payload.aqi[0],
        city: res.data.payload.city[0],
        description: res.data.payload.description[0],
        humidity: res.data.payload.humidity[0],
        temperature: res.data.payload.temperature[0],
      });
      setCard2({
        aqi: res.data.payload.aqi[1],
        city: res.data.payload.city[1],
        description: res.data.payload.description[1],
        humidity: res.data.payload.humidity[1],
        temperature: res.data.payload.temperature[1],
      });
      setCard3({
        aqi: res.data.payload.aqi[2],
        city: res.data.payload.city[2],
        description: res.data.payload.description[2],
        humidity: res.data.payload.humidity[2],
        temperature: res.data.payload.temperature[2],
      });
    });
  };

  React.useEffect(() => {
    // getData();
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center w-full h-full">
        <Subcards data={card1} />
        <Subcards data={card2} />
        <Subcards data={card3} />
      </div>
    </>
  );
}

export default Cards;
