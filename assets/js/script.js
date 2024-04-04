// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    if(!nextId){
        nextId = 1;
    }else {
        nextId += 1;
    }
    localStorage.setItem("nextID", JSON.stringify(nextId));
    

}

// Todo: create a function to create a task card
function createTaskCard(task) {
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    if(taskList === null){
        taskList = [];
    }else{
        const todoList = $("todo-cards");
        todoList.empty();

        const inProgressList = $("#in-progress-cards")
        inProgressList.empty();

        const doneList = $("#done-cards");
        doneList.empty();

        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].status === "to-do-cards"){
                todoList.append(createTaskCard(taskList[i]));
            }
            // else if(taskList[i].status === "in-progress-cards"){
            //     inProgressList.append(createTaskCard(taskList[i]));
            // }else(taskList[i].status === "done-cards"){
            //     doneList.append(createTaskCard(taskList[i]));
            // }
        }
    }
    $("draggable").draggable({
        opacity: 1,
        zIndex: 100,
        helper:function(event){
            let original;
            if($(event.target).hasClass("ui-draggable")){
                original = $(event.target);
            }else {
                original = $(event.target).closest(".ui-draggable");
            }
            return original.clone().css({
                maxWidth: original.outerWidth(),
            });
        }    
});
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
event.preventDefault();
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
    $("#taskForm").on("submit", handleAddTask);
    $(".task-list").on("click", ".delete", handleDeleteTask);
    $(".lane").droppable({
        drop: handleDrop(),
    });
    $("#due-date").datepicker();
});
