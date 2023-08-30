import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_LS = 'feedback-form-state';


form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
const { email, message } = form.elements;

email.value = data.email ?? '';
message.value = data.message ?? '';

function handlerInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_LS, JSON.stringify(data));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  console.log(data);

  form.reset();
  localStorage.removeItem(KEY_LS);
  data = {};
}
