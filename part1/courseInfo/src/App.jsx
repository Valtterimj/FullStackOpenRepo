
const Header = (props) => {
  return (
    <>
      <p>{props.course}</p>
    </>
  )
}

const Part = (props) => {
  return(
  <>
  <p>{props.part} {props.exercise}</p>
  </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'Sate of a component'
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3}/>
      <Total ex1={exercise1} ex2={exercise2} ex3={exercise3} />
    </div>
  )
}

export default App