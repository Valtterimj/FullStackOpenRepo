const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'firstBLog',
    author: 'Verner',
    url: 'CorrectURL',
    likes: 2
  },
  {
    title: 'secondBLog',
    author: 'Mike',
    url: 'CorrectURL',
    likes: 1
  }
]

// const nonExistingId = async () => {
//   const blog = new BLog({ content: 'willremovethissoon' })
//   await note.save()
//   await note.remove()

//   return note._id.toString()
// }

const blogInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, blogInDb
}