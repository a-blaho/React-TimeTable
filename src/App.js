import Timetable from "./components/Timetable";

function App() {
  const resetTable = () => {
    localStorage.clear();
    window.location.reload();
  };

  const unfocusTimetiles = () => {
    let ps = document.querySelectorAll(".timetile-p")
    let inputs = document.querySelectorAll(".timetile-input")
    ps.forEach(p => {
      p.style.display = "block"
    })

    inputs.forEach(i => {
      i.style.display = "none"
    })
  }

  //ID of the clicked element 
  let id = null
  const handleClick = (event) => { 
    //user clicked on a timetile that is not focused
    if (event.target.className === "timetile-p") {
      id = event.target.id
      let p = document.querySelector("#" + id)
      let input =  document.querySelector("#input-" + id)
      //unfocus all timetiles
      unfocusTimetiles()
      //focus on the one specific timetile
      p.style.display = "none"
      input.style.display = "block"
      input.focus()
      input.value = p.innerHTML
    } 
    //user clicked somewhere else and a timetile is focused on
    else if(!(event.target.className === "timetile-input") && id != null){
      //user submitted empty timetile
      if(document.querySelector("#input-" + id).value.trim() === "") {
        console.log("empty", localStorage.getItem(id))
        document.querySelector("#" + id).innerHTML = localStorage.getItem(id)  
      }
      else {
        document.querySelector("#" + id).innerHTML = document.querySelector("#input-" + id).value
        localStorage.setItem(id, document.querySelector("#input-" + id).value)
      }
      unfocusTimetiles()
    }
  }

  return (
    <div className="App"  onClick={(event) => handleClick(event)}>
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
