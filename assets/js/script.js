// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let task = localStorage.setItem("nextID", JSON.stringify(crypto.randomUUID()));
}

// Todo: create a function to create a task card
function createTaskCard(task) {
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    if(taskList === null){
        taskList = [];
    }
    else{
        const todoList = $("todo-cards");
        todoList.empty();

        const inProgressList = $("#in-progress-cards")
        inProgressList.empty();

        const doneList = $("#done-cards");
        doneList.empty();

        for(let i = 0; i < taskList.length, i++){
            if(taskList[i].status === "to-do"){
                todoList.append(createTaskCard(taskList[i]));
            }
        }
    }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
    $("#add-task").on("click", handleAddTask);
    $(".task-list").on("click", ".delete", handleDeleteTask);
    $(".lane").droppable({
        drop: handleDrop();
    });
    $("#due-date").datepicker();
});
