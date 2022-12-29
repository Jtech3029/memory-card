import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { imageList } from "./imgs/imageList";

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

  function resetGame() {
    if(hasLost === true){
      setHasLost(false);
    }
    else{
      setHasWon(false);
    }
    setCounter(0);
    setPokemonArray(randomizeArray(imageList));
  }
  function randomizeArray(array) {
    let newArray = array.slice(0);
  
    for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
  return newArray;
  
  }

  return (
     <div>
      {hasLost === false && hasWon === false &&
      <div>
        {counter}
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
      <div>
      u suck  
      <button onClick={resetGame}>
      play again?
      </button>  
      </div>}
      {hasWon === true &&
      <div>
      u dont suck
      <button onClick={resetGame}>
      play again?
      </button>  
      </div>
      }
    </div>
  );
  
}




export default App;
