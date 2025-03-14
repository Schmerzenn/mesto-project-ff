import { hideInputErrors } from "./validation";
export const BUTTON_TEXT_LOADING = "Сохранение...";
export const BUTTON_TEXT_SAVE = "Сохранить";
const handleEscape = (e) => {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector(".visible");
    closePopup(openedPopup);
  }
};

export function openPopup(popup) {
  popup.classList.add("visible");

  hideInputErrors(popup);

  document.addEventListener("keydown", handleEscape); // добавляем обработчик `Escape`
}

export function closePopup(popup) {
  popup.classList.remove("visible");
  document.removeEventListener("keydown", handleEscape);
}

export function setupPopup(openButton, popup, callback) {
  openButton.addEventListener("click", function () {
    openPopup(popup);
    if (callback) {
      // если передали `callback`, то вызываем его
      callback();
    }
  });
}
