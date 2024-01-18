const avatarBtn = document.querySelector('.set-avatar')
const postBtn = document.querySelector('.set-post')
const posts = document.querySelector('.posts')

avatarBtn.addEventListener('click', setAvatar)
postBtn.addEventListener('click', setPost)

function setAvatar() {
  const avatarInput = document.getElementById('avatar-url')
  const avatar = document.querySelector('.avatar')
  if (avatarInput.value.trim()) {
    avatar.setAttribute('src', avatarInput.value)
    avatarInput.value = ''
  }
}

function removePost(id) {
  const post = document.getElementById(id)
  post.remove()
  // posts.removeChild(post)
}

function setPost() {
  const postInput = document.getElementById('post-text')

  const postElement = document.createElement('div')
  const postText = document.createElement('span')
  const removePostBtn = document.createElement('button')
  if (!postInput.value.trim()) return

  removePostBtn.innerText = 'Delete'
  postText.innerText = postInput.value

  const postId = String(Math.random())

  postElement.setAttribute('id', postId)
  postElement.classList.add('post')
  removePostBtn.classList.add('btn')
  postText.classList.add('post-text')

  removePostBtn.addEventListener('click', function() {
    return removePost(postId)
  })

  postElement.appendChild(postText)
  postElement.appendChild(removePostBtn)
  posts.appendChild(postElement)

  postInput.value = ''
}


