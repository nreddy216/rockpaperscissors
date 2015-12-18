
//Uses random number generator to get RPS
function getComputerMove() {

    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getWinner(playerMove,computerMove) {
      var winner;

      if (playerMove===computerMove){
        winner = 'tie';
      }
      else if (playerMove==='rock'){
        if(computerMove==='paper'){
          winner = 'computer';
        }
        else{
          winner = 'player';
        }
      }
      else if (playerMove === 'paper'){
        if (computerMove==='scissors'){
          winner = 'computer';
        }
        else{
          winner = 'player';
        }
      }
      else if (playerMove === 'scissors'){
        if(computerMove==='rock'){
          winner = 'computer';
        }
        else{
          winner = 'player';
        }
      }
      else{
        winner = 'error';
      }

    return winner;

}

//Only plays once and gives a message to the player.
//Returns winner in order to be used for other functions later.

function playOnce(playerMove, computerMove){

  var winner = getWinner(playerMove, computerMove);

  winner = getWinner(playerMove, computerMove);


  if(winner==="player" || winner==="computer"){
    $('.winner').html("<p>" + winner.toUpperCase() + " won this round!" + "</p>");
  }
  else{
    $('.winner').html("<p>It's a TIE!</p>");
  }

  return winner;

}

//Once the html is ready, if the user hovers over one of the options, it will shake.
//all the scores are recorded constantly.

//

$(document).ready(function(){

  $('.option img').hover(function(){
    $(this).toggleClass("btn shake-slow");
  });

  var playerScore = 0;
  var computerScore = 0;
  var tieScore = 0;

  $('.option').click(function(){

    $(".option").css({"background-color":"#fff"});

    //playerMove is taken from the ID that is clicked on
    var playerMove = $(this).attr("id");
    //computerMove is via a Math.random function (above)
    var computerMove = getComputerMove();

    //GETS THE WINNER
    var winner = playOnce(playerMove, computerMove);


    //If it's a tie, it increases the tied SCORE
    //and it changes the color of the font at the bottom
    //and it colors the circle the neutral color
    if(winner==='tie'){
      $('.winner').css({"color":"#404040"});
      tieScore += 1;
      $("#"+playerMove).css({"background-color":"#F2EFDC"});
    }
    //otherwise, it colors the player and computer circles correspondingly
    //the color for the player's circle is orange, computer is blue
    //the font at the bottom changes color depending on the winner
    else{
      $("#"+playerMove).css({"background-color":"#F24C27"});
      $("#"+computerMove).css({"background-color":"#037E8C"});

      if(winner ==='player'){
        $('.winner').css({"color":"#F24C27"});
        playerScore += 1;
      }
      else{
        $('.winner').css({"color":"#037E8C"});
        computerScore += 1;
      }

    }


    //CHANGES ONLY THE SCORE OF THE WINNER OF THIS ROUND
    //EVAL evaluates it as a variable, not a string
    $("#"+winner+"Score").html(eval(winner+"Score"));


  });

});
