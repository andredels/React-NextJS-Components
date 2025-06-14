const student = {
  name: '',
  course: 'Web Development',
  year: 2025
};

const favoriteTopics = ['Variables', 'Functions', 'DOM', 'Events'];

function greetStudent(name) {
  return `Hello, ${name}! Welcome to ${student.course} - Year ${student.year}.`;
}

document.getElementById('showInfoBtn').addEventListener('click', () => {
  const nameInput = document.getElementById('studentName').value.trim();
  const output = document.getElementById('infoOutput');

  if (nameInput === '') {
    output.innerHTML = '<p>Please enter your name.</p>';
    return;
  }

  student.name = nameInput;

  const greeting = greetStudent(student.name);
  const topicsList = favoriteTopics.map(topic => `<li>${topic}</li>`).join('');

  output.innerHTML = `
    <p>${greeting}</p>
    <p><strong>Favorite Topics:</strong></p>
    <ul>${topicsList}</ul>
  `;
});
