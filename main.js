let todoInput; //place, where the user enters the task content
let alertInfo; // information about the lack of tasks / the need for text
let addBtn; // the ADD button / adds items to the list
let ulList; // our to-do list, <ul></ul> tags
let newTask; //newly added LI, new task
let popup; //downloaded popup
let popupInfo; //popup alert, when empty text is added
let editedTodo; // edited Todo
let popupInput; // text typed into input in the popup
let addPopupBtn; // "ADD" button in popup
let closeTodoBtn; // button to close the popup
let idNumber = 0;


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
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popupInfo'); 
    popupInput = document.querySelector('.popupInput'); 
    addPopupBtn = document.querySelector('.accept'); 
    closeTodoBtn = document.querySelector('.cancel'); 
};

//add event listeners
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
    ulList.addEventListener('click', checkClick);
    closeTodoBtn.addEventListener('click', closePopup);
    addPopupBtn.addEventListener('click', changeTodo);
 };

//adds new tasks
const addNewTask = () => {
    if (todoInput.value !== '') {
        idNumber++;
        newTask = document.createElement('li');
        newTask.innerText = todoInput.value;
        newTask.setAttribute('id', `todo-${idNumber}`);
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
        editTask(e);
    } else if (e.target.closest('button').className === 'delete') {
        deleteTask(e);
    }
};

const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    editedTodo = document.getElementById(oldTodo);  
    popupInput.value = editedTodo.firstChild.textContent;

    popup.style.display = 'flex';
};

const changeTodo = () => {
    if (popupInput.value !== '') {
        editedTodo.firstChild.textContent = popupInput.value;
        popup.style.display = 'none';
        popupInfo.innerText = '';
    } else {
        popupInfo.innerText = 'You need to provide some content!';
    };
};

const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.innerText = '';
}

const deleteTask = (e) => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();
}   

document.addEventListener('DOMContentLoaded', main);