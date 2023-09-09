const convert = document.querySelector('.conv');
const reset = document.querySelector('.reset');
const change = document.querySelector('.change');
const result = document.querySelector('.result');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const input = document.querySelector('#converter');
let resultValue;
let converter;

const ConvertCelsiusToFarenheit = () => {
	resultValue = input.valueAsNumber * 1.8 + 32;
	result.textContent = `${input.value} °C to ${resultValue.toFixed(2)} °F`;
};
const ConvertFarenheitToCelsius = () => {
	resultValue = (input.valueAsNumber - 32) / 1.8;
	result.textContent = `${input.value} °F to ${resultValue.toFixed(2)} °C`;
};
const convertFnk = () => {
	if (!input.valueAsNumber) {
		return;
	}
	if (one.textContent === '°C') {
		ConvertCelsiusToFarenheit();
	} else {
		ConvertFarenheitToCelsius();
	}
};

const resetInputValue = () => {
	if (input.value) {
		result.textContent = '';
		input.value = '';
	}
};
const changeConverter = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F';
		two.textContent = '°C';
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
	}
};

convert.addEventListener('click', convertFnk);
reset.addEventListener('click', resetInputValue);
change.addEventListener('click', changeConverter);
