import HOC from "./HOC";

import "./App.css";
import Aqi from "./Pages/Aqi";
import Slide from "./Pages/Slide";
import Clockpage from "./Pages/Clock";
function App() {
  return (
    <div>
      <HOC path="/aqi/:id" exact component={Aqi} />
      <HOC path="/slider" exact component={Slide} />
      <HOC path="/clock" exact component={Clockpage} />
    </div>
  );
}
export default App;
