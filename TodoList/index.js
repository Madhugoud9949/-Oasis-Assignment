const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const taskItem = createTaskItem(taskText);
    pendingList.appendChild(taskItem);
    taskInput.value = "";
}

function createTaskItem(taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.onclick = function() {
        taskItem.classList.add("completed");
        completedList.appendChild(taskItem);
        taskItem.removeChild(completeButton);
    };

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = function() {
        const newText = prompt("Edit task:", taskItem.innerText);
        if (newText !== null && newText.trim() !== "") {
            taskItem.innerText = newText.trim();
        }
    };

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
}
