const submitButton = document.querySelector("#btn-green");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const emailAddress = document.querySelector("#email");
const password = document.querySelector("#password");
const fnerror_text = document.querySelectorAll(".fn-hide");
const lnerror_text = document.querySelectorAll(".ln-hide");
const emerror_text = document.querySelectorAll(".em-hide");
const pserror_text = document.querySelectorAll(".ps-hide");
const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton.addEventListener("click", () => {
  switch (firstName.value) {
    case "":
      fnerror_text.forEach((item) => {
        item.classList.toggle("fn-hide");
      });
  }
  switch (lastName.value) {
    case "":
      lnerror_text.forEach((item) => {
        item.classList.toggle("ln-hide");
      });
  }
  switch (emailValidate.test(emailAddress.value)) {
    case false:
      emerror_text.forEach((item) => {
        item.classList.toggle("em-hide");
      });
  }
  switch (password.value) {
    case "":
      pserror_text.forEach((item) => {
        item.classList.toggle("ps-hide");
      });
  }
  // switch (lastName.value) {
  //   case "":
  //     error_text.classList.toggle("hide");
  // }
});
