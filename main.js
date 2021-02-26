let $todoInput; //place, where the user enters the task content
let $alertInfo // information about the lack of tasks / the need for text
let $addBtn; // the ADD button / adds items to the list
let $ulList; // our to-do list, <ul></ul> tags

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

// we download our items
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
};

//add event listeners
const prepareDOMEvents = () => { };

document.addEventListener('DOMContendLoaded', main);