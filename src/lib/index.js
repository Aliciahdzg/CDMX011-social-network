const savePost = (description) => {
  fs.collection('posts').doc().set({
    description,
  });
};

const publishPost = document.querySelector('#form-post');
publishPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  const closeModal = document.querySelector('#modalshow');
  closeModal.style.display = 'none';
  const description = document.getElementById('textPost');
  await savePost(description.value);
  publishPost.reset();
  description.focus();
});
console.log(publishPost);

// let name = document.getElementById('name').value;
// let email = document.getElementById('emailUser').value;
// let password = document.getElementById('passwordUser').value;
