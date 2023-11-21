const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce(function(sum, blog){
        return sum + blog.likes
    }, 0)
}

const favoriteBlog = (blogs) => {
    return blogs.reduce((maxLikes, current) => {
        return current.likes > maxLikes.likes 
            ? current 
            : maxLikes
    }, blogs[0])
}

const statsByAuthor = (blogs) => {
    return blogs.reduce((counts, blog) => {
        if (counts[blog.author]) {
            counts[blog.author].count += 1
            counts[blog.author].likes += blog.likes
        } else {
            counts[blog.author] = {author: blog.author, count: 1, likes: blog.likes}
        }
        return counts
    }, {})
}

const mostBlogs = (blogs) => {
    const AuthorCounts = statsByAuthor(blogs)

    let mostBlogsAuthor = null
    let mostBlogsCount = 0

    for (const author in AuthorCounts) {
        if (AuthorCounts[author].count > mostBlogsCount) {
            mostBlogsAuthor = author
            mostBlogsCount = AuthorCounts[author].count
        } 
    }
    return {
        author: mostBlogsAuthor,
        blogs: mostBlogsCount
    }
}

const mostLikes = (blogs) => {
    const AuthorCounts = statsByAuthor(blogs)

    let mostBlogsAuthor = null
    let mostBlogsLikes = 0

    for (const author in AuthorCounts) {
        if (AuthorCounts[author].likes > mostBlogsLikes) {
            mostBlogsAuthor = author
            mostBlogsLikes = AuthorCounts[author].likes
        } 
    }
    return {
        author: mostBlogsAuthor,
        likes: mostBlogsLikes
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}

