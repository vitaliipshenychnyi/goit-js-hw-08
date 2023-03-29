const formEl = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

// Зчитування даних з полів та збереження їх у вигляді об'єкту
formEl.addEventListener('input', saveDataForm);

const formData = {
  email: '',
  message: '',
};

function saveDataForm() {
  
    formData.email = formEl.elements.email.value;
    formData.message = formEl.elements.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  
}

// Заповнення полів форми даними зі сховища
document.addEventListener('DOMContentLoaded', loadDataForm);
let savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

function loadDataForm() {
  //   if (localStorage.length) {
  //     formEl.elements.email.value = savedData.email;
  //     formEl.elements.message.value = savedData.message;
  //   } else {
  //     formEl.elements.email.value = '';
  //     formEl.elements.message.value = '';
  //   }
}

// -----------
// console.log(savedData);
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  formEl.reset();
  localStorage.clear();
}
