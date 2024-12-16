var taskId = 1;
var editingId = null;

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
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "update-btn";
    editButton.setAttribute("onclick", "editTask(" + taskId + ", '" + name + "')");

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.setAttribute("onclick", "deleteTask(" + taskId + ")");

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

function deleteTask(id) {
    var taskBody = document.getElementById("task-body");
    var rows = taskBody.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        if (parseInt(rows[i].getAttribute("data-id")) === id) {
            taskBody.removeChild(rows[i]);
            break;
        }
    }

    // Recalculate IDs
    recalculateIds();
}

function recalculateIds() {
    var taskBody = document.getElementById("task-body");
    var rows = taskBody.getElementsByTagName("tr");

    taskId = 1; // Reset taskId
    for (var i = 0; i < rows.length; i++) {
        rows[i].setAttribute("data-id", taskId);
        rows[i].children[0].textContent = taskId;
        rows[i].children[2].children[0].setAttribute("onclick", "editTask(" + taskId + ", '" + rows[i].children[1].textContent + "')");
        rows[i].children[2].children[1].setAttribute("onclick", "deleteTask(" + taskId + ")");
        taskId++;
    }
}
