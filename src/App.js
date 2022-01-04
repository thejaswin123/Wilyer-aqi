import HOC from './HOC';

import './App.css';
import Aqi from './Pages/Aqi';
import Slide from './Pages/Slide';

function App() {
  return (
    <div>
      <HOC path='/' exact component={Aqi}/>
      <HOC path='/abt' exact component={Slide}/>
    </div>
  );
}
export default App;
