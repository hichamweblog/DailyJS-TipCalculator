// Dom Elements
const amountEl = document.querySelector('#amount');
const tipEl = document.querySelector('#tip');
const btnEl = document.querySelector('.btn');
const totalEl = document.querySelector('.total');

// Calculate The Total
function calculateTotal() {
	return (
		Number(amountEl.value) +
		(Number(amountEl.value) * Number(tipEl.value)) / 100
	);
}
// Print the Total
function printTotal() {
	totalEl.textContent = 'Total: $' + calculateTotal().toFixed(2);
}
// Handle the Event listener
btnEl.addEventListener('click', (e) => {
	e.preventDefault();
	printTotal();
});
