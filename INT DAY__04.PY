# Day 04 - Student Records
#Store student records
students = [
    {"id": 101, "name": "Varsha", "marks": 85},
    {"id": 102, "name": "Adi", "marks": 90},
    {"id": 103, "name": "Priya", "marks": 78},
    {"id": 104, "name": "Riya", "marks": 95}
]

print("Student Records")

for student in students:
    print(student)

# Search Student by ID or Name

search_value = input("Enter Student ID or Name: ")

found = False

for student in students:
    if (str(student["id"]) == search_value or
            student["name"].lower() == search_value.lower()):
        print("Student Found!")
        print(student)
        found = True
        break

if not found:
    print("Student not found!")

# Sort Students by Name

print("\nStudents Sorted by Name:")

sorted_by_name = sorted(students, key=lambda student: student["name"])

for student in sorted_by_name:
    print(student)


# Sort Students by Marks

print("\nStudents Sorted by Marks:")

sorted_by_marks = sorted(students,key=lambda student: student["marks"]
)

for student in sorted_by_marks:

    print(student)

# Exception Handling

try:
    student_id = int(input("Enter Student ID: "))
    marks = int(input("Enter Student Marks: "))

    if marks < 0 or marks > 100:
        print("Marks must be between 0 and 100.")
    else:
        print("Student ID:", student_id)
        print("Marks:", marks)

except ValueError:
    print("Invalid input! Please enter numbers only.")


# Write Student Records to File

with open("students.txt", "w") as file:
    for student in students:
        file.write(
            f'{student["id"]},'
            f'{student["name"]},'
            f'{student["marks"]}\n'
        )

print("Student records saved successfully!")

# Read Student Records from File

print("\nStudent Records from File:")

with open("students.txt", "r") as file:
    for line in file:
        print(line.strip())