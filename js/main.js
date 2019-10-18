
// VARIABLES for wins/draws/score keeping etc.

let turn = "nought";
let player = '';
let noughtArray = [];
let noughtCount = 0;
let crossArray = [];
let crossCount = 0;
let winner = ''
const winningScores = [7, 56, 73, 84, 146, 273, 292, 448];

// Click Function that switches between players
// also executes other functions
$(document).on('click', '.square', function() {

    if (turn === "nought") {
      noughtCount += Number($(this).text());
      noughtArray.push(Number($(this).text()));
      //player declared to keep track of turns
      player = 'one'
      //functions run every click turn
      countCheck(noughtCount, noughtArray, player);
      tracker();
      scoreTracker();

        $(this).removeClass('square');
        $(this).addClass('nought');
        turn = 'crosses';
  } else {
      crossCount += Number($(this).text());
      crossArray.push(Number($(this).text()))
      player = "two";
      countCheck(crossCount, crossArray, player);
      tracker();
      scoreTracker();

        $(this).removeClass('square');
        $(this).addClass('cross');
        turn = "nought";
  }
});

///// WIN function /////
// the countCheck runs through the noughtArray and crossArray to check with potential winner scores.
const countCheck = function(count, array, player) {

  for (let i = 0; winningScores.length > i; i++) {

    if (count === winningScores[i]) {
      winner = player;
      winGame();
      // these if else statements run to remove the 4th square selected and check for a winning score.
    } else if( (count - array[0]) === winningScores[i] ){
      winner = player;
      winGame();

    } else if( (count - array[1]) === winningScores[i] ){
      winner = player;
      winGame();

    } else if( (count - array[2]) === winningScores[i] ){
      winner = player;
      winGame();

    } else if( (count - array[3]) === winningScores[i] ){
      winner = player;
      winGame();

    } else if( (count - array[4]) === winningScores[i] ){
      winner = player;
      winGame();
    }
  }
  return false;
};

/// WINNER display ///
// this function runs when a player wins. it produces a drop down window in the DOM with a play again option.
//called in the top click function
const winGame = function() {
  $('header').after('<div class="animated bounceInDown endGame"></div>')
  $('.endGame').append(`<h2 class="end">Player: ${player} Wins!</h2><button type="button" name="reset" class="reset">Play Again?</button>`);
  $('.score').addClass('animated bounce');
}

/// DRAW function ///
// checks if all squares have been clicked without a winner.
//called in top click function
let count = 0;

const tracker = function() {
  count += 1;

  if (count === 9) {
    $('header').after('<div class="animated bounceInDown endGame"></div>')
    $('.endGame').append(`<h2 class="end">It's A Draw!</h2><button type="button" name="reset" class="reset">Play Again?</button>`);
  }
};

/// SCORE keeper ////
// function to update score board
const scoreTracker = function() {
  let currentScore = Number($(`#${winner}`).html());
    currentScore += 1;
    $(`#${winner}`).text(currentScore);
}

/// LEVEL UP ///
// once players reach certain scores, characters level up/evolve

// GAME RESET //
// reset button that returns game board to starting point.
//does not remove active score board counts
$(document).on('click', '.reset', function() {
  $('.nought, .cross').removeClass().addClass('square');
  $('#winner').css('visibility', 'hidden');
  $('#draw').css('visibility', 'hidden');
  $('#winner').remove('h2');
  $('.win').remove();
  $('.endGame').addClass('animated fadeOutDown');
  setTimeout(function(){
    $('.endGame').remove();
  }, 1000);
  $('.score').removeClass('animated bounce');

  turn = 'nought';
  noughtArray = [];
  noughtCount = 0;
  crossArray = [];
  crossCount = 0;
  player = '';
  count = 0;
  winner = '';
});

// removes Tutorial page //
$(document).on('click', '.start', function() {
  $('.help').addClass('animated fadeOutDown');
  setTimeout(function(){
    $('.help').remove();
  }, 1000);

});
