function populate() {
  if (quiz.isEnded()) {
    //showScores();
  } else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    //Show choices
    var_choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = gameOverHtml
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Your Scores: " + quiz.score + "</h2>";
}
}
var questions = [
  new Questions("Which one is not an object oriented progrming language?", ["java", "c++", "c", "c#"], "c");
  new Questions("HTML stands for?", ["java", "c++", "HyperText Markup language", "c#"], "HyperText Markup language");
  new Questions("Which language is used for styling web pages ?", ["java", "css", "c", "c#"], "css");
  new Questions("what is wordpress?", ["CMS", "language", "theme", "framework"], "CMS");
];
var quiz = new Quiz(questions);
populate();
