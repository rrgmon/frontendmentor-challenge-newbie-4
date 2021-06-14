'use strict';

const questionsEl = document.getElementsByClassName('question');
const answerEl = document.getElementsByClassName('answer');
const arrowEl = document.getElementsByClassName('arrow');
for (let i = 0; i < questionsEl.length; i++) {
  questionsEl[i].addEventListener('click', () => {
    answerEl[i].classList.toggle('display-answer');
    questionsEl[i].classList.toggle('highlight');
    arrowEl[i].classList.toggle('invert-arrow');
  });
}
