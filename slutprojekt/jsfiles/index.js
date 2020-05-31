//Elements
const eFieldset = document.querySelector('fieldset');
const eSubmit = document.querySelector('#submit');
const eEmail = document.querySelector('input');
const eQuestion = document.querySelector('textarea');

//Simulate a Question sent
eSubmit.addEventListener('click', function() {

    if (eEmail.value != "" && eQuestion.value != "") {
        eFieldset.insertAdjacentHTML('beforeend', '<div class="sent"><fieldset><p>Your message has been sent to GameStation staff, your message will be answerd and sent to the email you inserted.</p></fieldset></div>');
    } else {
        eFieldset.insertAdjacentHTML('beforeend', '<div class="error"><fieldset><p>You have not fillet in an email-address and/or text, please fix the problem and try to send again.</p></fieldset></div>');
    }
});