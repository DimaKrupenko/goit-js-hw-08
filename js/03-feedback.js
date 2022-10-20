import throttle from "../node_modules/lodash.throttle";

const ref = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
  input: document.querySelector(".feedback-form input"),
};

ref.form.addEventListener("submit", onFormSubmit);
ref.textarea.addEventListener("input", throttle(onTaxtareaInput, 500));
ref.input.addEventListener("input", throttle(onTaxtareaInput, 500));

populateMessage();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function onTaxtareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem("feedback-form-state", message);
}

function populateMessage(evt) {
  const savedMessage = localStorage.getItem("feedback-form-state");

  if (savedMessage) {
    ref.textarea.value = savedMessage;
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
