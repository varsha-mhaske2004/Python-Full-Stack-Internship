
import { useEffect, useState } from 'react'
import axios from 'axios'

function Students() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/students/')
      .then(response => {
        setStudents(response.data)
      })
      .catch(error => {
        console.log('Error:', error)
      })
  }, [])

  return (
    <div>
      <h1>Students List</h1>

      {students.map(student => (
        <div key={student.id}>
          <h3>{student.student_name}</h3>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Students
