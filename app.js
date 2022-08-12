// import functions and grab DOM elements
const submitPoll = document.getElementById('inputs');
// console.log(submitPoll);
// let state
let poll = {
    question: '',
    answer1: '',
    answer2: '',
    votes1: '',
    votes2: ''
};

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitPoll.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(submitPoll);
    const question = formData.get('question');
    console.log(question);
    const answerOne = formData.get('answer-one');
    console.log(answerOne);
    const answerTwo = formData.get('answer-two');
    console.log(answerTwo);
    
});

function renderCurrentPollEl() {

}