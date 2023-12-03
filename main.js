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

    let player = prompt("Please enter your name");

    return {
        player
    };

};


// Gameflow of Tic Tac Toe
function StartGame() {

    const getBoard = GameBoard().printBoard();
    const getPlayers = [Players(), Players()];

    for(let i=0; i < getPlayers.length; i++) {
        console.log(`Player ${i+1}: ${getPlayers[i].player}`);
    }

    console.log(getBoard);

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
    const getWinner = function() {

        for(i of getBoard) {

        }

    }



    // Starts round
    const playRound = function() {

        // Prompt user to enter row and col
        let playerRow = prompt("Enter row number (0-3)");
        let playerCol = prompt("Enter col number (0-3)");

        let currentPlayer = getActivePlayer().activePlayer;

        // Prevents user to overwrite previous user's input
        if(getBoard[playerRow][playerCol] != 0) {
            return
        }

        // Marks gameboard with player value
        getBoard[playerRow][playerCol] = currentPlayer.value;

        switchPlayer();

        console.log(getBoard);
    }
    

    return {
        getActivePlayer,
        playRound
    };

}

const game = StartGame();
