import {
  addElements,
  deleteCard,
  handleImageClick,
  likeHeart,
} from "../components/card";
import {
  autocompleteForm,
  handleFormSubmit,
  popupTypeEdit,
} from "../components/form";
import { setupPopup } from "../components/modal";
import "../pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from "./cards";

export const elementTemplate = document.querySelector("#card-template").content; // элемент темплейта
export const placesList = document.querySelector(".places__list"); // лист карточек
const profileAddButton = document.querySelector(".profile__add-button");
export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileEditButton = document.querySelector(".profile__edit-button");

// вызов создания
addElements({
  initialCards,
  deleteCard,
  likeHeart,
  handleImageClick,
  elementTemplate,
  placesList,
});

//вызов модалки

setupPopup(profileAddButton, popupTypeNewCard);
setupPopup(profileEditButton, popupTypeEdit);

// он будет следить за событием “submit” - «отправка»
popupTypeEdit.addEventListener("submit", autocompleteForm);

//Добавление карточки
popupTypeNewCard.addEventListener("submit", handleFormSubmit);
