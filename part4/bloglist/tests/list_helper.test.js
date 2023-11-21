const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]

    const listWithMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1111',
            title: 'Go To testing',
            author: 'Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 7,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
    ]
    const listWithZeroBlogs = []
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })

    test('when list has multiple blogs equals the likes the sum of likes', () => {
        const result = listHelper.totalLikes(listWithMultipleBlogs)
        expect(result).toBe(15)
    })

    test('when list has zero blogs equals the likes zero', () => {
        const result = listHelper.totalLikes(listWithZeroBlogs)
        expect(result).toBe(0)
    })
  })


  describe('most liked', () => {
    const listWithMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1111',
            title: 'Go To testing',
            author: 'Coder',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 7,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
    ]

    test('most liked blog is by Coder', () => {
        const result = listHelper.favoriteBlog(listWithMultipleBlogs)
        expect(result).toEqual(listWithMultipleBlogs[1])
    })
  })

  describe('most blogs', () => {
    const listWithMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d1111',
            title: 'Go To testing',
            author: 'Coder',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 13,
            __v: 0
        },
        {
            _id: '5a422aa71b54a6222222',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
        },
    ]

    test('Most blog posts have Edsger W. Dijkstra', () => {
        const result = listHelper.mostBlogs(listWithMultipleBlogs)
        expect(result).toEqual({author: 'Edsger W. Dijkstra', blogs: 2})
    })

    test('Most likes', () => {
        const result = listHelper.mostLikes(listWithMultipleBlogs)
        expect(result).toEqual({author: 'Coder', likes: 13})
    })

  })