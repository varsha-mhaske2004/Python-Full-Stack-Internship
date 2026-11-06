
import { Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Students from './Students'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h2 className="logo">My React App</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/students">Students</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-page">
                <h1>Welcome to My React Application</h1>
                <p>This is the Home Page.</p>
              </div>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <div className="error-page">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/">Go Back Home</Link>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
