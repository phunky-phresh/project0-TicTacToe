// toggle between knots and crosses
let turn = "nought";
let noughtScore = [];
let nought = 0;
let crossScore = [];
let cross = 0;
const winningScores = [7, 56, 73, 84, 146, 273, 292, 448];

$(document).on('click', '.square', function() {

    if (turn === "nought") {
      nought = nought += Number($(this).text());
      noughtScore.push(Number($(this).text()));
      winner(nought, noughtScore);

        $(this).removeClass('square');
        $(this).addClass('nought');
        turn = "cross";
  } else {
      cross = cross += Number($(this).text());
      crossScore.push(Number($(this).text()))
      winner(cross, crossScore);

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

const winner = function(score, player) {

  for (let i = 0; winningScores.length > i; i++) {
    // console.log(winningScores[i]);
    //score needs to use only 3 selections

    if (score === winningScores[i]) {
      console.log('here');
      console.log('winner');

    } else if( (score - player[0]) === winningScores[i]  ){
      // $('.nought, .cross').removeClass().addClass('square');
      console.log('winner');
    } else if( (score - player[1]) === winningScores[i]  ){
      // $('.nought, .cross').removeClass().addClass('square');
      console.log('winner');
    } else if( (score - player[2]) === winningScores[i]  ){
      // $('.nought, .cross').removeClass().addClass('square');
      console.log('winner');
    } else if( (score - player[3]) === winningScores[i]  ){
      // $('.nought, .cross').removeClass().addClass('square');
      console.log('winner');
    }
  }
  return false;
};

$('#reset').click(function() {
  $('.nought, .cross').removeClass().addClass('square');
});
