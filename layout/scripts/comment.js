const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');
const submitBtn = document.querySelector('form input[type="submit"]');
const commentsField = document.querySelector('#comments ul');

const commentTemplate = `
`;
let comments = [];

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(commentInput.value);

  comments.push({
    name: nameInput.value,
    email: emailInput.value,
    comment: commentInput.value,
  });
  console.log(comments);

  commentsField.insertAdjacentHTML('beforeend');
});
