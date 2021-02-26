let todoInput; //place, where the user enters the task content
let alertInfo; // information about the lack of tasks / the need for text
let addBtn; // the ADD button / adds items to the list
let ulList; // our to-do list, <ul></ul> tags
let newTask; //newly added LI, new task

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

//we download our items
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todoInput');
    alertInfo = document.querySelector('alertInfo');
    addBtn = document.querySelector('.addBtn');
    ulList = document.querySelector('.todoList ul');
};

//add event listeners
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
 };

const addNewTask = () => {
    if (todoInput.value !== '') {
        newTask = document.createElement('li');
        newTask.innerText = todoInput.value;
        ulList.appendChild(newTask);

        todoInput.value = '';
        alertInfo.innerText = '';
    } else {
        alertInfo.innerText = 'Enter the content of the task!'
    }
};

document.addEventListener('DOMContentLoaded', main);