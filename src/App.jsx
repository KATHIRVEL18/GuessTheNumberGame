import { useState } from "react";
import "./App.css";
import Result from "./Result";

const secretNum = Math.floor(Math.random() * 10) + 1;
const maxAttempt = 3;

function App() {
  const [term, updateTerm] = useState("");
  const [attempt, updateAttempt] = useState(0);

  const handleChange = (e) => {
    updateTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attempt < maxAttempt) {
      updateAttempt((e) => e + 1);
    } else alert("Attempts over. You lost the game.");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="head">
          <label htmlFor="term">
            Guess any numer between 1 to 10. {maxAttempt - attempt} Attempts
            left.
          </label>
        </div>
        <input
          type="number"
          id="term"
          className="term"
          name="term"
          min={0}
          max={10}
          onChange={handleChange}
          required
        />
        <button>Check</button>
      </form>
      <Result secretNum={secretNum} term={term} />
    </div>
  );
}

export default App;
