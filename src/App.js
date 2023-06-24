import React, { useState } from 'react'
import Header from "./components/Header";
import "./App.css";
import Grid from './components/Grid';

function App() {
  const [set, changeSet] = useState(new Set());
  const [best, changeBest] = useState(0);
  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <header>
        <Header score={set.size} best={best} />
      </header>
      <Grid cards={cards} />
    </div>
  );
}

export default App;
