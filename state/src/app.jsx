import { Course } from './Course'
import './app.css'
import { useState }from 'react'


function randomCourseGenerator() {
  const courseArray = ['Angular', 'Bootstrap', 'CSharp', 'KompleWen']
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

export function App() {
  const [course, setCourse] = useState([])

  const handleClick = () => {
    setCourse([...course, randomCourseGenerator()])
  }
  const courseList = course.map((course, index) => {
    return <Course key={index} courseName={course}/>
  })

  return (
    <>
      <button onClick={handleClick}>Add a Course</button>
      <div>
        {courseList}
      </div>
    </>
  )
}
