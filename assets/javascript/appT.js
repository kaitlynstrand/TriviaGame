var triviaQuestionArr = [

{
	question: "What is my first name?",
	answers: ["Kaitlyn", "Meghan", "Kristen", "Kathleen"],
	answer: 0,
}];

//
var gameStart;
var triviaQuestionRandom;

var wins = 0;
var losses = 0;


function renderbuttons() {
	$("#answer-publish").empty () 

for (var i = 0; i < triviaQuestionRandom.answers.length; i++) { 
  var triviaAnswerChoices = $("<button>");
  triviaAnswerChoices.addClass("triviaAnswerChoices");
	triviaAnswerChoices.attr("data-name", triviaQuestionRandom.answers[i]);
  triviaAnswerChoices.text(triviaQuestionRandom.answers[i]);
  $("#answer-publish").append(triviaAnswerChoices);  


$("#start-button").on("click", function() {

	initializeGame();
	renderButtons();

	console.log(triviaQuestionRandom.question)
	console.log(triviaQuestionRandom.answers)

});





	//.on("click") needs to recognize: what button was clicked? 
	//what value was assigned to that button?
	//add that value to current (=+) userTotal
	//check if userTotal > resultTotal

	//three functions
	//good: after onclick adds userAddedNum to userTotal and if = then +=1 win and regenerate new random number 
	function good() {
		alert("Correct!");
		wins += 1;
		//$("#").(wins);
		
	}

	//bad: add randomNum generated to userAddedNum if > 
	function bad() {
		losses += 1;
		$("#losses-counter").text(losses);
		reset();
	}

$("#answer-selection").on("click", function(event) {

	console.log($("#answer-selection").text())
	userAnswerChoice()

});

function initializeGame() {


$(".wins-num").text(wins);
$(".losses-num").text(losses);

$(".question-current").append(triviaQuestionRandom);
$(".question.current").text(triviaQuestionRandom);

triviaQuestionRandom = triviaQuestionArr[Math.floor(Math.random() * triviaQuestionArr.length)]
$("#question-publish").text(triviaQuestionRandom.question);

function renderbuttons() {
	$("#answer-publish").empty () 

for (var i = 0; i < triviaQuestionRandom.answers.length; i++) { 
  var triviaAnswerChoices = $("<button>");
  triviaAnswerChoices.addClass("triviaAnswerChoices");
	triviaAnswerChoices.attr("data-name", triviaQuestionRandom.answers[i]);
  triviaAnswerChoices.text(triviaQuestionRandom.answers[i]);
  $("#answer-publish").append(triviaAnswerChoices);  

};
};
};
};
};

    //need to figure out how to give attribute of answer array index
    //had trouble here assigning the data attributes to the answer selections since they 
    //went through for loop
   
    
    

    // for (var i = 0; i < movies.length; i++) {
    //       var movieButton = $("<button>")
    //       movieButton.addClass("movieButton")
    //       movieButton.attr("data-name", movies[i])
          
    //       $("#movies-view").append(movieButton)
    //       movieButton.text(movies[i])

  
 


// 		var choices = $('<div>');
// 		choices.text(triviaQuestions[currentQuestion].answerList[i]);
// 		choices.attr({'data-index': i });
// 		choices.addClass('thisChoice');
// 		$('.answerList').append(choices);
// }

// function userAnswerChoice() {
 
//  var correctAnswerValue = triviaQuestionArr[triviaQuestionRandom].answers[triviaQuestionArr[triviaQuestionRandom].answer];
//  var correctAnswerIndex = triviaQuestionArr[triviaQuestionRandom].answer;
// // 
//  		//if correctAnswerIndex = 

// //if index numbers same value, wins +=

// //if index numbers not same value, losses +=

// }

// function endGame() {



// }
//$("#answer-selection").text(answerOne);
//$("#choice-one").attr(triviaQuestionRandom.answers[0])

// answerTwo = $("#choice-two")
// answerThree = $("#choice-three")
// answerFour = $("#choice-four")



