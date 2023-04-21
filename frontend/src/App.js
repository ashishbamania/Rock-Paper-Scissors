import React from "react";
import "./button.css";
import "./App.css";
import axios from "axios";

const App = () => {
  let [result, setResult] = React.useState("");
  let [userChoice, setUserChoice] = React.useState("");
  let [computerChoice, setComputerChoice] = React.useState("");

  const fetchData = async (userChoice) => {
    await axios.post("http://localhost:4000/", { userChoice });

    let response = await axios.get("http://localhost:4000/");

    setUserChoice(response.data.userChoice);
    setComputerChoice(response.data.computerChoice);
    setResult(response.data.result);
  };

  const handleClick = async (event) => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");

    const userChoice = event.target.value;

    await fetchData(userChoice);
  };

  return (
    <div className="app">
      <h1>Welcome To Rock, Paper & Scissors</h1>

      <h4>To Play, Click on a Button!</h4>

      <div style={{ textAlign: "center" }}>
        <button value="Rock" onClick={handleClick}>
          Rock
        </button>
        <button value="Paper" onClick={handleClick}>
          Paper
        </button>
        <button value="Scissors" onClick={handleClick}>
          Scissors
        </button>

        <div style={{ marginTop: "2rem" }}>
          <h3>{userChoice ? `User Choice : ${userChoice}` : ""}</h3>
          <h3>{computerChoice ? `Computer Choice : ${computerChoice}` : ""}</h3>

          <h3>{result ? `Result : ${result}` : ""}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
