const Header = ({ course }) => <h1>{course.name}</h1>


const Total = ({ parts }) => {
  const total = parts.reduce( (sum, part)=> sum + part.exercises,0)
    
  return(
    <p> 
      <strong>Total of {total} exercises</strong>
      </p>
  );
}

const PartList= ({ parts }) => {
  return (
    <div> 
      {parts.map((part) => 
        <p key={part.id}>{`${part.name} ${part.exercises}`}</p>
      )}
    </div>
  );
}

const Course = ( {course} ) => {
  const parts = course.parts
  return(
    <div>
      <Header course={course}/>
      <PartList parts={parts} />
      <Total parts={parts} />
    </div>
    
  )
}

export default Course 