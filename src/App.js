import logo from './logo.svg';
import './App.css';
import Box from './components/Box'
import React, {useState} from "react";

function App() {
  // set initial value of currentPlayer as "nobody"
  const [currentPlayer, setCurrentPlayer] = useState("X")
  // read value , set value

  // currentPlayer = "X"

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Box player={currentPlayer}/>
      <Box player={currentPlayer}/>
      <Box player={currentPlayer}/>
      <Box player={currentPlayer}/>
      <Box player={currentPlayer}/>

    </div>
  );
}

export default App;
