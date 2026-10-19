
# Day 03: Object-Oriented Programming

# Program 1: Student Class

class Student:
    def __init__(self, name, roll_no, marks):
        self.name = name
        self.roll_no = roll_no
        self.marks = marks

    def display(self):
        print("Student Name:", self.name)
        print("Roll Number:", self.roll_no)
        print("Marks:", self.marks)


s1 = Student("Varsha", 1, 85)

s1.display()


# Program 2: Employee Class

class Employee:
    def __init__(self, name, emp_id, salary):
        self.name = name
        self.emp_id = emp_id
        self.salary = salary

    def display(self):
        print("Employee Name:", self.name)
        print("Employee ID:", self.emp_id)
        print("Salary:", self.salary)


e1 = Employee("Adi", 101, 25000)

e1.display()


# Program 3: Inheritance

class Student:
    def __init__(self, name):
        self.name = name

    def display_name(self):
        print("Student Name:", self.name)


class CollegeStudent(Student):
    def __init__(self, name, course):
        super().__init__(name)
        self.course = course

    def display_course(self):
        print("Course:", self.course)


s1 = CollegeStudent("Varsha", "Computer Science")

s1.display_name()
s1.display_course()


# Program 4: Encapsulation

class StudentMarks:
    def __init__(self, name, marks):
        self.name = name
        self.__marks = marks

    def display(self):
        print("Student Name:", self.name)
        print("Marks:", self.__marks)

    def update_marks(self, marks):
        if 0 <= marks <= 100:
            self.__marks = marks
            print("Marks updated successfully")
        else:
            print("Invalid marks")


s1 = StudentMarks("Varsha", 85)

s1.display()

s1.update_marks(90)

s1.display()



# Student Management Console Application

class Student:
    def __init__(self, student_id, name, marks):
        self.student_id = student_id
        self.name = name
        self.__marks = marks

    def display(self):
        print("Student ID:", self.student_id)
        print("Name:", self.name)
        print("Marks:", self.__marks)

    def get_marks(self):
        return self.__marks


students = []

while True:
    print("\n--- Student Management System ---")
    print("1. Add Student")
    print("2. Display All Students")
    print("3. Search Student by ID")
    print("4. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        student_id = input("Enter Student ID: ")
        name = input("Enter Student Name: ")
        marks = int(input("Enter Marks: "))

        student = Student(student_id, name, marks)
        students.append(student)

        print("Student added successfully!")

    elif choice == "2":
        if len(students) == 0:
            print("No student records found.")
        else:
            for student in students:
                student.display()
                print("----------------")

    elif choice == "3":
        search_id = input("Enter Student ID to search: ")
        found = False

        for student in students:
            if student.student_id == search_id:
                student.display()
                found = True
                break

        if not found:
            print("Student not found.")

    elif choice == "4":
        print("Thank you!")
        break

    else:
        print("Invalid choice. Please try again.")
