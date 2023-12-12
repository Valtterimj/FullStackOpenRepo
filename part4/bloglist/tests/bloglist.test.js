const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
})

//4.8
test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength(helper.initialBlogs.length)
})

//4.9
test('4.9', async () => {
    const response = await api.get('/api/blogs')
    
    response.body.forEach(blog => {
      expect(blog.id).toBeDefined()
      expect(blog._id).toBeUndefined()
    })
})

//4.10
test('a valid blog can be added ', async () => {
    const newBlog = {
        title: 'addedNewBlog',
        author: 'bot',
        url: 'CorrectURL',
        likes: 0
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
  
    const blogsAtEnd = await helper.blogInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
    const titles = blogsAtEnd.map(b => b.title)
    expect(titles).toContain(
      'addedNewBlog'
    )
})

//4.11
test('4.11', async () => {
    const newBlog = {
      title: 'New Blog',
      author: 'John Doe',
      url: 'http://example.com/blog'
      // likes field is intentionally missing
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
  
    const response = await api.get('/api/blogs')
  
    const addedBlog = response.body.find(blog => blog.title === 'New Blog')
    expect(addedBlog.likes).toBeDefined()
    expect(addedBlog.likes).toBe(0)
  })

  //4.12
  test('4.12', async () => {
    const newBlogWithoutTitle = {
      author: 'John Doe',
      url: 'http://example.com/blog',
      likes: 5
    }
  
    const newBlogWithoutUrl = {
      title: 'New Blog',
      author: 'John Doe',
      likes: 5
    }
  
    // Test without title
    await api
      .post('/api/blogs')
      .send(newBlogWithoutTitle)
      .expect(400)
  
    // Test without url
    await api
      .post('/api/blogs')
      .send(newBlogWithoutUrl)
      .expect(400)
  })

  //4.13
  test('4.13', async () => {
    const blogsAtStart = await helper.blogInDb()
    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAtEnd = await helper.blogInDb()

    expect(blogsAtEnd).toHaveLength(
      helper.initialBlogs.length - 1
    )

    const titles = blogsAtEnd.map(r => r.title)

    expect(titles).not.toContain(blogToDelete.title)
  })
  
  

afterAll(async () => {
    await mongoose.connection.close()
})


