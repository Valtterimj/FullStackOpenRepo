import { useState, useEffect} from 'react'
import axios from 'axios'
import Person from './components/Person'

const App = () => {
  const [persons, setPerson] = useState([])
  const [newName, setNewName] = useState('') 
  const [newNumber, setNewNumber] = useState('') 
  const [newSearch, setNewSearch] = useState('') 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPerson(response.data)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    if (!findName(newName)){
      const noteObject = {
        name: newName,
        number: newNumber
      }
      setPerson(persons.concat(noteObject))
      setNewName('')
    } else {
      alert(`${newName} is already added to phonebook`)
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
      {console.log(persons)}
      {persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase())).map(person => (
        <div key={person.name}>
         <Person person={person} />
         <p></p>
         </div>
      ))}
    </div>
  )
}

export default App