import React from 'react'
import Board from './components/board'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 className="arcade-in">Da Snake</h1>
      <h1 className="arcade-out">Da Snake</h1>
      <Board />
    </div>
  )
}

export default App
