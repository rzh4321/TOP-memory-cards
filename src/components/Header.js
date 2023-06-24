import React from 'react'

function Header() {
  return (
    <div className="header-column">
        <div className="flex-row-space-between">
            <h1>Memory Game</h1>
            <ul>
                <li>Score: 12</li>
                <li>Best score: 11</li>
            </ul>

        </div>
        <span>Get points by clicking on an image but don't click on any more than once!</span>
    </div>
  )
}

export default Header