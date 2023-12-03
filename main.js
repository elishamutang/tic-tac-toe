// Print gameboard
function GameBoard () {
    let rows = 3;
    let cols = 3;
    let board = [];

    for(let i=0; i < rows; i++) {
        board[i] = [];
        for(let j=0; j < cols; j++) {
            board[i][j] = 0;
        }
    }

    const printBoard = () => board;

    // console.log(printBoard());
    return {
        printBoard
    };

};


// Players object (or module)
function Players() {

    const playerScore = 0;
    let player = prompt("Please enter your name");

    return {
        playerScore, 
        player
    };

};


// Gameflow of Tic Tac Toe
function startGame() {

    const getBoard = GameBoard();
    const getPlayers = [Players(), Players()];

    for(let i=0; i < getPlayers.length; i++) {
        console.log(`Player ${i+1}: ${getPlayers[i].player}`);
    }

    console.log(getBoard.printBoard());

    // Determine active player

    const getActivePlayer = function() {

        let activePlayer = getPlayers[0];

        console.log(`Active player: ${activePlayer.player}`);

    }


    // Stars round
    const playRound = function() {

        // Prompt user to enter row and col
        let playerRow = prompt("Enter row number (0-3)");
        let playerCol = prompt("Enter col number (0-3)");
        let gameValue = "X";

        for(i of getBoard.printBoard()) {

            let row = getBoard.printBoard()[playerRow];

            for(j of row) {

                row[playerCol] = gameValue;

            }
        }

        console.log(getBoard.printBoard());

    }

    

    return {
        getActivePlayer,
        playRound
    };
}

const game = startGame();
