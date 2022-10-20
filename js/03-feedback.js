import throttle from "../node_modules/lodash.throttle";

const ref = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
  input: document.querySelector(".feedback-form input"),
};

ref.form.addEventListener("submit", onFormSubmit);
ref.form.addEventListener("input", throttle(onFormInput, 500));
// ref.input.addEventListener("input", throttle(onTaxtareaInput, 500));
let data = { email: "", message: "" };
populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function onFormInput(evt) {
  if (evt.target.nodeName === "INPUT") {
    data.email = evt.target.value;
  } else if (evt.target.nodeName === "TEXTAREA") {
    data.message = evt.target.value;
  }
  if (data) {
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
  }

  //   localStorage.setItem("feedback-form-state", message);
}

function populateForm(evt) {
  const savedMessage = localStorage.getItem("feedback-form-state");
  const parsedMessage = JSON.parse(savedMessage);

  if (parsedMessage) {
    data = parsedMessage;
    ref.textarea.value = data.message;
    ref.input.value = data.email;

    console.log(data);
  }
}

// let data = { email: "", message: "" };
// form.addEventListener(
//   "input",
//   Throttle((event) => {
//     if (event.target.nodeName === "INPUT") {
//       data.email = event.target.value;
//     } else if (event.target.nodeName === "TEXTAREA") {
//       data.message = event.target.value;
//     }
//     if (data) {
//       localStorage.setItem("feedback-form-state", JSON.stringify(data));
//     }
//   }, 500)
// );
// if (localStorage.getItem("feedback-form-state")) {
//   data = JSON.parse(localStorage.getItem("feedback-form-state"));
// }
// email.value = data.email;
// message.value = data.message;
