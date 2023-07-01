function showNextQuestion(currentQuestion) {
    currentQuestion.style.display = 'none'; // Hide the current question

    var nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion) {
      nextQuestion.style.display = 'block'; // Show the next question
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var questions = document.getElementsByClassName('question');
    var firstQuestion = questions[0];
    firstQuestion.style.display = 'block'; // Show the first question

    var buttons = document.getElementsByClassName('next-button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        showNextQuestion(this.parentElement);
      });
    }
  });