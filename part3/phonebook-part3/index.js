const express = require('express')
const app = express()

app.use(express.json())


let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendic",
        number: "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  const timeStamp = new Date().toString()
  res.send(`Phonebook has info for ${persons.length} people <br> <br> ${timeStamp}` )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
    
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(note => note.id !== id)
  
  response.status(204).end()
})

const generateID = () => {
  return Math.floor(Math.random() * 100)
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name){
    return response.status(400).json({
      error: 'name missing'
    })
  } 

  const found = persons.find(person => person.name === body.name)
  if (found) {
    return response.status(400).json({
      error: `name ${body.name} is already in use`
    })
  }
  
  const person = {
      name: body.name,
      number: body.number,
      id: generateID(),
  }
  persons = persons.concat(person)
  response.json(person)
  
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})