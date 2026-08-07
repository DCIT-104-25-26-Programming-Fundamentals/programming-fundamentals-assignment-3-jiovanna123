const readlineSync = require('readline-sync');


const students = [];


function calculateAverage(scores) {
    if (scores.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}


function showMenu() {
    console.log('\n================================');
    console.log('   STUDENT RECORD SYSTEM MENU');
    console.log('================================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');
}


function addStudent() {
    const name = readlineSync.question('Student name: ').trim();
    const id = readlineSync.questionInt('Student ID: ');
    const scoreCount = readlineSync.questionInt('How many scores? ');

    if (scoreCount <= 0) {
        console.log('Error: Score count must be a positive integer.');
        return;
    }

    const scores = [];
    for (let i = 0; i < scoreCount; i++) {
        const score = readlineSync.questionInt(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    const student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);
    console.log(`Student "${name}" added successfully.`);
}
function displayAllStudents() {
    if (students.length === 0) {
        console.log('No student records found.');
        return;
    }

    console.log('\n-----------------------------------------------------------------');
    console.log('ID\t\tName\t\t\tScores\t\tAverage');
    console.log('-----------------------------------------------------------------');

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const avg = calculateAverage(student.scores).toFixed(2);
        const scoresStr = student.scores.join(', ');
        console.log(`${student.id}\t${student.name.padEnd(20, ' ')}\t[${scoresStr}]\t${avg}`);
    }
    console.log('-----------------------------------------------------------------');
}

function calculateStudentAverage() {
    if (students.length === 0) {
        console.log('No student records available.');
        return;
    }

    const searchId = readlineSync.questionInt('Enter student ID: ');
    let foundStudent = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === searchId) {
            foundStudent = students[i];
            break;
        }
    }

    if (foundStudent) {
        const avg = calculateAverage(foundStudent.scores).toFixed(2);
        console.log(`${foundStudent.name}'s average score: ${avg}`);
    } else {
        console.log(`Error: Student with ID ${searchId} not found.`);
    }
}


function main() {
    let running = true;

    while (running) {
        showMenu();
        const choice = readlineSync.questionInt('Enter your choice (1-4): ');

        switch (choice) {
            case 1:
                addStudent();
                break;
            case 2:
                displayAllStudents();
                break;
            case 3:
                calculateStudentAverage();
                break;
            case 4:
                console.log('Goodbye!');
                running = false;
                break;
            default:
                console.log('Invalid choice. Please enter a number between 1 and 4.');
        }
    }
}


main();
