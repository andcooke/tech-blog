
const deletePostHandler = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('input[name="post-id"]').value;
  // console.log("post id: ", post_id)
  await fetch(`/api/post/${post_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  document.location.replace('/dashboard');
}

const updatePostHandler = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('input[name="post-id"]').value;
  const title = document.querySelector('input[name="title-input"]').value.trim();
  const body = document.querySelector('input[name="content-input"]').value.trim(); 
  await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, body }),
    headers: { 'Content-Type': 'application/json' },
  })
  document.location.replace('/dashboard');
}

document
  .querySelector('#update-post-button')
  .addEventListener('click', updatePostHandler);

document
  .querySelector('#delete-post-button')
  .addEventListener('click', deletePostHandler);

