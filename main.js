// IIFE for gameboard
function GameBoard () {
    let rows = 3;
    let cols = 3;
    let board = [];

    const printBoard = () => {
        for(let i=0; i < rows; i++) {

            board[i] = [];
    
            for(let j=0; j < cols; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    }

    // console.log(printBoard());
    return {printBoard};

};


// Players object (or module)
function Players() {

    const playerScore = 0;
    let player = prompt("Please enter your name");

    return {playerScore, player};

};


// Gameflow of Tic Tac Toe (IIFE)
const startGame = (function () {

    const getBoard = GameBoard();
    const getPlayers = [Players(), Players()];

    for(let i=0; i < getPlayers.length; i++) {
        console.log(`Player ${i+1}: ${getPlayers[i].player}`);
    }

    console.log(getBoard.printBoard());




})();