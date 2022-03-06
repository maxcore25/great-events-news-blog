const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');
const submitBtn = document.querySelector('form input[type="submit"]');
const commentsField = document.querySelector('#comments ul');
let comments = [];

function createCommentTemplate({ name, comment }) {
  const commentTemplate = `
    <li>
        <article>
            <header>
            <address>${name}</address>
            <time datetime="2021-12-15">${new Date().toLocaleDateString()}</time>
            </header>
            <div class="comcont">
            <p>
                ${comment}
            </p>
            </div>
        </article>
    </li>
    `;

  return commentTemplate;
}

submitBtn.addEventListener('click', e => {
  e.preventDefault();

  comments.push({
    name: nameInput.value,
    email: emailInput.value,
    comment: commentInput.value,
  });

  commentsField.insertAdjacentHTML(
    'beforeend',
    createCommentTemplate(comments[comments.length - 1])
  );

  nameInput.value = '';
  emailInput.value = '';
  commentInput.value = '';
});
