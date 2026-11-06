
import { useState } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  alert('Registration Successful!');
};

  return (
    <form onSubmit={handleSubmit}>
    <div classname="container">
      <h1>Student Registration Form</h1>

      <label>Student Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />

      <br /><br />

      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} required
      />

      <br /><br />

      <label>Course:</label>
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)} required
      >
        <option value="">Select Course</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="React">React</option>
      </select>

      {submitted && (
  <div>
    <h2>Registered Student Details</h2>
    <p>Student Name: {studentName}</p>
    <p>Email: {email}</p>
    <p>Course: {course}</p>
  </div>
)}
<br/> <br/>
      <button type="submit">Register</button>
    
    </div>
    </form>
  );
}

export default App;
