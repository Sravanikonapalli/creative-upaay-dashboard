import React from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Creative Upaay — Tasks</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
