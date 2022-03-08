import Timetable from "./components/Timetable";

function App() {
  const resetTable = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1>
          <button
            className="btn btn-warning"
            style={{ float: "left" }}
            onClick={resetTable}
          >
            Reset table
          </button>
          TimeTable
          <button
            className="btn"
            style={{ float: "right", visibility: "hidden" }}
          >
            Reset table
          </button>
        </h1>
        <small>Click on a tile to start editing</small>
      </div>
      <Timetable />
    </div>
  );
}

export default App;
