import { useState, useEffect} from 'react'
import axios from 'axios'
import Person from './components/Person'
import personServices from './services/persons'
import Notification from './components/Message'

const App = () => {
  const [persons, setPerson] = useState([])
  const [newName, setNewName] = useState('') 
  const [newNumber, setNewNumber] = useState('') 
  const [newSearch, setNewSearch] = useState('') 
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPesron => {
        setPerson(initialPesron)
      })
    },[])

  const addNote = (event) => {
    event.preventDefault()
    if (!findName(newName)){
      const noteObject = {
        name: newName,
        number: newNumber
      }

      personServices
        .create(noteObject)
        .then(returnedPerson => {
          setPerson(persons.concat(returnedPerson))
          setNewName('')
        })
        setSuccessMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    
  }

  const handleDelete = (personToDelete) => {
    const shouldDelete = window.confirm(`Are you sure you want to delte ${personToDelete.name}?`)
    
    if (shouldDelete) {
      personServices
      .deletePerson(personToDelete.id)
      setPerson((persons) => persons.filter(person => person !== personToDelete))
    } 

  }

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const findName = (name) => {
    let taken = false
    persons.forEach(person => {
      if (person.name === name) {
        taken = true
      }
    });  
      return(
        taken
      )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <div>
        <p>filter shown with< input type="text" value={newSearch} onChange={handleSearchChange}/></p>
      </div>
      
      <h3>Add a new</h3>
      <form onSubmit={addNote}>
        <div>name: 
          <input value={newName}
                  onChange={handleNoteChange}/>
        </div>
        <div>number:
          <input value={newNumber}
                  onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div> 
      </form> 
      <h3>Numbers</h3>
      {persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase())).map(person => (
        <div key={person.name}>
         <Person person={person}/> 
         <button onClick={() => handleDelete(person)}>delete</button>
         <p></p>
         </div>
      ))}
    </div>
  )
}

export default App