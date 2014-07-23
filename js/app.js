	var guessIndex=0;
	var secretNum;

$(document).ready(function(){

	secretNum = randomNum();

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);

  	});

  	$(".new").click(function() {
  		newGame();
  	});

	$("form").submit(function(e){
    	var addGuess = $("input#userGuess").val();
    	e.preventDefault();
    	clearInput();
    	if (addGuess > 0 && addGuess <= 100) {
    		feedback(checkGuess(addGuess));
    		$("#count").text(guessIndex);
    		$("<li>"+addGuess+"</li>").appendTo("#guessList");	
    	} else {
    		feedback("Enter a number between 1 and 100");
    	}
    });
});

function clearInput() {
	$("#userGuess:text").val("");
};

function clearList() {
	$("#guessList").empty();
	$("#count").text("0");
};

function newGame() {
	clearInput();
	clearList();
	feedback("Make your Guess!");
};

function randomNum() {
	return Math.floor((Math.random() * 100)+1)
};

function checkGuess(addGuess){
	guessIndex++;
	var diff = Math.abs(addGuess - secretNum);
	var message;
	if (diff === 0) {
		return "You guessed it right!";
	} else (diff >= 1); {
		return hotCold(diff);
	}
};

function feedback(message) {
	$("#feedback").text(message);		
};

function hotCold(diff) {
	if (diff <= 2) {
		return "you are on the Sun!";
	} else if (diff <= 10) {
		return "you are very hot!";
	} else if (diff <= 20) {
		return "you are hot!";
	}	else if (diff <= 30) {
		return "getting warmer!";
	} else if (diff <= 40) {
		return "you are warm";
	} else if (diff <= 50) {
		return "lukewarm";
	} else if (diff <= 60) {
		return "almost lukewarm";
	} else if (diff <= 70) {
		return "you are still cold";
	} else if (diff <= 80) {
		return "you are cold";
	} else if (diff <= 90) {
		return "Ice cold";
	} else {
		return "Welcome to Antartica!";
	}
};
