//create a new post
const createPostHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#title-input').value.trim();
  const body = document.querySelector('#content-input').value.trim();

  await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify( { title, body }),
    headers: { 'Content-Type': 'application/json' },
  })
  document.location.replace('/dashboard');
}


//edit a post
//delete a post


document
  .querySelector("#create-post-button")
  .addEventListener('click', createPostHandler);