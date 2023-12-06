// Print gameboard
function GameBoard () {
    const rows = 3;
    const cols = 3;
    const board = [];

    // 2d array for gameboard
    for(let i=0; i < rows; i++) {
        board[i] = [];
        for(let j=0; j < cols; j++) {
            board[i][j] = 0;
        }
    }

    const printBoard = () => board;

    return {
        printBoard
    };

};


// Players object (or module)
function Players() {

    const player = prompt("Please enter your name");
    const trackPlayerScore = [];

    return {
        player,
        trackPlayerScore
    };

};


// Gameflow of Tic Tac Toe
function StartGame() {

    let getBoard = GameBoard().printBoard();
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
    const checkForWinner = function() {

        const playerScore = activePlayer.trackPlayerScore;
        console.log(`${playerScore}, ${activePlayer.player}`);

        // Horizontal Win
        if(playerScore.includes("00") && playerScore.includes("01") && playerScore.includes("02")) {
            return true;

        } else if(playerScore.includes("10") && playerScore.includes("11") && playerScore.includes("12")) {
            return true;

        } else if(playerScore.includes("20") && playerScore.includes("21") && playerScore.includes("22")) {
            return true;

        }

        // Diagonal win
        if(playerScore.includes("00") && playerScore.includes("11") && playerScore.includes("22")) {
            return true;

        } else if(playerScore.includes("02") && playerScore.includes("11") && playerScore.includes("20")) {
            return true;

        }

        // Vertical win
        if(playerScore.includes("00") && playerScore.includes("10") && playerScore.includes("20")) {
            return true;

        } else if(playerScore.includes("01") && playerScore.includes("11") && playerScore.includes("21")) {
            return true;

        } else if(playerScore.includes("02") && playerScore.includes("12") && playerScore.includes("22")) {
            return true;

        }

    }


    // Keeps track of player input
    const checkScore = function() {

        for(let i=0; i<getBoard.length; i++) {
            // Loop through each row
            for(let j=0; j<getBoard[i].length; j++) {
                // Loop through each index in each row of getBoard
                
                if(getBoard[i][j] === "X" && activePlayer === getPlayers[0]) {

                    // Checks if position of "X" is not recorded in trackPlayerScore array
                    if(!activePlayer.trackPlayerScore.includes(`${i}${j}`)) {
                        activePlayer.trackPlayerScore.push(`${i}${j}`); 
                    }                

                } else if(getBoard[i][j] === "O" && activePlayer === getPlayers[1]) {
                    
                    // Checks if position of "O" is not recorded in trackPlayerScore array
                    if(!activePlayer.trackPlayerScore.includes(`${i}${j}`)) {
                        activePlayer.trackPlayerScore.push(`${i}${j}`); 
                    }

                }
            }
        }
    }


    // Reset game
    const gameReset = function() {

        // Resets board
        console.log(getBoard);
        getBoard = GameBoard().printBoard();

        // Reset score tracker
        getPlayers.forEach((player) => {
            player.trackPlayerScore = [];
        })

        return {
            getBoard,
            getPlayers
        };

    }


    // Starts round
    const playRound = function() {

        // Prompt user to enter row and col
        let playerRow = prompt("Enter row number (0-2)");
        let playerCol = prompt("Enter col number (0-2)");

        let currentPlayer = getActivePlayer().activePlayer;

        // Prevents user to overwrite previous user's input
        if(getBoard[playerRow][playerCol] != 0) {
            return
        }

        // Marks gameboard with player value
        getBoard[playerRow][playerCol] = currentPlayer.value;


        // Track score
        checkScore();

        // Check for winner
        if(checkForWinner() === true) {

            console.log(`${currentPlayer.player} is the winner!`);
            gameReset();

        } else {

            switchPlayer();
            console.log(getBoard);

        }

    }

    
    return {
        getActivePlayer,
        playRound,
    };
}

const game = StartGame();
