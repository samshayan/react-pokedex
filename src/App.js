import React from "react";
import Pokegame from './Pokegame';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Pokegame />
      <div className="container col-10">
        <button className="btn btn-success p-3 my-5 d-block text-center" onClick={refreshPage}>Click to reload!</button>
      </div>
    </div>
  );
}

export default App;
