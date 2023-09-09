const burgerBtn = document.querySelector('.burger');
const barsBtn = document.querySelector('.fa-bars');
const timesBtn = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');

const showMenu = () => {
	nav.classList.toggle('active');
	burgerBtn.classList.toggle('active');
	timesBtn.classList.toggle('hide');
	barsBtn.classList.toggle('hide');
};

burgerBtn.addEventListener('click', showMenu);
