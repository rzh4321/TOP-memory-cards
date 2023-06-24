import React from 'react';
import Card from './Card';

export default function Grid({cards}) {
    const arr = cards.map(card => <Card img={card} />)
  return (
    <div class="grid">
        {arr}
    </div>
  )
}
