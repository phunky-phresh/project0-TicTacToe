# Tic, Tac, Toe - Project 0

[Live Demo](https://phunky-phresh.github.io/project0-TicTacToe/)

## Description
This is project 0, Tic, Tac, Toe. For this project the requirements were to build a working Tic, Tac, Toe game from scratch.

Project 0 a

## Features
 - Win and Draw displays: After a player wins, they are declared the winner. If a draw occurs, a Draw is declared.
 - There is an individual score keeper for each player. for each game won, the scores are updated.
 - Play Again/Reset: a reset is declared at the end of each game. This resets all features of the board game except for the score keeper.

### The Logic ( I did it weird)

```
//     273                 84
//        \               /
//          1 |   2 |   4  = 7
//       -----+-----+-----
//          8 |  16 |  32  = 56
//       -----+-----+-----
//         64 | 128 | 256  = 448
//       =================
//         73   146   292
```
## Screenshots

## Technology Used
- jQuery
- CSS
- Javascript
- HTML
- animate.css

## Known Bugs
there is one bug present that can be fixed! If player two decides to throw the game and make no attempt to win, the game cannot verify a win of 5 moves by player one. Because all the squares have been counted, it considers this a draw.

### Can it be done?
for sure, once the code is more refined, it will hopefully require a lot less code to factor in this type of win. for now, just **try not to lose player two!**
## Acknowledgement

## Wish List
- flawless game logic
- competitive AI
- ability to pick characters before playing game
## help text

define rules of game. how to get started.
