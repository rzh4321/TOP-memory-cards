import React, { useState } from 'react'
import Header from "./components/Header";
import "./App.css";
import Grid from './components/Grid';

function App() {
  const [set, changeSet] = useState(new Set());
  let [best, changeBest] = useState(0);
  const cards = [1, 2, 3, 4, 5];

  function checkCard(card) {
    if (!set.has(card)) {
      const updatedSet = new Set(set);
      updatedSet.add(card);
      changeSet(updatedSet);
    }
    else {
      alert('you lost');
      if (set.size > best) {
        changeBest(set.size)
      }
      changeSet(new Set());
    }
  }

  return (
    <div>
      <header>
        <Header score={set.size} best={best} />
      </header>
      <Grid cards={cards} clickHandler={checkCard} />
    </div>
  );
}

export default App;
