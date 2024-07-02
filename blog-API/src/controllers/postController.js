const postModel = require('../models/postModel')

const postController = {
  //GET METHOD: /
  index: (req, res) => {
    res.json(postModel.getPosts())
  },

  //GET METHOD: /search/:id
  searchPost: (req, res) => {
    const {id} = req.params
    const postFound = postModel.searchPost(id)

    if(!postFound) {
      res.status(404)
      res.json({message: 'Post não encontrado'})
    } else {
      res.json(postFound)
    }
  }
}

module.exports = postController