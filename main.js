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

    const player = prompt("Please enter your name");
    let playerScore = 0;

    return {
        player,
        playerScore
    };

};


// Gameflow of Tic Tac Toe
function StartGame() {

    const getBoard = GameBoard().printBoard();
    const getPlayers = [Players(), Players()];

    const trackScore = [];

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
    const checkScore = function() {

        for(let i=0; i<getBoard.length; i++) {
            // Loop through each row
            for(let j=0; j<getBoard[i].length; j++) {

                // Loop through each index in each row of getBoard
                if(getBoard[i][j] == "X" && activePlayer == getPlayers[0]) {

                    console.log(`Row: ${i}, Col: ${j}`);                 

                } else if(getBoard[i][j] == "O" && activePlayer == getPlayers[1]) {
                    console.log(`Row: ${i}, Col: ${j}`);
                }

            }
        }

        // console.log(getPlayers[0].player, getPlayers[0].playerScore);
        // console.log(getPlayers[1].player, getPlayers[1].playerScore);
        console.log(trackScore);

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

        checkScore();
        switchPlayer();

        console.log(getBoard);
    }
    

    return {
        getActivePlayer,
        playRound
    };
}

const game = StartGame();
