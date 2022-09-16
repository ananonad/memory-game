import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
