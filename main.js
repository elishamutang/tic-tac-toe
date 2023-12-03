// Print gameboard
function GameBoard () {
    let rows = 3;
    let cols = 3;
    let board = [];

    // 2d array for gameboard
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

    // Initialize first player
    let activePlayer = getPlayers[0];
    activePlayer.value = "X";


    // Show current player
    const getActivePlayer = function() {

        console.log(`Active player: ${activePlayer.player}`);

        return {
            activePlayer
        };

    }

    
    // Switch player
    const switchPlayer = function() {
        
        if(activePlayer == getPlayers[0]) {

            activePlayer = getPlayers[1];
            activePlayer.value = "O";

        } else {

            activePlayer = getPlayers[0];

        }

        console.log(`${activePlayer.player}'s turn`);

        return {
            activePlayer
        };

    }

    // Determine winner
    







    // Starts round
    const playRound = function() {

        // Prompt user to enter row and col
        let playerRow = prompt("Enter row number (0-3)");
        let playerCol = prompt("Enter col number (0-3)");

        let currentPlayer = getActivePlayer().activePlayer;

        for(i of getBoard.printBoard()) {

            let row = getBoard.printBoard()[playerRow];

            for(j of row) {

                row[playerCol] = currentPlayer.value;

            }
        }

        switchPlayer();

        console.log(getBoard.printBoard());
    }

    

    return {
        getActivePlayer,
        playRound
    };
}

const game = startGame();
