// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

    localStorage.setItem("nextID", JSON.stringify(crypto.randomUUID()));

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

            if(taskList[i].status === "to-do"){

                todoList.append(createTaskCard(taskList[i]));

            }

            else if(taskList[i].status === "in-progress"){

                inProgressList.append(createTaskCard(taskList[i]));

            }else if(taskList[i].status === "done"){

                doneList.append(createTaskCard(taskList[i]));

            }
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

const task = {

    id: generateTaskId(),

    title: $("#taskTitle").val().trim(),

    description: $("#taskDescription").val().trim(),

    dueDate: $("#taskDueDate").val(),

    status: "to-do"

}

taskList.push(task);

localStorage.setItem("tasks",JSON.stringify(taskList));

renderTaskList();

$("#taskTitle").val("");

$("#taskDescription").val("");

$("#taskDueDate").val("");

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

    const taskID = ui.draggable.dataset.taskId;

    const newStatus = event.target.id

    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == parseInt(taskID)){
            taskList[i].status = newStatus;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    renderTaskList();

    $("#taskForm").on("submit", handleAddTask);

    $(".task-list").on("click", ".delete", handleDeleteTask);

    $(".lane").draggable({

        accept: ".draggable",

        drop: handleDrop(),

    });

    $("#due-date").datepicker();

});
