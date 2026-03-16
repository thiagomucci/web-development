const increment = document.getElementById('menos');
const decrement = document.getElementById('mais');
const resetar = document.getElementById('reset');
const count = document.getElementById('contador');

let valor = 0;

increment.addEventListener('click', () => {valor++; count.innerText = valor});
decrement.addEventListener('click', () => {valor--; count.innerText = valor;});
resetar.addEventListener('click', () => {valor = 0; count.innerText = valor;});
