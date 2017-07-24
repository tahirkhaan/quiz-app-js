function populate() {
	if (quiz.isEnded()) {
		//showScores();
	}
	else {
		//show question
		var element = document.getElementById("questions");
		element.innerHTML = quiz.getQuestionIndex() .text;

		//Show choices
		var_choices = quiz.getQuestionIndex() .choices;
		for (var i = 0; i < choices.length; i++) {

			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
		}
	}
}


var questions = {
	new Question("Which one is not an object oriebted progrming language?",["java", "c++", "c", "c#"], "c"),
	new Question("HTML stands for?",["java", "c++", "HyperText Markup language", "c#"], "HyperText Markup language"),
	new Question("Which language is used for styling web pages ?",["java", "css", "c", "c#"], "css"),
	new Question("what is wordpress?",["CMS", "language", "theme", "framework"], "CMS"),
};

var quiz = new Quiz(questions);

populate();