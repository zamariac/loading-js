var buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', loadText);

function loadText(){
	buttonElement.innerHTML = 'Loading...';

}

setTimeout(function() {
		buttonElement.innerHTML = "Submit";
		},3000)





