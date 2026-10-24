
// Task 1: Create an Interactive Webpage
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").textContent =
        "Button clicked successfully!";
});

// Task 2: Form Submission Event
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;

    document.getElementById("result").textContent =
        "Welcome, " + name + "!";
});


 // Task 3: Display Dynamic Data

document.getElementById("showDetails").addEventListener("click", function() {
    let name = document.getElementById("studentName").value;

    if (name === "") {
        document.getElementById("details").textContent =
            "Please enter student name first!";
    } else {
        document.getElementById("details").textContent =
            "Student Name: " + name;
    }
});


 // Task 4: Array Filtering and Searching

let students = ["Varsha", "Adi", "Priya", "Riya", "Amit"];

document.getElementById("searchBtn").addEventListener("click", function() {
    let search = document.getElementById("searchName").value.toLowerCase();

    let result = students.filter(function(name) {
        return name.toLowerCase().includes(search);
    });

    document.getElementById("studentList").textContent =
        result.length > 0 ? result.join(", ") : "No student found!";
});

document.getElementById("showAllBtn").addEventListener("click", function() {
    document.getElementById("studentList").textContent =
        students.join(", ");
});


 // Task 5: Asynchronous Operations and API

document.getElementById("loadData").addEventListener("click", async function() {

    document.getElementById("apiResult").textContent = "Loading...";

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        let data = await response.json();

        document.getElementById("apiResult").textContent =
            "Title: " + data.title;

    } catch (error) {
        document.getElementById("apiResult").textContent =
            "Error loading data!";
    }

});
