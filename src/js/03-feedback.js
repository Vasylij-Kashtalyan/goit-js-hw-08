import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let formData = {};

const formEll = document.querySelector('.feedback-form');
formEll.addEventListener('submit', onFormSubmit);
formEll.addEventListener('input' , throttle(onInputForm, 1000));
populareForm();

function onFormSubmit(even) {
    if (formEll.email.value === "" || "" === formEll.message.value) {
        alert('Заполните все поля!');
    } else {
        even.preventDefault();
        even.target.reset();
        localStorage.removeItem(STORAGE_KEY);
    }  
}

function onInputForm (event){
    console.log(formData)
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populareForm() {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    for(const key in saveData) {
        if(key) {
            formEll[key].value = saveData[key];
            formData = saveData;
        }
    }
}