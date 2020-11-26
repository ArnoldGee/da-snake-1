import React from 'react'
import Board from './components/board'
import Controls from './components/controls'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 className="arcade-in">Da Snake</h1>
      <h1 className="arcade-out">Da Snake</h1>
      <Board />
      <Controls />
    </div>
  )
}

export default App
