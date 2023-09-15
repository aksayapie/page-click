import './App.css';
import { useState } from 'react';

function App() {
  let [coords, setCoord] = useState([]);
  let [newCoords, setNewCoords] = useState([]);

  function handleClick(e) {
    let {clientX, clientY} = e;
    setCoord([...coords, {
      xCoord: clientX,
      yCoord: clientY
    }])
  }

  function handleUndo() {
    let newCoord = coords.pop();
    setNewCoords([...newCoords, newCoord]);
    setCoord([...coords]);
  }

  function handleRedo() {
    let newCoord = newCoords.pop()
    coords.push(newCoord);
    setCoord([...coords]);
  }

  
  return (
    <div className="App">
      <h3>Click Anywhere on the Green Screen</h3>
      <button className='button' onClick={handleUndo} disabled={coords.length==0 ? true : false}>Undo</button>
      <button className='button' onClick={handleRedo} disabled={newCoords.length==0 ? true : false}>Redo</button>
      <div className="screen" onClick={(e) => handleClick(e)}>
        {coords.map((circle, index) => {
          return (
            <div className='circle' key={index} style={{
              position: "absolute",
              left: circle.xCoord - 7 + "px",
              top: circle.yCoord - 7 + "px",
            }}>{index}</div>
          )
        })}
    </div>
    </div>
  );
}

export default App;
