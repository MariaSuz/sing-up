const inputsAll = document.querySelectorAll('.form-sing-up');
const inputName = document.getElementById('first-name');
const inputSurname = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordConfirm = document.getElementById('password-confirm');
const inputData = document.getElementById('birth-day');
const btn = document.getElementById('form-button');
const form = document.querySelector('.form');

//Add delete class valid invalid
function addValidForm (link) {
    link.classList.add('valid');
    link.classList.remove('invalid');
}
function addInvalidForm (link) {
    link.classList.add('invalid');
    link.classList.remove('valid');
}

//Check mail validation
function isValidEmail (email, id) {
    function isValid (value) {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return EMAIL_REGEXP.test(String(value).toLowerCase());
    }
    const label = document.getElementById(id);
    if(!isValid(email.value)) {
        addInvalidForm(email);
        label.innerHTML = 'Non-existent address';
    } else {
        label.innerHTML = '';
        addValidForm(email);
    }
}

//Check first and last name validation
function isValidNameSurname (name, id) {
    const NAME_REGEXP = /^[a-zA-Z ]+$/ ;
    const label = document.getElementById(id);
    if(!NAME_REGEXP.test(name.value)) {
        label.innerHTML = 'Name or surname has an invalid value';
        addInvalidForm(name);
    } else if (name.value.length > 50 ) {
        label.innerHTML = 'Exceeds 50 characters';
        addInvalidForm(name);
    } else {
        label.innerHTML = '';
        addValidForm(name);
    }
}

//Check password
function isValidPassword (password, id) {
    const label = document.getElementById(id);
    const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if(!PASSWORD_REGEXP.test(password.value)) {
        addInvalidForm(password);
        label.innerHTML = 'Should contain at least one digit, one lower case, one upper case, special characters, least 8 from the mentioned characters';
    } else {
        label.innerHTML = '';
        addValidForm(password);
    }
}

function isValidPasswordConfirm (id1, id2) {
    const label1 = document.getElementById(id1);
    const label2 = document.getElementById(id2);
    if(inputPassword.value === inputPasswordConfirm.value) {
        addInvalidForm(inputPasswordConfirm);
        label1.innerHTML = 'The passwords do not match';
        label2.innerHTML = 'The passwords do not match';
    } else {
        label1.innerHTML = '';
        label2.innerHTML = '';
        addValidForm(inputPasswordConfirm);
    }
}


//Check date validation
function isValidData (data, id) {
    const label = document.getElementById(id);
    function getAge(date) {
        let today = new Date();
        let birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();  //getFullYear Получить год (4 цифры)
        return age
    }
    if(getAge(data.value) < 18) {
        label.innerHTML = 'Are under 18';
        addInvalidForm(data);
    } else {
        label.innerHTML = '';
        addValidForm(data);
    }
}


inputsAll.forEach(function(input) {
            if (input.classList.contains('valid')){
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        })


form.onSubmit =  function()  {
    //look name Surname
    isValidNameSurname (inputSurname, 'last-name-error');
    isValidNameSurname (inputName, 'first-name-error');
    //look email
    isValidEmail (inputEmail, 'email-error');
    //look password
    isValidPassword (inputPassword, 'password-error');
    isValidPasswordConfirm ('password-error', 'password-confirm-error');
    // //look date
    isValidData (inputData, 'date-error');
    console.log('eto')

}

function checkForm (form) {
    isValidNameSurname (inputSurname, 'last-name-error');
    isValidNameSurname (inputName, 'first-name-error');
    //look email
    isValidEmail (inputEmail, 'email-error');
    //look password
    isValidPassword (inputPassword, 'password-error');
    isValidPasswordConfirm ('password-error', 'password-confirm-error');
    // //look date
    isValidData (inputData, 'date-error');
}


inputName.addEventListener('input', isValidNameSurname (inputName, 'first-name-error'))


// checkForm (form)