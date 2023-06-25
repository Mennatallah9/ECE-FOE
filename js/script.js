let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}



let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}


// Gpa Calculator

function calculate() {
   // Get selected grade value
   var gradeSelect = document.getElementById('grade');
   var gradeValue = parseFloat(gradeSelect.value);
 
   // Get credit hours
   var creditInput = document.getElementById('credit');
   var creditValue = parseInt(creditInput.value);
 
   // Validate inputs
   if (isNaN(gradeValue) || isNaN(creditValue) || creditValue <= 0) {
     alert('Please enter valid values for grade and credit hours.');
     return;
   }
 
   // Calculate grade points
   var gradePoints = gradeValue * creditValue;
 
   // Create a new row in the table
   var table = document.getElementById('table');
   var row = table.insertRow(-1);
 
   // Insert cells into the row
   var courseCell = row.insertCell(0);
   var creditCell = row.insertCell(1);
   var gradeCell = row.insertCell(2);
   var removeCell = row.insertCell(3);
 
   // Set cell values
   courseCell.innerHTML = 'Course';
   courseCell.classList.add('course-cell'); // Add the class for the course cell
   creditCell.innerHTML = creditValue;
   creditCell.classList.add('credit-cell'); // Add the class for the credit cell
   gradeCell.innerHTML = gradeValue;
   gradeCell.classList.add('grade-cell'); // Add the class for the grade cell
   removeCell.innerHTML = '<button onclick="removeCourse(this)">Remove</button>';
 
   // Clear input values
   gradeSelect.value = '4.0';
   creditInput.value = '';
 
   // Recalculate GPA
   calculateGPA();
 }
 
 function removeCourse(button) {
   var row = button.parentNode.parentNode;
   row.parentNode.removeChild(row);
 
   // Recalculate GPA
   calculateGPA();
 }
 
 function calculateGPA() {
   var table = document.getElementById('table');
   var rows = table.rows.length - 1; // Subtracting header row
   var totalGradePoints = 0;
   var totalCredits = 0;
 
   // Loop through each row (course)
   for (var i = 1; i <= rows; i++) {
     var row = table.rows[i];
     var credit = parseInt(row.cells[1].innerHTML);
     var grade = parseFloat(row.cells[2].innerHTML);
 
     totalGradePoints += grade * credit;
     totalCredits += credit;
   }
 
   // Calculate GPA
   var gpa = totalGradePoints / totalCredits;
 
   // Display GPA
   var gpaDisplay = document.getElementById('gpa');
   gpaDisplay.innerHTML = gpa.toFixed(2);
 }
 