const readlineSync = require('readline-sync');


const tasks = [];


function showMenu() {
    console.log('\n============================');
    console.log('     TO-DO LIST MENU');
    console.log('============================');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');
}


function addTask() {
    const task = readlineSync.question('Enter task: ').trim();
    if (task.length === 0) {
        console.log('Task cannot be empty.');
        return;
    }
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}


function viewTasks() {
    if (tasks.length === 0) {
        console.log('Your to-do list is currently empty.');
        return;
    }
    console.log('\nYour Tasks:');
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
   }
function deleteTask() {
    if (tasks.length === 0) {
        console.log('No tasks available to delete.');
        return;
    }

    viewTasks();
    const taskNumber = readlineSync.questionInt('\nEnter task number to delete: ');
    const index = taskNumber - 1;

    if (index >= 0 && index < tasks.length) {
        const removedTask = tasks.splice(index, 1)[0];
        console.log(`Task "${removedTask}" has been removed.`);
    } else {
        console.log('Error: Invalid task number.');
    }
}


function main() {
    let running = true;

    while (running) {
        showMenu();
        const choice = readlineSync.questionInt('Enter your choice (1-4): ');

        switch (choice) {
            case 1:
                addTask();
                break;
            case 2:
                viewTasks();
                break;
            case 3:
                deleteTask();
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
