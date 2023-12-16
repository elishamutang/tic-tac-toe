# tic-tac-toe
Tic Tac Toe project from The Odin Project's JavaScript course

This branch was created to test out a DOM handler function to handle the display/DOM logic.

It will:
- Render the contents of the gameboard array to the webpage

Progress (as of 12/12):
- Code allows DOM to be updated based on user input from the console.
- Introduced a restart button to restart game when a round finishes.
- Users able to insert names and click on gameboard.
- Fixed bugs below.

What's next:
- Fix logic between DOM and gameflow. Current problem is, after a round ends, players are still able to click on gameboard and this results in null values for player names (*Fixed. Problem was due to event listener on playerInput method never removed.*)

- Figure out why removeBanner in resetDOM is not removed and stores previous banner divs (*Fixed. Problem was due to event listener code on the restart button. Everytime the resetDOM method is called, the event listener is added but never removed, hence if more than 1 round is played, more than 1 event listener is added onto the beginner and logging multiple banner divs.*)

- Maybe change player name prompt to form/dialog.

