import React from 'react';
import Card from './Card';

export default function Grid({cards, clickHandler}) {
    const arr = cards.map((card, ind) => <Card img={card} clickHandler={clickHandler} key={ind} />)
  return (
    <div className="grid">
        {arr}
    </div>
  )
}
