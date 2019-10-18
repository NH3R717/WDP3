// reference html document
let form = document.querySelector('form');

// header change
document.querySelector('h2').innerHTML = "<center>East Asia Travelers Club – Taiwan</center>";
document.querySelector('h2').style.color = "white";

//background field change
document.body.style.backgroundImage = "url('images/Taipei.jpg')";

// description field change
document.querySelector('p').innerHTML = "If you are looking to find out what's good and what isn't in Taiwan, or to share your experiences here fill out the form below with a comment. We'll review your submission and add you to the our Line Connect group so that you can keep abreast of what's hot and what not.";

// enter text field change
document.querySelector('#name').placeholder = "Name";
document.querySelector('#email').placeholder = "Email";
document.querySelector('#phone').placeholder = "Line ID";
document.querySelector('#message').placeholder = "Comment";

// disable submit button
function bttnDisable() {
    let bttn = document.querySelector('[type=submit]');
    bttn.disabled = true;
    document.querySelector('[type=submit]').className = "disabled";
};

console.log(send.message);


// validate name + all other fields are not null
let requiredFields = form.querySelectorAll('.required');
for (let i = 0; i < requiredFields.length; i++) {

    requiredFields[i].addEventListener('blur', validateRequired);

};
function validateRequired(event) {
    let target = document.getElementById('name');
    let parent = target.parentElement;
    let error = '<label class="error">Please include your name.</label>';

    if (!target.value.length) {
        if (parent.querySelector('.required')) {
            parent.insertAdjacentHTML('beforeend', error);

        } else {
            parent.removeChild(parent.querySelector('.error'));

        }
    }

};

// validate email field against email formating regex
let valEmail = form.querySelector('#email');
{
valEmail.addEventListener('blur', validateEmail);
};
function validateEmail(event) {
    let email = document.querySelector('#email');
    let parent = email.parentElement;

    let emailError = '<label class="error">Please enter a valid email address</label>';
    let emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.match(emailFormat)) {
        return (true);

    } else {
        parent.insertAdjacentHTML('afterend', emailError);
    }
};

// validate Line ID field with letter-only regex
let valLine = form.querySelector('#phone');
{
    valLine.addEventListener('blur', validatePhone);
}
function validatePhone() {
    let line= document.querySelector('#phone');
    let parent = line.parentElement;
    let lineError = '<label class="error">Please enter a valid Line ID</label>';
    let lineFormat = /[a-zA-Z]/;
    if (line.value.match(lineFormat)) {
        return (true);

    } else {
        parent.insertAdjacentHTML('afterend', lineError);
    }
};

// adds a click event listener to the submit button
let submitBttn = document.querySelector('[type=submit]');
submitBttn.addEventListener('click', send);

// submit button event showing form completion message
function send(event) {
    event.preventDefault();
    let form = document.querySelector('form');
    let message = '<h2 style="color: #EB5B15"> THANK YOU!</h2> <p style="color: #607d8b"><center> Check your Line for our group invite, you should hear from us shortly. </center></p>';
    let target = event.target;
    let disabled = target.classList.contains('disabled');
    if (disabled === false) {
        form.innerHTML = message;

    } else {
        
    }
};