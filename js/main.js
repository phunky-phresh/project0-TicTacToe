//   273            84
//      | 1+ 2 + 4 | = 7
//      ++++++++++++
//      | 8+ 16+ 32| = 56
//      ++++++++++++
//      |64+128+256| = 448
//      ============
//       73 146 292

// VARIABLES for wins/draws/score keeping etc.
let turn = "nought";
let player = '';
let noughtArray = [];
let noughtCount = 0;
let crossArray = [];
let crossCount = 0;
let winner = ''
const winningScores = [7, 56, 73, 84, 146, 273, 292, 448];

//Click Function that switches between players
// also executes other functions
$(document).on('click', '.square', function() {

    if (turn === "nought") {
      noughtCount += Number($(this).text());
      noughtArray.push(Number($(this).text()));
      player = 'one'
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

/// DRAW function ///
let count = 0;

const tracker = function() {
  count += 1;

  if (count == 9) {
    console.log('draw');
    $('#draw').css('visibility', 'visible');
  }
};

// WIN function
const countCheck = function(count, array, player) {

  for (let i = 0; winningScores.length > i; i++) {

    if (count === winningScores[i]) {
      winner = player;
        $('#winner').append('<h2 class="win"></h2>');
        $('.win').text(`${player}`)
        $('#winner').css('visibility', 'visible');

    } else if( (count - array[0]) === winningScores[i] ){
      winner = player;
        $('#winner').append('<h2 class="win"></h2>');
        $('.win').text(`${player}`)
        $('#winner').css('visibility', 'visible');

    } else if( (count - array[1]) === winningScores[i] ){
      winner = player;
        $('#winner').append('<h2 class="win"></h2>');
        $('.win').text(`${player}`)
        $('#winner').css('visibility', 'visible');

    } else if( (count - array[2]) === winningScores[i] ){
      winner = player;
        $('#winner').append('<h2 class="win"></h2>');
        $('.win').text(`${player}`)
        $('#winner').css('visibility', 'visible');

    } else if( (count - array[3]) === winningScores[i] ){
      winner = player;
        $('#winner').append('<h2 class="win"></h2>');
        $('.win').text(`${player}`)
        $('#winner').css('visibility', 'visible');

    } else if( (count - array[4]) === winningScores[i] ){
      winner = player;
        $('#winner').append('<h2 class="win"></h2>');
        $('.win').text(`${player}`)
        $('#winner').css('visibility', 'visible');
    }
  }
  return false;
};

/// WINNER display ///

const winGame = function() {
  
  $('#winner').append('<h2 class="win"></h2>');
  $('.win').text(`${player}`)
  $('#winner').css('visibility', 'visible');
}

/// SCORE keeper ////
const scoreTracker = function() {
  let currentScore = Number($(`#${winner}`).html());
  currentScore += 1;
  $(`#${winner}`).text(currentScore);
}

/// LEVEL UP ///
// once players reach certain scores, characters level up/evolve

// GAME RESET
$('.reset').click(function() {
  $('.nought, .cross').removeClass().addClass('square');
  $('#winner').css('visibility', 'hidden');
  $('#draw').css('visibility', 'hidden');
  $('#winner').remove('h2');
  $('.win').remove();
  turn = 'nought';
  noughtArray = [];
  noughtCount = 0;
  crossArray = [];
  crossCount = 0;
  player = '';
  count = 0;
  winner = '';
});
