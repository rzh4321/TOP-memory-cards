import React from 'react'

function Header({score, best, showNames, toggleShowNames}) {
  return (
    <div className="header-column">
        <div className="flex-row-space-between">
            <h1>NBA Memory Game</h1>
            <ul>
                <li>Score: {score}</li>
                <li>Best score: {best}</li>
            </ul>

        </div>
        <div className="flex-row-space-between">
            <span className="desc">Get points by clicking on a player but don't click on any more than once!</span>
            <button onClick={() => toggleShowNames(!showNames)}>{showNames? "Show pictures only": "Show names"}</button>
        </div>
    </div>
  )
}

export default Header