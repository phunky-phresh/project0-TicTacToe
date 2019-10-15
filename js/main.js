// toggle between knots and crosses
let turn = "knought";
let knoughtScore = [];
let crossScore = [];
let win = 0
const winningScores = [7, 56, 73, 84, 146, 273, 292, 448];

$(document).on('click', '.square', function() {

    if (turn === "knought") {
      // knoughtScore = knoughtScore += Number($(this).text());
      knoughtScore.push(Number($(this).text()));
      winner(knoughtScore);
      console.log("knought");
      $(this).removeClass('square');
      // $(this).attr('id', 'knot');
      $(this).addClass('knought');
      // let knot = $(this).html('<h5>knot</h5>');
      turn = "cross";
  } else {
      // crossScore = crossScore += Number($(this).text());
      crossScore.push(Number($(this).text()))
      winner(crossScore);
      $(this).removeClass('square');
      $(this).addClass('cross');
      console.log("cross");
      turn = "knought"
  }
});

//   273            84
//      | 1| 2 | 4 | 7
//      | 8| 16| 32| 56
//      |64|128|256| 448
//      73  146 292

// const turns; //log how many turns are taken

const winner = function(score) {
  for (let i = 0; winningScores.length > i; i++) {
    // console.log(winningScores[i]);
    //score needs to use only 3 selections

    if (score === winningScores[i]) {
      // return 'winner';
      alert(`winner`);
    }
  }
  return false;
};

const guess = function(score) {
  for (let i = 0; score.length > i; i++) {
    // console.log(score[i]);
    win = score[0]+score[1]+score[2];
    console.log(win);
  }
}
// console.log(winner(146));
//need to factor in an incorrect guess. can only accept 3 squares to reach a
// correct total.
