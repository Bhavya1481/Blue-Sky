// Redirect to User Info page when clicking the circle
function goToUserInfoPage() {
    window.location.href = 'user-info.html'; // Redirect to the User Info page
} 
  // Function to handle navigation between sections on the User Info page
function setupNavigation() {
    const navLinks = document.querySelectorAll('#user-options a');
    const sections = document.querySelectorAll('#user-content article');
 
    // Add click listeners to navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Get the target section ID from the link href
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Hide all sections and remove active class from links
        sections.forEach(section => section.style.display = 'none');
        navLinks.forEach(nav => nav.classList.remove('active'));
  
        // Show the target section and set the active class
        targetSection.style.display = 'block';
        link.classList.add('active');
      });
    });
  
    // Display the first section by default
    if (sections.length > 0) {
      sections.forEach(section => section.style.display = 'none');
      sections[0].style.display = 'block';
      navLinks[0].classList.add('active');
    }
  }
  
  // Populate sample data for user info sections
  function populateUserInfo() {
    const summarySection = document.getElementById('summary');
    const answersSection = document.getElementById('answers');
    const questionsSection = document.getElementById('questions');
  
    // Example data
    const userSummary = `
      <p><strong>Username:</strong> JohnDoe</p>
      <p><strong>Reputation:</strong> 1234</p>
      <p><strong>Badges:</strong> Gold: 3, Silver: 10, Bronze: 20</p>
    `;
  
    const userAnswers = `
      <ul>
        <li>Answer 1: <a href="#">How to implement React Hooks?</a></li>
        <li>Answer 2: <a href="#">Understanding JavaScript Closures</a></li>
        <li>Answer 3: <a href="#">Best Practices for CSS Grid</a></li>
      </ul>
    `;
  
    const userQuestions = `
      <ul>
        <li>Question 1: <a href="#">What is the difference between let, const, and var?</a></li>
        <li>Question 2: <a href="#">How to use async/await in JavaScript?</a></li>
        <li>Question 3: <a href="#">Best libraries for frontend development in 2025?</a></li>
      </ul>
    `;
  
    // Populate sections with data
    summarySection.innerHTML += userSummary;
    answersSection.innerHTML += userAnswers;
    questionsSection.innerHTML += userQuestions;
  }
  
  // Initialize the User Info page functionality
  document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.getElementById('user-options'))) {
      setupNavigation();
      populateUserInfo();
    }
  });
  
