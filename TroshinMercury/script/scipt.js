var form = document.forms.login;
var formContainer = document.querySelector('.login-menu')
var containerUser = document.querySelector('.accaount-menu');

// логин юзера
var loginUser = function () {
  formContainer.classList.add("js-hidden");
  containerUser.classList.remove("js-hidden");
  (form.elements.email).classList.remove("js-error");
  (form.elements.email).classList.remove("js-error__text");
  (form.elements.password).classList.remove("js-error");
}

//что делать  если ошибка 
var errorLogin = function () {
  (document.querySelector('.form__error')).style.display = 'block';
  (form.elements.email).classList.add("js-error");
  (form.elements.email).classList.add("js-error__text");
  (form.elements.password).classList.add("js-error");
}


//отрпавка формы
form.addEventListener('submit', function (a) {
  a.preventDefault()

  //передаю значение из полей в json и отправляю на сервер
  var user = {
    email: form.email.value,
    password: form.password.value
  };

  // post запрос с fetch
  var url = 'https://us-central1-mercdev-academy.cloudfunctions.net/login';

  fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status == 200) {
        loginUser();
      } else if (containerUser.classList.contains("js-hidden")) {
        errorLogin();
      }
    })

    .catch(() => {
      if (containerUser.classList.contains("js-hidden")) {
        errorLogin()
      }
    });

});