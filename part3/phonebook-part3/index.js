require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const Person = require('./models/person')

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}


let persons = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456'
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '39-44-5323523'
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '12-43-234345'
	},
	{
		id: 4,
		name: 'Mary Poppendic',
		number: '39-23-6423122'
	}
]

app.get('/api/persons', (req, res) => {
	Person.find({}).then(notes => {
		res.json(notes)
	})
})

app.get('/info', (req, res) => {
	const timeStamp = new Date().toString()
	res.send(`Phonebook has info for ${persons.length} people <br> <br> ${timeStamp}` )
})

app.get('/api/persons/:id', (request, response) => {
	Person.findById(request.params.id)
		.then(person => {
			if (person) {
				response.json(person)
			} else {
				response.status(404).end()
			}
		})
		.catch(error => {
			console.log(error)
			response.status(400).send({ error: 'malformatted id' })
		})
})

app.delete('/api/persons/:id', (request, response) => {
	Person.findByIdAndDelete(request.params.id)
		.then(result => {
			response.status(204).end()
		})
		.catch(error => next(error))
})

const generateID = () => {
	return Math.floor(Math.random() * 100)
}

app.post('/api/persons', (request, response, next) => {
	const body = request.body

	if (body.name === undefined) {
		return response.status(400).json({ error: 'content missing' })
	}

	const person = new Person({
		name: body.name,
		number: body.number,
	})

	person.save().then(savedPerson => {
		response.json(savedPerson)
	})
		.catch(error => next(error))
})

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' })
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message })
	}

	next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})