catchAdvice().catch(error => {
	console.log(error);
	console.error(error);
});

async function catchAdvice() {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	document.getElementById("advice").innerText = data.slip.advice;
}