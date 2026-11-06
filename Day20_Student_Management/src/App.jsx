
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
 const [students, setStudents] = useState([]);

useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/students/")
    .then((response) => {
      const formattedStudents = response.data.map((student) => ({
        id: student.id,
        name: student.student_name,
        email: student.email,
        course: student.course,
        age: student.age
      }));

      setStudents(formattedStudents);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

async function handleSubmit(e) {
  e.preventDefault();

  if (!name || !email || !course || !age) {
    alert("Please fill all fields");
    return;
  }

 if (editId) {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/students/${editId}/`,
      {
        student_name: name,
        email: email,
        course: course,
        age: Number(age)
      }
    );

    const updatedStudent = {
      id: response.data.id,
      name: response.data.student_name,
      email: response.data.email,
      course: response.data.course,
      age: response.data.age
    };

    setStudents(
      students.map((student) =>
        student.id === editId ? updatedStudent : student
      )
    );

    setEditId(null);
    alert("Student updated successfully!");

  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
    alert("Student could not be updated!");
  }
} 
  else {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/students/",
        {
          student_name: name,
          email: email,
          course: course,
          age: Number(age)
        }
      );

      const newStudent = {
        id: response.data.id,
        name: response.data.student_name,
        email: response.data.email,
        course: response.data.course,
        age: response.data.age
      };

      setStudents([...students, newStudent]);
      alert("Student added successfully!");
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      alert("Student could not be added!");
    }
  }

  clearForm();
}

  function clearForm() {
    setName("");
    setEmail("");
    setCourse("");
    setAge("");
  }

  function handleEdit(student) {
    setEditId(student.id);
    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
    setAge(student.age);
  }

  async function handleDelete(id) {
  if (window.confirm("Are you sure you want to delete?")) {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/students/${id}/`
      );

      setStudents(
        students.filter((student) => student.id !== id)
      );

      alert("Student deleted successfully!");

    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      alert("Student could not be deleted!");
    }
  }
}


  return (
    <div className="container">
      <h1>Student Management System</h1>
      <p className="subtitle">
        Manage student records easily
      </p>

      <div className="form-box">
        <h2>{editId ? "Update Student" : "Add Student"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button type="submit">
            {editId ? "Update Student" : "Add Student"}
          </button>
        </form>
      </div>

      <div className="table-box">
        <h2>Student Records</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.age}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {students.length === 0 && (
          <p>No student records found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
