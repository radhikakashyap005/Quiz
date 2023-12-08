const quizData =
[
  {
    question: "1. What does HTML stand for?",
    options: {
      a: "Hyper Transfer Markup Language",
      b: "Hyper Text Markup Language",
      c: "Hyperlink Text Markup Language",
      d: "Hyper Tool Markup Language",
    },
    correct: "b",
  },

{
  question: "2. Which HTML tag is used to define an unordered list?",
  options: {
    a: "`<ul>`",
    b: "`<ol>`",
    c: "`<li>`",
    d: "`<list>`",
  },
  correct: "a: `<ul>`",
},

{
  question: "3. What does the HTML attribute `href` stand for?",
  options: {
    a: "Hypertext Reference",
    b: "Hyper Transfer",
    c: "Hypertext Reference",
    d: "Hyper Text File Reference",
  },
  correct: "a: Hypertext Reference",
},

{
  question: "4. What is the correct HTML element for inserting a line break?",
  options: {
    a: "`<break>`",
    b: "`<lb>`",
    c: "`<br>`",
    d: "`<newline>`",
  },
  correct: "c: `<br>`",
},

{
  question: "5. Which CSS property is used to change the text color of an element?",
  options: {
    a: "`color`",
    b: "`text-color`",
    c: "`font-color`",
    d: "`text`",
  },
  correct: "a: `color`",
},

{
  question: "6. How can you include a comment in a CSS file?",
  options: {
    a: "`// This is a comment`",
    b: "`/* This is a comment */`",
    c: "`<!-- This is a comment -->`",
    d: "`# This is a comment`",
  },
  correct: "b",
},
{
  question: "7. What does the CSS property `display: none;` do?",
  options: {
    a: "Hides the element",
    b: "Makes the element semi-transparent",
    c: "Changes the element's font",
    d: "None of the above",
  },
  correct: "a",
},


{
  question: "8. What is the default value of the `position` property in CSS?",
  options: {
    a: "relative",
    b: "fixed",
    c: "absolute",
    d: "static",
  },
  correct: "d",
},
{
  question: "9. What does the `z-index` property in CSS determine?",
  options: {
    a: "The size of the element",
    b: "The opacity of the element",
    c: "The stacking order of the element",
    d: "The width of the element",
  },
  correct: "c",
},
{
  question: "10. Which CSS property is used to add rounded corners to an element?",
  options: {
    a: "`corner-radius`",
    b: "`border-radius`",
    c: "`rounded-corners`",
    d: "`corner-style`",
  },
  correct: "b",
},
{
  question: "11. What is JavaScript?",
  options: {
    a: "A programming language used for styling web pages",
    b: "A markup language for creating web pages",
    c: "A scripting language that allows you to create dynamically updating content",
    d: "A database management system",
  },
  correct: "c",
},
{
  question: "12. Which symbol is used for single-line comments in JavaScript?",
  options: {
    a: "`//`",
    b: "`/* */`",
    c: "`#`",
    d: "`<!-- -->`",
  },
  correct: "a",
},
{
  question: "13. What is the purpose of the `typeof` operator in JavaScript?",
  options: {
    a: "To determine the type of an object",
    b: "To perform arithmetic operations",
    c: "To compare two values",
    d: "To declare variables",
  },
  correct: "a",
},
{
  question: "14. What does the `===` operator do in JavaScript?",
  options: {
    a: "Compares two values and returns true if they are equal, without type conversion",
    b: "Assigns a value to a variable",
    c: "Compares two values and returns true if they are equal, with type conversion",
    d: "Checks if a variable is undefined",
  },
  correct: "a",
},
{
  question: "15. What does the `this` keyword refer to in JavaScript?",
  options: {
    a: "It refers to the previous element in an array",
    b: "It refers to the current object or context",
    c: "It refers to the global window object",
    d: "It refers to the parent element in a nested structure",
  },
  correct: "d",
},
];




const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  if (currentQuiz < quizData.length) {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.options.a;
    b_text.innerText = currentQuizData.options.b;
    c_text.innerText = currentQuizData.options.c;
    d_text.innerText = currentQuizData.options.d;
  } else {
    quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>`;
  }
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    loadQuiz();
  }
});

function showCorrectAnswers() {
  let resultHTML = '';
  quizData.forEach((question, index) => {
    resultHTML += `<p>${index + 1}. ${question.correct}</p>`;
  });
  return resultHTML;
}




