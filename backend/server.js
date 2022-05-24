import express from "express";
import { chooseWinner } from "./helper.js";
import getComputerChoice from "./helper.js";
import cors from "cors";
import bodyParser from "body-parser"

const app = express();

app.use(cors());
app.use(bodyParser());

let userChoice, computerChoice, result;

app.get("/", (req, res) => {
    res.status(200).send({
        userChoice,
        computerChoice,
        result
    });

});

app.post("/", (req, res) => {

    userChoice = req.body.userChoice;

    computerChoice = getComputerChoice();

    console.log(`User Choice : ${userChoice}`);

    console.log(`Computer Choice : ${computerChoice}`);

    result = chooseWinner(userChoice, computerChoice);

    console.log(`Result : ${result}`);

    res.status(201).send("Received!");

});


app.listen(4000, () => {
    console.log("Server is running on Port 4000");
});


