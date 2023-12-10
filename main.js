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

    const player = (prompt("Please enter your name")).toUpperCase();
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

    }


    // Determine winner
    const checkForWinner = function() {

        const playerScore = activePlayer.trackPlayerScore;

        // Horizontal Win
        if(playerScore.includes("00") && playerScore.includes("01") && playerScore.includes("02")) {
            return true;

        } else if(playerScore.includes("10") && playerScore.includes("11") && playerScore.includes("12")) {
            return true;

        } else if(playerScore.includes("20") && playerScore.includes("21") && playerScore.includes("22")) {
            return true;

            //Diagonal Win
        } else if(playerScore.includes("00") && playerScore.includes("11") && playerScore.includes("22")) {
            return true;

        } else if(playerScore.includes("02") && playerScore.includes("11") && playerScore.includes("20")) {
            return true;

            //Vertical win
        } else if(playerScore.includes("00") && playerScore.includes("10") && playerScore.includes("20")) {
            return true;

        } else if(playerScore.includes("01") && playerScore.includes("11") && playerScore.includes("21")) {
            return true;

        } else if(playerScore.includes("02") && playerScore.includes("12") && playerScore.includes("22")) {
            return true;

            // Draw
        } else {
            return false;
        }

    }


    // Keeps track of player input
    const trackScore = function() {

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
        getBoard = GameBoard().printBoard();
        console.log(getBoard);

        // Reset score tracker
        getPlayers.forEach((player) => {
            player.trackPlayerScore = [];
        })

        // Reset active player to be first player
        activePlayer = getPlayers[0];

    }


    // Starts round
    const playRound = function() {

        let currentPlayer = getActivePlayer().activePlayer;

        // Prompt user to enter row and col
        let playerRow = startDOM.playerInput(currentPlayer);
        console.log(playerRow);
        // let playerCol = prompt("Enter col number (0-2)");

        // Prevents user to overwrite previous user's input
        // if(getBoard[playerRow][playerCol] != 0) {
        //     return
        // }

        // Marks gameboard with player value
        // getBoard[playerRow][playerCol] = currentPlayer.value;
        // startDOM.playerInput(playerRow, playerCol, currentPlayer);

        
        // Track score
        trackScore();

        // Check for winner
        if(checkForWinner() === true) {

            console.log(`${currentPlayer.player} is the winner!`);
            gameReset();
            startDOM.resetDOM();

        } else if(checkForWinner() === false && getPlayers[0].trackPlayerScore.length === 5) {

            console.log("It's a draw!");
            gameReset();
            startDOM.resetDOM();

        } else {

            switchPlayer();
            console.log(getBoard);

        }

    }

    return {
        getActivePlayer,
        playRound,
        gameReset,
        getPlayers
    };
}


function DOMHandler() {

    // Target body
    const body = document.querySelector("body");

    // Create main gameboard and append to body
    const mainElem = document.createElement("div");
    mainElem.setAttribute("class", "mainElem");
    body.append(mainElem);

    let displayBoard = GameBoard().printBoard();

    // Create restart button
    const restartBtn = document.createElement("button");
    restartBtn.setAttribute("class", "button");
    restartBtn.setAttribute("type", "button");
    restartBtn.textContent = "Restart";
    

    // Display gameboard
    for(let i = 0; i < displayBoard.length; i++) {

        const gameRows = document.createElement("div");
        gameRows.setAttribute("class", "rows");
        gameRows.dataset.rowIdx = `${i}`;
        mainElem.append(gameRows);

        for(let j = 0; j < displayBoard[i].length; j++) {

            const gameCols = document.createElement("div");
            gameCols.setAttribute("class", "cols");
            gameCols.dataset.colIdx = `${j}`;
            gameRows.append(gameCols);

        }
    }

    // Display start game button
    const startBtn = document.createElement("button");
    startBtn.textContent = "Start"
    startBtn.setAttribute("class", "button");
    startBtn.setAttribute("type", "button");
    body.insertBefore(startBtn, mainElem);

    startBtn.addEventListener("click", () => {

        const start = StartGame();
        const play = start.playRound();

        start;
        startBtn.remove();
        play;

        const displayPlayers = document.createElement("div");
        displayPlayers.setAttribute("class", "banner");
        displayPlayers.textContent = `${start.getPlayers[0].player} vs ${start.getPlayers[1].player}`;
        body.insertBefore(displayPlayers, mainElem);

    })


    // Updates player selection in the DOM
    const playerInput = function(currentPlayer) {

        const getRows = document.querySelectorAll(".rows");

        getRows.forEach((row) => {
            row.addEventListener("click", (e) => {
                console.log(`Row: ${e.currentTarget.dataset.rowIdx}, Col: ${e.target.dataset.colIdx}`);

                e.target.textContent = currentPlayer.value;

                if(e.target.textContent != "") {
                    return
                }

            })
        })



        // getRows.forEach((row) => {

        //     row.addEventListener("click", (e) => {
        //         console.log(e.target);
        //     })
            
        //     if(row.dataset.rowIdx === playerRow) {

        //         const getCols = document.querySelectorAll(`div[data-row-idx="${playerRow}"] > .cols`);

        //         getCols.forEach((col) => {

        //             if(col.dataset.colIdx === playerCol) {

        //                 col.innerHTML = currentPlayer.value;

        //             }

        //         })

        //     }

        // })

    }

    // Resets gameboard in DOM
    const resetDOM = function() {

        body.append(restartBtn);

        restartBtn.addEventListener("click", () => {
            const checkCols = document.querySelectorAll(".cols");

            checkCols.forEach((col) => {
                col.innerHTML = "";
            })

            restartBtn.remove();
        })

    }



    return {
        playerInput,
        resetDOM,
    };


}

// Initialize DOM
const startDOM = DOMHandler();



// const game = StartGame();
