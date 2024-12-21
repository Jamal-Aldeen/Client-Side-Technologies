var taskId = 1;
var editingId = null;
var completedCount = 0;

function handleAddOrUpdate() {
    var taskInput = document.getElementById("task-name");
    var taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Task name cannot be empty!");
        return;
    }

    if (editingId !== null) {
        updateTask(editingId, taskName);
    } else {
        addTask(taskName);
    }

    taskInput.value = "";
}

function addTask(name) {
    var taskBody = document.getElementById("task-body");

    var row = document.createElement("tr");
    row.setAttribute("data-id", taskId);

    var idCell = document.createElement("td");
    idCell.textContent = taskId;

    var nameCell = document.createElement("td");
    nameCell.textContent = name;

    var actionsCell = document.createElement("td");

   
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "complete-checkbox";
    checkbox.setAttribute("onclick", "markComplete(this, " + taskId + ")");

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "update-btn";
    editButton.setAttribute("onclick", "editTask(" + taskId + ", '" + name + "')");

 
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.setAttribute("onclick", "deleteTask(" + taskId + ")");

    actionsCell.appendChild(checkbox);
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(actionsCell);

    taskBody.appendChild(row);

    taskId++;
}

function editTask(id, name) {
    var taskInput = document.getElementById("task-name");
    var addTaskBtn = document.getElementById("add-task-btn");

    editingId = id;
    taskInput.value = name;
    addTaskBtn.textContent = "Update Task";
    addTaskBtn.className = "update-btn";
}

function updateTask(id, newName) {
    var rows = document.getElementById("task-body").getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        if (parseInt(rows[i].getAttribute("data-id")) === id) {
            rows[i].children[1].textContent = newName;
        }
    }

    var addTaskBtn = document.getElementById("add-task-btn");
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.className = "add-btn";
    editingId = null;
}


function markComplete(checkbox, id) {
    var rows = document.getElementById("task-body").getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        if (parseInt(rows[i].getAttribute("data-id")) === id) {
            if (checkbox.checked) {
                rows[i].children[1].classList.add("completed");
                completedCount++;
            } else {
                rows[i].children[1].classList.remove("completed");
                completedCount--;
            }
            updateCounter();
        }
    }
}

function updateCounter() {
    var counter = document.getElementById("completed-counter");
    counter.textContent = "Task Completed Today: " + completedCount;
}


function deleteTask(id) {
    var taskBody = document.getElementById("task-body");
    var rows = taskBody.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        if (parseInt(rows[i].getAttribute("data-id")) === id) {
            taskBody.removeChild(rows[i]);
            break;
        }
    }
    recalculateIds();
}

function recalculateIds() {
    var taskBody = document.getElementById("task-body");
    var rows = taskBody.getElementsByTagName("tr");

    taskId = 1; 
    for (var i = 0; i < rows.length; i++) {
        rows[i].setAttribute("data-id", taskId);
        rows[i].children[0].textContent = taskId;

        rows[i].children[2].children[0].setAttribute("onclick", "markComplete(this, " + taskId + ")");
        rows[i].children[2].children[1].setAttribute("onclick", "editTask(" + taskId + ", '" + rows[i].children[1].textContent + "')");
        rows[i].children[2].children[2].setAttribute("onclick", "deleteTask(" + taskId + ")");

        taskId++;
    }
}
