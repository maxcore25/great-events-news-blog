const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');
const submitBtn = document.querySelector('form input[type="submit"]');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(commentInput.value);
});
