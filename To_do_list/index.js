const add = document.getElementById('add');
const input = document.getElementById('task');
const list = document.getElementById('list');

// Load saved tasks from localStorage on page load
window.onload = function() {
    loadTasks();
};

// When the add button is clicked
add.addEventListener("click", function() {
    const task = input.value;
    if (task) {
        const taskElement = document.createElement('li');
        taskElement.innerText = task;
        list.appendChild(taskElement);
        input.value = "";

        // Create and add delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.style.marginLeft = "70%";
        taskElement.appendChild(deleteButton);

        // When delete button is clicked
        deleteButton.addEventListener("click", function() {
            taskElement.remove();
            saveTasks(); // Save after deleting
        });

        saveTasks(); // Save after adding a task
    }
});

// Mark task as completed when clicked
list.addEventListener("click", function(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.textDecoration = "line-through";
        event.target.style.color = "red";
        saveTasks(); // Save after marking task
    }
});

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    const taskElements = list.getElementsByTagName('li');
    for (let taskElement of taskElements) {
        tasks.push(taskElement.innerText.replace('Delete', '').trim());
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.innerText = task;
            list.appendChild(taskElement);

            // Create and add delete button
            const deleteButton = document.createElement('button');
            deleteButton.innerText = "Delete";
            deleteButton.style.marginLeft = "70%";
            taskElement.appendChild(deleteButton);

            // When delete button is clicked
            deleteButton.addEventListener("click", function() {
                taskElement.remove();
                saveTasks(); // Save after deleting
            });
        });
    }
}
