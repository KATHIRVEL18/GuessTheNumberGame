import { useState } from "react";
import "./App.css";
import Result from "./Result";

const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {
  const [term, updateTerm] = useState("");
  const [attempt, updateAttempt] = useState(0);

  const handleChange = (e) => {
    if (attempt <= 3) {
      updateTerm(e.target.value);
      updateAttempt((e) => e + 1);
    } else alert("Attempts over. You lost the game.");
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess any numer between 1 to 10</label>
      </div>
      <input
        type="number"
        id="term"
        className="term"
        name="term"
        min={0}
        max={10}
        onChange={handleChange}
      />
      <Result secretNum={secretNum} term={term} />
    </div>
  );
}

export default App;
