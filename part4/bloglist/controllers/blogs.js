const blogRouter = require('express').Router()
const Blog = require('../models/blog')


blogRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
    })
})
  
blogRouter.post('/', (request, response) => {
  const {title, url, author, likes} = request.body

  if (!title || !url) {
    return response.status(400).json({error: 'Title and url are required'})
  }
  
    const newBlog = new Blog( {
      title: request.body.title,
      author: request.body.author,
      url: request.body.url,
      likes: request.body.likes === undefined ? 0 : request.body.likes
    })
  
    newBlog
      .save()
      .then(result => {
        response.status(201).json(result)
    })
})


module.exports = blogRouter