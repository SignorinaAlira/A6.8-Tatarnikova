let btn1 = document.querySelector('.j-btn1');
let btn3 = document.querySelector('.j-btn3');
let btn7 = document.querySelector('.j-btn7');
let progressbar = document.querySelector('.j-progress');
let progressValue = 0;

btn1.addEventListener('click', changeProgress);
btn3.addEventListener('click', changeProgress);
btn7.addEventListener('click', changeProgress);

function changeProgress(event) {
	if (event.target.innerText == "+1%") {
		progressValue = progressValue + 1;
	} else {
		if (event.target.innerText == "+3%") {
			progressValue = progressValue + 3;
		} else {
			progressValue = progressValue + 7;
		}
	};
	if (progressValue >= 100) {
		progressbar.setAttribute('style', ('width:100%'));
		progressbar.innerText = "100%";
	} else {
		progressbar.setAttribute('style', ('width:' + progressValue + "%"));
		progressbar.innerText = progressValue + "%";
	};
};