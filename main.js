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
    alertInfo = document.querySelector('.alertInfo');
    addBtn = document.querySelector('.addBtn');
    ulList = document.querySelector('.todoList ul');
};

//add event listeners
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
    ulList.addEventListener('click', checkClick);
 };

//adds new tasks
const addNewTask = () => {
    if (todoInput.value !== '') {
        newTask = document.createElement('li');
        newTask.innerText = todoInput.value;
        ulList.appendChild(newTask);

        todoInput.value = '';
        alertInfo.innerText = '';
        createToolsArea();
    } else {
        alertInfo.innerText = 'Enter the content of the task!';
    }
};

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT'

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
};

const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    } else if (e.target.closest('button').className === 'edit') {
        console.log('edit');
    } else if (e.target.closest('button').className === 'delete') {
        console.log('delete');
    }
};

document.addEventListener('DOMContentLoaded', main);