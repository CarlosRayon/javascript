/* La declaro como global para eliminar el setInterval cada vez pulso botón DELETE
y evitar conflictos con esta función */
var interval = '';
const btns = document.querySelectorAll('[data-li]');

for (const btn of btns) {
	btn.addEventListener('click', timeDelete);
}

document.querySelector('#iconDelete').addEventListener('click', function () {
	hiddenAlertDelete();
});

function showAlertDelete() {
	const alertDelete = document.querySelector('#alertDelete');
	alertDelete.classList.remove('hiddenElement');
	alertDelete.classList.add('showElement');
}
function hiddenAlertDelete() {
	const alertDelete = document.querySelector('#alertDelete');
	alertDelete.classList.remove('showElement');
	alertDelete.classList.add('hiddenElement');
}

function showAlertReverse() {
	const alertDelete = document.querySelector('#alertReverse');
	alertDelete.classList.remove('hiddenElement');
	alertDelete.classList.add('showElement');
}
function hiddenAlertReverse() {
	const alertDelete = document.querySelector('#alertReverse');
	alertDelete.classList.remove('showElement');
	alertDelete.classList.add('hiddenElement');
}

function reverseDelete(interval) {
	const alertReverse = document.querySelector('#alertReverse');
	alertReverse.addEventListener('click', function () {
		clearInterval(interval);
		hiddenAlertReverse();
	});
}

function timeDelete() {
	const idList = this.dataset.li;
	const li = document.querySelector(`#${idList}`);
	const time = document.querySelector('.alert__time');
	const btnDelete = document.querySelector('#btnDelete');
	showAlertDelete();
	time.innerHTML = 5;
	btnDelete.addEventListener('click', () => {
		hiddenAlertDelete();
		showAlertReverse();
		clearInterval(interval);
		interval = setInterval(function () {
			time.innerHTML = time.innerHTML - 1;
			if (time.innerHTML == -1) {
				clearInterval(interval);
				hiddenAlertReverse();
				li.remove();
			}
		}, 1000);
		reverseDelete(interval);
	});
}
