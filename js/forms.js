


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


  const ownerInformation = document.querySelector(`[value="issueA"]`)
  const businessInformation = document.querySelector(`[value="issueB"]`)
  const ownerInformationProprerty =  document.querySelector('.issueA')
  const businessInformationProprerty =    document.querySelector('.issueB')

  ownerInformation.addEventListener('click',() =>{
      ownerInformationProprerty.style.display='block';
      businessInformationProprerty.style.display='none';
      console.log('ownerInformation') 
  })

  businessInformation.addEventListener('click',() =>{
      businessInformationProprerty.style.display='block';
      ownerInformationProprerty.style.display='none';
      console.log('businessInformation')
  }) 




