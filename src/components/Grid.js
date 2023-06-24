import React from 'react';
import Card from './Card';

export default function Grid({cards, clickHandler, showNames}) {
    const arr = cards.map((card, ind) => <Card obj={card} clickHandler={clickHandler} showNames={showNames} key={ind} />)
  return (
    <div className="grid">
        {arr}
    </div>
  )
}
