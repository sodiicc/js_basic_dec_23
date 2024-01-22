const avatarBtn = document.querySelector('.set-avatar')
const postBtn = document.querySelector('.set-post')
const posts = document.querySelector('.posts')

let defaultAvatar = 'https://www.royal.uk/sites/default/files/styles/1400x500/public/images/encyclopaedia/encyc-diana.jpg?itok=xWDWI5kX'

const myPosts = [
  {id: '1', text: 'My post number 1', avatar: 'https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Katarina_Render.png/revision/latest?cb=20210521205837'},
  {id: '2', text: 'My post number 2', avatar: 'https://images.contentstack.io/v3/assets/blt93c07aad6c2c008a/bltd4d2c9328dfec2f3/63ea6f9b7de5bc0caeba458d/Urgot_0.jpg'},
  {id: '3', text: 'My post number 3', avatar: 'https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Katarina_Render.png/revision/latest?cb=20210521205837'},
  {id: '4', text: 'My post number 4', avatar: 'https://images.contentstack.io/v3/assets/blt93c07aad6c2c008a/bltd4d2c9328dfec2f3/63ea6f9b7de5bc0caeba458d/Urgot_0.jpg'},
]
setPosts()

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
}

function setPosts() {
  myPosts.forEach(el => setPost(el))
}

function setPost(post) {
  const postInput = document.getElementById('post-text')

  const postElement = document.createElement('div')
  const postText = document.createElement('span')
  const postImg = document.createElement('img')
  const removePostBtn = document.createElement('button')
  const textBlock = document.createElement('span')
  const dateBlock = document.createElement('span')
  const dateEl = document.createElement('span')
  if (!postInput.value.trim() && !post.text) return

  removePostBtn.innerText = 'Delete'
  dateEl.innerText = new Date().toLocaleDateString()
  postText.innerText = post.text ? post.text : postInput.value

  const postId = post.id ? post.id : String(Math.random())

  postElement.setAttribute('id', postId)
  postImg.setAttribute('src', post.avatar ? post.avatar : defaultAvatar)
  postElement.classList.add('post')
  removePostBtn.classList.add('btn')
  postText.classList.add('post-text')
  postImg.classList.add('small-avatar')
  textBlock.classList.add('text-block')
  dateBlock.classList.add('date-block')
  dateEl.classList.add('date')

  removePostBtn.addEventListener('click', function() {
    return removePost(postId)
  })

  textBlock.appendChild(postImg)
  textBlock.appendChild(postText)
  postElement.appendChild(textBlock)
  dateBlock.appendChild(removePostBtn)
  dateBlock.appendChild(dateEl)
  postElement.appendChild(dateBlock)
  posts.appendChild(postElement)

  postInput.value = ''
}


