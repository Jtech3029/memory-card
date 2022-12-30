import "../styles/card.css"

function Card(props) {
    /**
     * when the component has been clicked, it updates the component and checks if the component has been pressed twice
     * @param {object} e 
     */
    function hasClicked(e) {
        props.update(checkIfTrue(props.pokemonArray));
        props.setCounter(props.counter + 1);
    }
    /**
     * 
     * @param {array} array 
     * @returns a randomized array that also updates whether the card has been pressed or not
     */
    function checkIfTrue(array) {
        if(array[props.index][2] === false){
            let newArray = array.splice(0);
            newArray[props.index][2] = true;
            return props.randomize(newArray);
        }
        props.endGame(true);
    }
    return (
        <div id={props.pokemonName} className="pokemon" onClick={hasClicked}>
            <img src={props.image} alt="A pokemon"/>
            <div>{props.pokemonName}</div>
        </div>
    )
}

export default Card;

/*
function Card(props) {
    useEffect(() => {
       document.addEventListener("click", hasClicked)
       return () => {document.removeEventListener(("click"), hasClicked);
    }
    })

    function hasClicked(e) {
        e.stopPropagation();
        console.log(props.index);
    }
    return (
        <div id={props.pokemonName}>
            <img src={props.image} alt="A pokemon"/>
            <div>{props.pokemonName}</div>
        </div>
    )
}
*/