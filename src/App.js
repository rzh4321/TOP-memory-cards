import React, { useState, useEffect } from 'react'
import Header from "./components/Header";
import "./App.css";
import Grid from './components/Grid';

function App() {
  const [set, changeSet] = useState(new Set());
  const [best, changeBest] = useState(0);
  const [showNames, changeShowNames] = useState(true);
  const cards = [{name: "RJ Barrett", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395625.png&w=350&h=254"},
                  {name: "Jalen Brunson", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934672.png&w=350&h=254"},
                  {name: "Evan Fournier", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6588.png&w=350&h=254"},
                  {name: "Quentin Grimes", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397014.png&w=350&h=254"},
                  {name: "Josh Hart", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3062679.png&w=350&h=254"},
                  {name: "Isaiah Hartenstein", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4222252.png&w=350&h=254"},
                  {name: "Daquan Jeffries", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3913220.png&w=350&h=254"},
                  {name: "Trevor Keels", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432645.png&w=350&h=254"},
                  {name: "Miles McBride", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4431823.png&w=350&h=254"},
                  {name: "Immanuel Quickley", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395724.png&w=350&h=254"},
                  {name: "Julius Randle", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064514.png&w=350&h=254"},
                  {name: "Mitchell Robinson", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4351852.png&w=350&h=254"},
                  {name: "Jericho Sims", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277922.png&w=350&h=254"},
                  {name: "Obi Toppin", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278355.png&w=350&h=254"},
                  {name: "Isaiah Roby", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4066392.png&w=350&h=254"},
                  {name: "Derrick Rose", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3456.png&w=350&h=254"},
                  {name: "Duane Washington JR", url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397235.png&w=350&h=254"}];

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
        <Header score={set.size} best={best} showNames={showNames} toggleShowNames={changeShowNames} />
      </header>
      <Grid cards={cards} clickHandler={checkCard} showNames={showNames} />
    </div>
  );
}

export default App;
