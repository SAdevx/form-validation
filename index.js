const form = document.querySelector("form");
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit');

function checkMissingValues(){
    if(email.validity.valueMissing){
        email.nextSibling.textContent = 'Please enter a valid email address';
    } else if(country.validity.valueMissing) {
        country.nextSibling.textContent = 'Please enter a valid country name';
    } else if(zipcode.validity.valueMissing) {
        zipcode.nextSibling.textContent = 'Please enter a valid zipcode';
    } else if(password.validity.valueMissing) {
        password.nextSibling.textContent = 'Please enter a valid password';
    } else if(confirm_password.validity.valueMissing) {
        confirm_password.nextSibling.textContent = 'Please confirm password';
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkMissingValues();
});

email.addEventListener('input', (e) => {   
    email.setCustomValidity("makes input invalid, unitl it ends in @gmail.com");

    if(email.validity.typeMismatch){
        email.nextSibling.textContent = 'Please enter email in @gmail.com format';
        email.nextSibling.style.backgroundColor = 'rgb(236, 165, 165)';
    } else {
        email.nextSibling.textContent = '';
    }

    if(!email.value.endsWith('@gmail.com')){
        email.nextSibling.textContent = 'Please enter email in @gmail.com format';
        email.nextSibling.style.backgroundColor = 'rgb(236, 165, 165)'
    } else {
        email.setCustomValidity("");
    }
});

country.addEventListener('input', () => {
    if(!country.validity.valueMissing){
        country.nextSibling.textContent = '';
    }
});

zipcode.addEventListener('input', () => { 
    if(zipcode.validity.tooShort){
        zipcode.setCustomValidity("makes input invalid, unitl it is exactly 5 characters");
        zipcode.nextSibling.textContent = `Zipcode should be exactly 6 characters long, you curretly have ${zipcode.value.length}`;
    } else {
        zipcode.setCustomValidity("");
        zipcode.nextSibling.textContent = '';
    }
});

confirm_password.addEventListener('input', () => {
    if(confirm_password.value !== password.value){
        confirm_password.setCustomValidity("makes input invalid if confirm password don't match password");
        confirm_password.nextSibling.textContent = "Password don't match";
    } else {
        confirm_password.setCustomValidity("");
        confirm_password.nextSibling.textContent = "";
    }
});

submitButton.addEventListener("click", () => {
    const body = document.querySelector('body');
    const message = document.createElement('div');
    message.textContent = 'Thank You!';

    if(email.validity.valid && country.validity.valid && zipcode.validity.valid && password.validity.valid && confirm_password.validity.valid){
        while(body.firstChild){
            body.removeChild(body.firstChild);
        }
        body.appendChild(message);
    }   
});