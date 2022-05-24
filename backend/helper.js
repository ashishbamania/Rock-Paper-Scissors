const getComputerChoice = () => {

    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "";
    };

};

export const chooseWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        return "It's a draw!";
    }
    else if (userChoice === 'Rock' && computerChoice === 'Paper') {
        return 'Computer Wins!';
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        return 'You Win! Congrats!';
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        return 'You Win! Congrats!';
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        return 'Computer Wins!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        return 'You Win! Congrats!';
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
        return 'Computer Wins!';
    }
};

export default getComputerChoice;

