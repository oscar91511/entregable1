import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";
import db from "./db/db.json";

const images = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const getRandomItem = (listItems) => {
    const randonIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randonIndex];
  };

  const [quote, setQuote] = useState(getRandomItem(db));
  const [bgImage, setBgImage] = useState(getRandomItem(images));
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleNewQuote = () => {
    setQuote(getRandomItem(db));
    setBgImage(getRandomItem(images));
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className={`App ${bgImage}`} onMouseMove={handleMouseMove}>
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />
      <div
        id="cursor"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      >
        <img
          alt="Cursor Hand"
          src="https://static.wixstatic.com/media/2d89eb_f05aaa37b2a64ca2a607b0a903d8ad30~mv2.png/v1/fill/w_68,h_106/rocket-cursor.png"
        />
      </div>
    </div>
  );
}

export default App;
