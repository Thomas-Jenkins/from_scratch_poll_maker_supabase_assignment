// import functions and grab DOM elements
import { createPoll, getPolls } from './fetch-utils.js';

const submitPoll = document.getElementById('inputs');
const currentTrackedPollEl = document.getElementById('poll-here');
const pollArchive = document.getElementById('right');
const voteOneUp = document.getElementById('votes-one-up');
const voteTwoUp = document.getElementById('votes-two-up');
const voteOneDown = document.getElementById('votes-one-down');
const voteTwoDown = document.getElementById('votes-two-down');
// console.log(submitPoll);
const archivePoll = document.getElementById('finish-poll');
// let state
let currentPoll = {
    question: '',
    answer1: '',
    answer2: '',
    votes1: '',
    votes2: ''
};
let pastPolls = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async () => {
    const booger = await getPolls();
    pastPolls = booger;
    displayAllPolls(); 
});
submitPoll.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(submitPoll);
    const question = formData.get('question');
    // console.log(question);
    const answerOne = formData.get('answer-one');
    // console.log(answerOne);
    const answerTwo = formData.get('answer-two');
    // console.log(answerTwo);

    currentPoll.question = question;
    currentPoll.answer1 = answerOne;
    currentPoll.answer2 = answerTwo;
    currentPoll.votes1 = 0;
    currentPoll.votes2 = 0;

    // console.log(poll);
    displayPoll();
    submitPoll.reset();
});

voteOneUp.addEventListener('click', () => {
    currentPoll.votes1++;
    displayPoll();
});
voteOneDown.addEventListener('click', () => {
    currentPoll.votes1--;
    displayPoll();
});
voteTwoUp.addEventListener('click', () => {
    currentPoll.votes2++;
    displayPoll();
});
voteTwoDown.addEventListener('click', () => {
    currentPoll.votes2--;
    displayPoll();
});

archivePoll.addEventListener('click', async () => {
    await createPoll(currentPoll);
    const booger = await getPolls();
    pastPolls = booger;
    displayAllPolls();
});

function displayPoll() {
    currentTrackedPollEl.textContent = '';
    const pollEl = renderPoll(currentPoll.question, currentPoll.answer1, currentPoll.answer2, currentPoll.votes1, currentPoll.votes2);
    currentTrackedPollEl.append(pollEl);
}

function renderPoll(question, answerOne, answerTwo, votesOne, votesTwo) {
    const div1 = document.createElement('div');
    const questionEl = document.createElement('h2');
    const answerOneEl = document.createElement('p');
    const answerTwoEl = document. createElement('p');
    const questOneVotes = document.createElement('p');
    const questTwoVotes = document.createElement('p');

    questionEl.textContent = question;
    answerOneEl.textContent = answerOne;
    answerTwoEl.textContent = answerTwo;
    questOneVotes.textContent = votesOne;
    questTwoVotes.textContent = votesTwo;

    div1.append(questionEl, answerOneEl, questOneVotes, answerTwoEl, questTwoVotes);
    
    return div1;
}

function displayAllPolls() {
    pollArchive.textContent = '';
    getPolls();
    for (let poll of pastPolls) {
        const archiveEl = renderPoll(poll.question, poll.answer1, poll.answer2, poll.votes1, poll.votes2);
        pollArchive.append(archiveEl);
    }
}


