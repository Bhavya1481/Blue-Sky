const questionForm = document.getElementById('question-form');
const questionTitleInput = document.getElementById('question-title');
const questionDescriptionInput = document.getElementById('question-description');
const tagsInput = document.getElementById('tags');
const tagsContainer = document.getElementById('tags-container');
const searchInput = document.getElementById('search-input');
const questionList = document.getElementById('questions');
let questions = [];

// Handle tags input
tagsInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && tagsInput.value.trim() !== '') {
    const tag = tagsInput.value.trim();
    const tagElement = document.createElement('span');
    tagElement.classList.add('tag');
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
    tagsInput.value = '';
  }
});

// Handle submitting a question
document.getElementById('submit-question').addEventListener('click', () => {
  const title = questionTitleInput.value.trim();
  const description = questionDescriptionInput.value.trim();
  const tags = Array.from(tagsContainer.getElementsByClassName('tag')).map(tag => tag.textContent);

  if (title && description) {
    const question = {
      title,
      description,
      tags,
    };

    // Add question to the list and render
    questions.push(question);
    renderQuestions(questions);

    // Clear the form
    questionTitleInput.value = '';
    questionDescriptionInput.value = '';
    tagsContainer.innerHTML = '';
  } else {
    alert('Please fill out all fields!');
  }
});

// Render questions
function renderQuestions(filteredQuestions) {
  questionList.innerHTML = '';
  filteredQuestions.forEach(question => {
    const questionElement = document.createElement('li');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <h3>${question.title}</h3>
      <p>${question.description}</p>
      <div><strong>Tags:</strong> ${question.tags.join(', ')}</div>
      <div class="answer-section">
        <input type="text" placeholder="Write an answer...">
        <button>Post</button>
        <div class="answers"></div>
      </div>
    `;
    questionList.appendChild(questionElement);
  });
}

// Handle searching questions
searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredQuestions = questions.filter(question => 
    question.title.toLowerCase().includes(searchQuery) ||
    question.tags.some(tag => tag.toLowerCase().includes(searchQuery))
  );
  renderQuestions(filteredQuestions);
});
