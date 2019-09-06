var unlogin = function(){
	var containerUser = document.querySelector('.accaount-menu');
var logout = containerUser.querySelector('input');


	logout.addEventListener('click', function () {
		(document.querySelector('.form__error')).style.display = 'none';
		formContainer.classList.remove("js-hidden");
		containerUser.classList.add("js-hidden");
	});
};

unlogin();