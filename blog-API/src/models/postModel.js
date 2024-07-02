let posts = [
  {
    id: '23', 
    author: 'Gabriel', 
    title: 'Como eu aprendi a superar as dificuldades',
    content: 'teste teste teste teste', 
    createdAt: new Date(), 
    editedAt: new Date()
  },

  {
    id: '2345', 
    author: 'Laissa', 
    title: 'Como fazer tal coisa',
    content: 'teste teste teste teste', 
    createdAt: new Date(), 
    editedAt: new Date()
  }
]

//post : {id, author, title, content, createdAt, editedAt}

const postModel = {
  getPosts() {
    if (posts.length === 0) {
      return {message: 'Nenhum post publicado.'}
    }

    return posts
  },

  searchPost(id) {
    return posts.find(post => post.id === id)
  },

  createPost(author, title, content){
    const post = {
      id: toString(Math.floor(Math.random() * 99999)),
      author: author,
      title: title,
      content: content,
      createdAt: new Date(),
      editedAt: new Date()
    }

    return post
  },

  savePost(post){
    posts.unshift(post)
  },

  editPost(id, editedPost){
    const index = posts.findIndex(post => post.id === id)
    posts[index] = {...posts[index], ...editedPost, editedAt: new Date()}
  },

  deletePost(id){
    posts = posts.filter(post => post.id === id)
  }
}

module.exports = postModel