import './App.css';
import Timetable from './components/Timetable';

function App() {
  return (
    <div className="App">
      <h1>TimeTable</h1>
      <small>Click on a tile to start editing</small> 
      <br/>
      <Timetable/>
    </div>
  );
}

export default App;
