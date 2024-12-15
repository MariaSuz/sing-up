const inputsAll = document.querySelectorAll('.form-sing-up');
const inputName = document.getElementById('first-name');
const inputSurname = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordConfirm = document.getElementById('password-confirm');
const inputData = document.getElementById('birth-day');
const btn = document.getElementById('form-button');
const form = document.querySelector('.form');


function addValidForm (link) {
    link.classList.add('valid');
    link.classList.remove('invalid');
}
function addInvalidForm (link) {
    link.classList.add('invalid');
    link.classList.remove('valid');
}


function isValidEmail (email, id) {
    function isValid (value) {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return EMAIL_REGEXP.test(String(value).toLowerCase());
    }
    const label = document.getElementById(id);
    if(!isValid(email.value)) {
        addInvalidForm(email);
        label.innerHTML = 'Incorrect address';
    } else {
        label.innerHTML = '';
        addValidForm(email);
    }
}


function isValidNameSurname (name, id) {
    const NAME_REGEXP = /^[a-zA-Z ]+$/ ;
    const label = document.getElementById(id);
    if(!NAME_REGEXP.test(name.value)) {
        label.innerHTML = 'Form validation allow only english alphabet characters';
        addInvalidForm(name);
    } else if (name.value.length > 50 ) {
        label.innerHTML = 'Exceeds 50 characters';
        addInvalidForm(name);
    } else {
        label.innerHTML = '';
        addValidForm(name);
    }
}


function isValidPassword (password, id) {
    const label = document.getElementById(id);
    const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if(!PASSWORD_REGEXP.test(password.value)) {
        addInvalidForm(password);
        label.innerHTML = 'Should contain at least one digit, one lower case, one upper case, special characters (#,@,!), least 8 from the mentioned characters';
    } else {
        label.innerHTML = '';
        addValidForm(password);
    }
}

function isValidPasswordConfirm (id1, id2) {
    const label1 = document.getElementById(id1);
    const label2 = document.getElementById(id2);
    if(inputPassword.value != inputPasswordConfirm.value) {
        addInvalidForm(inputPasswordConfirm);
        label1.innerHTML = 'The passwords do not match';
        label2.innerHTML = 'The passwords do not match';
    } else {
        label1.innerHTML = '';
        label2.innerHTML = '';
        addValidForm(inputPasswordConfirm);
    }
}



function isValidData (data, id) {
    const label = document.getElementById(id);
    function getAge(date) {
        let today = new Date();
        let birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();  //getFullYear Получить год (4 цифры)
        return age
    }
    if(getAge(data.value) < 18) {
        label.innerHTML = 'Registration only from 18 years old';
        addInvalidForm(data);
    } else {
        label.innerHTML = '';
        addValidForm(data);
    }
}

function checkButton () {
    if (inputName.classList.contains('valid') && inputSurname.classList.contains('valid') 
        && inputEmail.classList.contains('valid') && inputPassword.classList.contains('valid')
        && inputPasswordConfirm.classList.contains('valid') && inputData.classList.contains('valid')){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}



inputName.addEventListener('input', () => { isValidNameSurname (inputName, 'first-name-error')}) 
inputSurname.addEventListener('input', () => { isValidNameSurname (inputSurname, 'last-name-error')})
inputEmail.addEventListener('input', () => { isValidEmail (inputEmail, 'email-error')})
inputPassword.addEventListener('input', () => { isValidPassword (inputPassword, 'password-error')})
inputPasswordConfirm.addEventListener('input', () => { isValidPasswordConfirm ('password-error', 'password-confirm-error')})
inputData.addEventListener('input',  () => {isValidData (inputData, 'date-error')})


form.addEventListener('input', () => {checkButton()})

