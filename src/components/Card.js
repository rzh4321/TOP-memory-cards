import React from 'react'

function Card({img, clickHandler}) {
  return (
    <div className="card" onClick={() => clickHandler(img)}>{img}</div>
  )
}

export default Card;