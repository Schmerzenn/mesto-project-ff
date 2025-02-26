import {
  addElements,
  deleteCard,
  handleImageClick,
  likeHeart,
} from "../components/card";

import { displayNone, setupPopup } from "../components/modal";
import "../pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from "./cards";

export const elementTemplate = document.querySelector("#card-template").content; // элемент темплейта
export const placesList = document.querySelector(".places__list"); // лист карточек
const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");

// Находим поля формы
const nameInput = popupTypeEdit.querySelector(".popup__input_type_name");
const descriptionInput = popupTypeEdit.querySelector(
  ".popup__input_type_description"
);

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

//Работа с формой (автозаполнение)

function autocompleteForm(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  const nameOutput = document.querySelector(".profile__title");
  const descriptionOutput = document.querySelector(".profile__description");

  // Вставьте новые значения с помощью textContent
  nameOutput.textContent = nameValue;
  descriptionOutput.textContent = descriptionValue;
  displayNone(popupTypeEdit);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = popupTypeNewCard.querySelector(
    ".popup__input_type_card-name"
  ).value;
  const link = popupTypeNewCard.querySelector(".popup__input_type_url").value;

  addElements({
    initialCards: [{ link: link, name: name }],
    deleteCard,
    likeHeart,
    handleImageClick,
    elementTemplate,
    placesList,
  });
  //ТУТ ОТЧИСТИТЬ ИНПУТЫ
  e.target.reset();
  displayNone(popupTypeNewCard);
}
