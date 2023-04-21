import express from "express";
import { chooseWinner, getComputerChoice } from "./helper.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let userChoice, computerChoice, result;

app.get("/", (req, res) => {
  res.status(200).send({
    userChoice,
    computerChoice,
    result,
  });
});

app.post("/", (req, res) => {
  userChoice = req.body.userChoice;

  computerChoice = getComputerChoice();

  console.log(`User Choice : ${userChoice}`);

  console.log(`Computer Choice : ${computerChoice}`);

  result = chooseWinner(userChoice, computerChoice);

  console.log(`Result : ${result}`);

  res.status(200).send("Received!");
});

app.listen(4000, () => {
  console.log("Server is running on Port 4000");
});
