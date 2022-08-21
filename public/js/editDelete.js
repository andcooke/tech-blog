
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


document
  .querySelector('#delete-post-button')
  .addEventListener('click', deletePostHandler);