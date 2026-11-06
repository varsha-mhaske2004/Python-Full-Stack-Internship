# Student Management System

## Project Introduction

The Student Management System is a Full Stack Web Application developed using React and Django REST Framework.

This application helps users manage student records easily. Users can add, view, update, and delete student details.

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Axios

### Backend
- Python
- Django
- Django REST Framework

### Database
- SQLite

## Features

1. Add new student records.
2. Display all student records.
3. Update existing student details.
4. Delete student records.
5. Store student information in the database.
6. Connect React frontend with Django backend using REST APIs.

## Student Details

- Student ID
- Student Name
- Email
- Course
- Age

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students/` | Retrieve all students |
| POST | `/api/students/` | Add a new student |
| GET | `/api/students/1/` | Retrieve a student by ID (1 is an example) |
| PUT | `/api/students/1/` | Update student details |
| DELETE | `/api/students/1/` | Delete a student |

## How to Run the Project

### Backend Setup

1. Open the Django backend folder.
2. Activate the virtual environment.
3. Run the following command:

```bash
python manage.py runserver
```

Backend URL: `http://127.0.0.1:8000/`

### Frontend Setup

1. Open the React project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the React application:

```bash
npm run dev
```

Frontend URL: `http://localhost:5173/`

## Conclusion

The Student Management System demonstrates full-stack application development using React, Django REST Framework, and SQLite. It performs CRUD operations through REST APIs and stores student records in the database.