// toggle between knots and crosses
let turn = "nought";
let playerScore;
let noughtArray = [];
let noughtCount = 0;
let crossArray = [];
let crossCount = 0;
const winningScores = [7, 56, 73, 84, 146, 273, 292, 448];

$(document).on('click', '.square', function() {

    if (turn === "nought") {
      noughtCount += Number($(this).text());
      noughtArray.push(Number($(this).text()));
      playerScore = 'noughts'
      winner(noughtCount, noughtArray);
        $(this).removeClass('square');
        $(this).addClass('nought');
        turn = 'crosses';
  } else {
      crossCount += Number($(this).text());
      crossArray.push(Number($(this).text()))
      playerScore = "crosses";
      winner(crossCount, crossArray);

        $(this).removeClass('square');
        $(this).addClass('cross');
        turn = "nought";
  }
});

//   273            84
//      | 1| 2 | 4 | 7
//      | 8| 16| 32| 56
//      |64|128|256| 448
//       73 146 292

// const turns; //log how many turns are taken

const winner = function(count, array) {

  for (let i = 0; winningScores.length > i; i++) {
    // console.log(winningScores[i]);
    //score needs to use only 3 selections

    if (count === winningScores[i]) {
      $('#winner').append(`${playerScore}`);
      // $(`#${playerScore}`).text();

      $('#winner').css('visibility', 'visible');
      console.log('winner');

    } else if( (count - array[0]) === winningScores[i]  ){
      console.log('winner');
    } else if( (count - array[1]) === winningScores[i]  ){
      // $('.nought, .cross').removeClass().addClass('square');
      console.log('winner');
    } else if( (count - array[2]) === winningScores[i]  ){
      // $('.nought, .cross').removeClass().addClass('square');
      console.log('winner');
    } else if( (count - array[3]) === winningScores[i]  ){
      // $('.nought, .cross').removeClass().addClass('square');
      console.log('winner');
    }
  }
  return false;
};

$('#reset').click(function() {
  $('.nought, .cross').removeClass().addClass('square');
  $('#winner').css('visibility', 'hidden');
  turn = 'nought';
  noughtArray = [];
  noughtCount = 0;
  crossArray = [];
  crossCount = 0;
});
