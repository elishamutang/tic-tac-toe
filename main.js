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
function Players(playerOne, playerTwo) {

    return {playerOne, playerTwo};

};


// Gameflow of Tic Tac Toe (IIFE)
const startGame = (function () {

    const getBoard = GameBoard();
    const getName = Players()

    console.log(getBoard.printBoard());

})();