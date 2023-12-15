const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')


blogRouter.get('/', async (request, response) => {
  const blogs = await Blog
    .find({}).populate('user', {username: 1, name: 1 })
  response.json(blogs)
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

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
})


module.exports = blogRouter