import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { imageList } from "./imgs/imageList";
import "./styles/app.css";

function App() {
  const [hasLost, setHasLost] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [pokemonArray, setPokemonArray] = useState(randomizeArray(imageList));
  const [counter, setCounter] = useState(0);

  /**
   * on updates, checks if the win condition is satisfied and if true it sets to win
   */
  useEffect(() => {
    if(hasLost === false){
      for(let i = 0; i < pokemonArray.length; i++){
        if(pokemonArray[i][2] === false) {
          return;
        }
      }
      setHasWon(true);
    }
  })

  /**
   * resets the game
   */
  function resetGame() {
    if(hasLost === true){
      setHasLost(false);
    }
    else{
      setHasWon(false);
    }
    setCounter(0);
    //dunno why but the game will break if you dont do this. imageList shouldn't be tampered but it has been :)
    let newArray = imageList.slice();
    for(let i = 0; i < newArray.length; i++){
      newArray[i][2] = false;
    }
    setPokemonArray(randomizeArray(newArray));
  }

  /**
   * takes an array and randomizes it
   * @param {array} array 
   * @returns a randomized array
   */
  function randomizeArray(array) {
    let newArray = array.slice();
  
    for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
  return newArray;
  
  }

  return (
     <div id='app'>
      {hasLost === false && hasWon === false &&
      <div id='counter'>
        Counter: {counter}
      </div>
      }
      {hasLost === false && hasWon === false &&
      pokemonArray.map((object, i) => <Card 
      image={pokemonArray[i][0]} 
      pokemonName={pokemonArray[i][1]} 
      key={i} 
      index={i} 
      update={setPokemonArray} 
      pokemonArray={pokemonArray}
      randomize={randomizeArray}
      counter={counter}
      setCounter={setCounter}
      endGame={setHasLost}/>)}
      {hasLost === true &&
      <div className='end-message'>
      u suck  
      <button onClick={resetGame} className="reset-button">
      play again?
      </button>  
      </div>}
      {hasWon === true &&
      <div className='end-message'>
      u dont suck
      <button onClick={resetGame} className="reset-button">
      play again?
      </button>  
      </div>
      }
    </div>
  );
  
}




export default App;
