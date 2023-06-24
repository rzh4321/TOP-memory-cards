import React from 'react'

function Header({score, best}) {
  return (
    <div className="header-column">
        <div className="flex-row-space-between">
            <h1>NBA Memory Game</h1>
            <ul>
                <li>Score: {score}</li>
                <li>Best score: {best}</li>
            </ul>

        </div>
        <span class="desc">Get points by clicking on a player but don't click on any more than once!</span>
    </div>
  )
}

export default Header