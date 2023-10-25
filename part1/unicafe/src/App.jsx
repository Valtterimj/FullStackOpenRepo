import { useState } from 'react'

  const Button = (props) => {
    const { handleClick, text } = props
    return(
      <button onClick={handleClick}>
      {text}
      </button>
    )
    
    }
    const StaticLine = (props) => {
      console.log(props)
      const {text, value} = props
      return(
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
          
      )
    }

    const Statistics = (props) => {
      const {good, neutral, bad} = props
      const all = good + neutral +bad
      const average = (good - bad) / all
      const positive = good / all * 100
      if (all === 0) {
        return(
          <p>
            no feedback given
          </p>
        )
      } 
      return(
        <div>
          <table>
            <tbody>
              <StaticLine text="good" value={good}/> 
              <StaticLine text="neutral" value={neutral}/>
              <StaticLine text="bad" value={bad}/> 
              <StaticLine text="all" value={all}/>
              <StaticLine text="average" value={average}/> 
              <StaticLine text="positive" value={positive + '%'}/>
            </tbody>
          </table>
        </div>
      )
    }

  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const handleGoodClick = () => {
      setGood(good + 1)
    }
  
    const handleNeutralClick = () => {
      setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
      setBad(bad + 1)
    }

    return (
      <div>
        <div>
          <h1>give feedback</h1>
        </div>
        <div>
          <Button handleClick={handleGoodClick} text='good'/>
          <Button handleClick={handleNeutralClick} text='neutral'/>
          <Button handleClick={handleBadClick} text='bad'/>
        </div>
        <div>
          <h2>statistics</h2>
        </div>
        <div>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      </div>
    )
  }

export default App