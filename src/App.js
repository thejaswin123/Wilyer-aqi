import HOC from './HOC';
import Comp from './Comp';
import './App.css';

function App() {
  return (
    <div>
      <HOC path='/' exact component={Comp}/>
    </div>
  );
}
export default App;
