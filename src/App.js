import Timetable from "./components/Timetable";

function App() {
  return (
    <div className="App">
      <div style={{textAlign: "center"}}>
        <h1>TimeTable</h1>
        <small>Click on a tile to start editing</small>
      </div>
      <Timetable />
    </div>
  );
}

export default App;
