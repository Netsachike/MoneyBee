


function showNextQuestion(currentQuestion) {
     // Hide the curre question
     currentQuestion.style.display = 'none';
    var nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion) {
      // Show the next question
      nextQuestion.style.display = 'block'; 
    }
  }


  function showPrevious(currentQuestion) {
    // Hide the current question
    currentQuestion.style.display = 'none'; 
    var prevQuestion = currentQuestion.previousElementSibling;
    if (prevQuestion) {
      // Show the previous question
      prevQuestion.style.display = 'block'; 
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    var questions = document.getElementsByClassName('question');
    var firstQuestion = questions[0];
    // Show the first question
    firstQuestion.style.display = 'block'; 
    showNextQuestion(this.parentElement)
    showPrevious(this.parentElement)
  });
 


