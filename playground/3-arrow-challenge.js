//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [
        {
            text: 'Grocery shopping',
            completed: true
        },
        {
            text: 'Clean yard',
            completed: false
        },
        {
            text: 'Film course',
            completed: false
        }
    ],
    getTasksToDo() {
        // Filter tasks to return only those that are not completed
        return this.tasks.filter((task) => task.completed === false);
    }
}

// Log the tasks that are not completed
console.log(tasks.getTasksToDo());
