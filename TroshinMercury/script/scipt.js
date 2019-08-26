
var form = document.forms.login;
var formContainer = document.querySelector('.login-menu')
var containerUser = document.querySelector('.accaount-menu');

// логин юзера
var loginUser = function () {
 	formContainer.style.display = 'none';
  containerUser.style.display = 'block';
	 (form.elements.email).style.border = "none";
	 (form.elements.email).style.color = "#262626";
   (form.elements.password).style.border = "none";
}

//что делать  если ошибка 
var errorLogin = function () {
	(document.querySelector('.error')).style.display = 'block';
	(form.elements.email).style.border = "1px solid red";
		(form.elements.email).style.color = "red";
	(form.elements.password).style.border = "1px solid red";
}
//осушеставляем выход из профиля с помошью кнопки logout
var unlogin = function(){
var logout = containerUser.querySelector('input');

	logout.addEventListener('click', function () {
		(document.querySelector('.error')).style.display = 'none';
		formContainer.style.display = 'block';
		containerUser.style.display = 'none';
	});
};

unlogin();

//отрпавка формы
form.addEventListener ('submit', function(a){
a.preventDefault()

//передаю значение из полей в json и отправляю на сервер
var user = {
   	email: form.email.value,
		password: form.password.value
};

var json = JSON.stringify(user);

var request = new XMLHttpRequest();

request.open("POST", "https://us-central1-mercdev-academy.cloudfunctions.net/login", true);

request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

request.send(json);
// в зависимости от ответа сервера происходит авторизация
	request.onreadystatechange = function () {
    	if (request.readyState == 4 && request.status == 200)
        	loginUser();
        else if (containerUser.style.display = 'none') {
        	errorLogin();
    	}
	}
});
