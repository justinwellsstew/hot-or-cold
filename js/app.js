$(document).ready(function(){
var randomNumber, 
    guessNumber,
    feedback, 
    numberDifference;
    guessList = $('#guessList')

    randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log("random number: " + randomNumber);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $('#guessButton').click(function(event){
      event.preventDefault();
      guessNumber = $('#userGuess').val();
      if(guessNumber > 100 || guessNumber < 1){
        alert('invalid guess, select a number between 1 and 100')
      }else{
        console.log("guess number: " + guessNumber);
        numberDifference = Math.abs(guessNumber - randomNumber);
        if(numberDifference > 50){
          feedback = "Ice cold";
        }else if(numberDifference > 30 ){
          feedback = "Cold";
        }else if (numberDifference > 10 ){
          feedback = "Warm";
        }else {
          feedback = "You Won!";
        }
        $('#feedback').text(feedback);
        guessList.append('<li>' + guessNumber + '</li>');
        $('#userGuess').val('');
        $('#count').text($('#guessList').children().length);
      }
    });    
});


