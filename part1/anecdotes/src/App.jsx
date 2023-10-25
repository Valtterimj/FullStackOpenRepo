import { useState } from 'react'
import React, { Component } from 'react'

const randomInteger = () => {
  const min = 1 
  const max = 8
  const randomInt = Math.floor(Math.random()* (max - min + 1))
  return(
    randomInt
  )
}

const mostVotes = (props) => {
  const votes = props
  let maxIndex = 0
  for (let i = 1; i < votes.length; i++){
    if (votes[i] > votes[maxIndex]) {
      maxIndex = i
    }
  }
  return maxIndex
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
   
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => {
    setSelected(randomInteger)
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
      </div>
      <div>
        <p>
        {anecdotes[selected]} <br />
        has {votes[selected]} votes
        </p>
      </div>
      <div>
        <button onClick={vote}>vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
      </div>
      <div>
        <p>
          {anecdotes[mostVotes(votes)]} <br />
          has {votes[mostVotes(votes)]} votes
        </p>
        
      </div>
      
    </div>
  )
}

export default App