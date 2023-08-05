// Written By Jay Dansie with Assistance from Template provided by Ken Jenson

// Phone number regex to support common formats
const phoneRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

// Email regex to match standard email addresses
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Zip code regex to capture valid zip codes
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

const stateAbbreviations = [
    // List of state abbreviations
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

let form = null;
let successMsg = null;

function initValidation(formId, successId) {
    form = document.getElementById(formId);
    successMsg = document.getElementById(successId);

    let inputs = document.querySelectorAll("input");
    for (input of inputs) {
        input.addEventListener("change", inputChanged);
    }
    form.addEventListener("submit", submitForm); 
}

function inputChanged(ev) {
    let el = ev.currentTarget;
    validateForm();
    // Add 'was-validated' class to the current element
    el.classList.add('was-validated');
}


function submitForm(ev) {
    console.log("submitForm called");
    let form = ev.currentTarget;
    ev.preventDefault();
    ev.stopPropagation();

    validateForm();

    // Check if at least one checkbox is selected
    let checkboxGroup = document.querySelectorAll("input[name='source']");
    let valid = Array.from(checkboxGroup).some((element) => element.checked);
    if (!valid) {
        displayErrorMessage("findPageErrorMsg", "You must select at least one option in 'How did you find my page?'");
        return; // Prevent form submission if no checkbox is selected
    } else {
        hideErrorMessage("findPageErrorMsg");
    }

    if (!form.checkValidity()) {
        let inputs = form.querySelectorAll("input");
        inputs.forEach((input) => {
            input.classList.add('was-validated');
        });
    } else {
        let myForm = document.getElementById('myform');
        myForm.style.display = 'none'; // Hide the form with the ID "myform"

        let thankYouMsg = document.getElementById('success');
        thankYouMsg.style.display = 'inline-block'; // Show the success message
    }
}


function validateForm() {
    if (checkRequired("firstName", "First Name is Required")) {
        checkFirstName();
    }

    if (checkRequired("lastName", "Last Name is Required")) {
        checkLastName();
    }

    checkRequired("address", "Address is Required");
    checkRequired("city", "City is Required");

    if (checkRequired("state", "State is Required")) {
        validateState("state", "Not a valid State, enter two digit code e.g., UT");
    }
    if (checkRequired("email", "Email Address is required")) {
        checkFormat("email", "email format is incorrect", emailRegex);
    }
    if (checkRequired("zip", "Zip Code is Required")) {
        checkFormat("zip", `malformed zip-code, please use either "#####", or "#####-#### format.`, zipCodeRegex);
    }
    if (checkRequired("phone", "Phone is required")) {
        checkFormat("phone", "phone format is incorrect", phoneRegex);
    }
    // Check for at least one checkbox in the checkbox group with name "source"
    let checkboxGroup = document.querySelectorAll("input[name='source']");
    let valid = Array.from(checkboxGroup).some((element) => element.checked);
    if (!valid) {
        displayErrorMessage("findPageErrorMsg", "You must select at least one option in 'How did you find my page?'");
    } else {
        hideErrorMessage("findPageErrorMsg");
    }
}

function displayErrorMessage(id, message) {
    let errorMsgElement = document.getElementById(id);
    if (errorMsgElement) {
        errorMsgElement.textContent = message;
        errorMsgElement.style.display = "block";
    }
}

function hideErrorMessage(id) {
    let errorMsgElement = document.getElementById(id);
    if (errorMsgElement) {
        errorMsgElement.textContent = "";
        errorMsgElement.style.display = "none";
    }
}

function checkFirstName() {
    const firstNameInput = document.getElementById("firstName");
    const firstNameValue = firstNameInput.value.trim();
    const valid = /^[A-Za-z]+$/.test(firstNameValue);
    setElementValidity("firstName", valid, "Only letters allowed for First Name");
}

function checkLastName() {
    const lastNameInput = document.getElementById("lastName");
    const lastNameValue = lastNameInput.value.trim();
    const valid = /^[A-Za-z]+$/.test(lastNameValue);
    setElementValidity("lastName", valid, "Only letters allowed for Last Name");
}


function validateState(id, msg) {
    let el = document.getElementById(id);
    let value = el.value.toUpperCase();
    let valid = stateAbbreviations.includes(value);
    setElementValidity(id, valid, msg);
}

function checkFormat(id, msg, regex) {
    let el = document.getElementById(id);
    let value = el.value;
    let valid = regex.test(value);
    setElementValidity(id, valid, msg);
    return valid;
}

function checkRequired(id, message) {
    let el = document.getElementById(id);
    let valid = false;
    let type = el.type;
    switch (type) {
        case 'text':
        case 'password':
            valid = el.value.trim() !== '';
            break;
        case 'checkbox':
            let groupName = el.name;
            let groupElements = document.querySelectorAll(`input[name="${groupName}"]`);
            valid = Array.from(groupElements).some((element) => element.checked);
            if (!valid) {
                let errorMsgElement = document.getElementById(`${groupName}ErrorMsg`);
                if (errorMsgElement) {
                    errorMsgElement.textContent = message;
                }
            }
            break;
        case 'radio':
            let radioGroupName = el.name;
            let radioGroupElements = document.querySelectorAll(`input[name="${radioGroupName}"]`);
            valid = Array.from(radioGroupElements).some((element) => element.checked);
            if (!valid) {
                let errorMsgElement = document.getElementById(`${radioGroupName}ErrorMsg`);
                if (errorMsgElement) {
                    errorMsgElement.textContent = message;
                }
            }
            break;
    }
    setElementValidity(id, valid, message);
    return valid;
}


function setElementValidity(id, valid, message) {
    let el = document.getElementById(id);
    if (valid) {
        el.setCustomValidity(''); // Set to no error message and field is valid
    } else {
        el.setCustomValidity(message); // Set error message and field gets 'invalid' state
        // Insert or remove message in error div for the element
        let errorMsgElement = el.nextElementSibling;
        if (errorMsgElement.classList.contains('errorMsg')) {
            errorMsgElement.textContent = message;
        }
    }
}
