import { useEffect, useState, useRef } from "react";
import Card from "./card";
import imagesArray from './data';
import './app.scss';


const imagesArray = [
  {
    type: "Biggie",
    image: require(`./images/Biggie.png`)
  },
  {
    type: "Branch",
    image: require(`./images/Branch.png`)
  },
  {
    type: "Bridget",
    image: require(`./images/Bridget.png`)
  },
  {
    type: "DjSuki",
    image: require(`./images/DjSuki.png`)
  },
  {
    type: "GuyDiamond",
    image: require(`./images/GuyDiamond.png`)
  },
  {
  type: "Poppy",
  image: require(`./images/Poppy.png`)
  },
  {
    type: "Prince",
    image: require(`./images/Prince.png`)
  },
  {
    type: "Smidge",
    image: require(`./images/Smidge.png`)
  },
]


function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function shuffleCards(array) {
  const length = array.length;
  for(let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currIndex, randomIndex)
  }
    return array;
}

export default function App( { imagesArray} ) {
  const [cards, setCards] = useState(
    () => shuffleCards(imagesArray.concat(imagesArray))
  );

  const handleClick = (index) => {

  };
  
  return (
    <div className="App">
      <header>
        <h3>Play the game</h3>
        <div>
        Select two cards with same content consequtively to make them vanish
        </div>
        </header>
        <div className="container">
          {cards.map((card, index) => {
          return (
            <Card 
              key={index}
              card={card}
              index={index}
              onClick={handleCardClick}
              />
          );
          })}
        </div>
    </div>
  )
}

export default App;
