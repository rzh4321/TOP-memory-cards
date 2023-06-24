import React, { useState } from 'react'
import Header from "./components/Header";
import "./App.css";
import Grid from './components/Grid';

function App() {
  const [set, changeSet] = useState(new Set());
  let [best, changeBest] = useState(0);
  const cards = []

  function checkCard(cardName) {
    if (!set.has(cardName)) {
      const updatedSet = new Set(set);
      updatedSet.add(cardName);
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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(cards);

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
