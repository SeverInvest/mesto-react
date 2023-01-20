//import PARAMS from "./params.js";

// export function renderLoading(popup, isProcess, buttonSubmitText) {
//   const buttonSubmit = popup.querySelector(PARAMS.submitButtonSelector);
//   if (isProcess) {
//     buttonSubmit.textContent = "Сохранение...";
//   } else {
//     buttonSubmit.textContent = buttonSubmitText;
//   }
// };

export function isError(error) {
  console.log(error);
};

// export function checkInput({ min, max, isLink, checkInputValue }) {
//   const pattern = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi);
//   switch (true) {
//     case (min && (checkInputValue.length < min)):
//       return "Слишком мало букв.";
//     case (max && checkInputValue.length > max):
//       return "Слишком много букв.";
//     case (isLink && !pattern.test(checkInputValue)):
//       return "Некорректный url";
//   }
//   return "";
// }
