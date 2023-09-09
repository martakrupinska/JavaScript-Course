let todoInput; // miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo; // info o braku treści zadania
let addBtn; // przycisk ADD
let ulList; //lista zadań
// let newTodo; // nowo dodane zadanie do listy

let popup; //
let popupInfo; // tekst w popupie jak się doda pusty tekst
let todoToEdit; //edytowany tekst zadania
let popupInput; // dodany tekst w popupie
let popupAddBtn; // przycisk Dodaj w popupie
let popupCloseBtn; // przycisk Anuluj w popupie

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');

	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
};

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTask);
	ulList.addEventListener('click', checkClick);
	popupCloseBtn.addEventListener('click', closePopup);
	popupAddBtn.addEventListener('click', changeTodoText);
	todoInput.addEventListener('keydown', enterKeyCheck);
};

const addNewTask = () => {
	if (todoInput.value !== '') {
		const newTodo = document.createElement('li');
		newTodo.textContent = todoInput.value;

		newTodo.setAttribute('data-id', 'test');
		ulList.appendChild(newTodo);

		createToolsArea(newTodo);

		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!';
	}
};

const createToolsArea = (newTodo) => {
	const divTools = document.createElement('div');
	divTools.classList.add('tools');
	newTodo.append(divTools);

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.innerHTML = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	divTools.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		editTodo(e);
	} else if (e.target.matches('.delete')) {
		deleteTodo(e);
	}
};

const editTodo = (e) => {
	popup.style.display = 'flex';
	todoToEdit = e.target.closest('li');
	popupInput.value = todoToEdit.firstChild.textContent;
};

const closePopup = () => {
	popup.style.display = 'none';
	popupInfo.textContent = '';
};

const changeTodoText = () => {
	if (popupInput.value !== '') {
		popupInfo.textContent = '';
		todoToEdit.firstChild.textContent = popupInput.value;

		popup.style.display = 'none';
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść!';
	}
};

const deleteTodo = (e) => {
	e.target.closest('li').remove();

	const allTodos = ulList.querySelectorAll('li');
	if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście.';
	}
};
const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		console.log('udało się');
		addNewTask();
	}
};

document.addEventListener('DOMContentLoaded', main);
