import { deleteCard, likeHeart, createCard } from "../components/card";
import { closePopup, openPopup } from "../components/modal";

import { setupPopup } from "../components/modal";
import "../pages/index.css"; // добавьте импорт главного файла стилей
import { initialCards } from "./cards";

const elementTemplate = document.querySelector("#card-template").content; // элемент темплейта
const placesList = document.querySelector(".places__list"); // лист карточек

const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileEditButton = document.querySelector(".profile__edit-button");

const popups = document.querySelectorAll(".popup");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popuTypeImage = document.querySelector(".popup_type_image");
const popupCaption = popuTypeImage.querySelector(".popup__caption");

const popupImage = document.querySelector(".popup__image");

const profileInfo = document.querySelector(".profile__info");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileDescription = profileInfo.querySelector(".profile__description");

// Находим поля формы edit profile
const nameInput = popupTypeEdit.querySelector(".popup__input_type_name");
const descriptionInput = popupTypeEdit.querySelector(
  ".popup__input_type_description"
);

const nameCardInput = popupTypeNewCard.querySelector(
  ".popup__input_type_card-name"
);
const linkCardInput = popupTypeNewCard.querySelector(".popup__input_type_url");

const profileForm = document.forms["edit-profile"];
const profileNameForm = profileForm.querySelector(".popup__input_type_name");
const profileDescriptionForm = profileForm.querySelector(
  ".popup__input_type_description"
);

const newPlaceForm = document.forms["new-place"];

// вызов создания initialCards
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
setupPopup(profileEditButton, popupTypeEdit, () => {
  profileNameForm.value = profileTitle.textContent;
  profileDescriptionForm.value = profileDescription.textContent;
});

// Редактировать profile
profileForm.addEventListener("submit", handleProfileFormSubmit);

//Добавление карточки
newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);

export function addElements({
  initialCards,
  deleteCard,
  likeHeart,
  handleImageClick,
  elementTemplate,
  placesList,
}) {
  const fragment = document.createDocumentFragment();

  initialCards.forEach((item) => {
    fragment.prepend(
      createCard({
        item,
        deleteCard,
        likeHeart,
        handleImageClick,
        elementTemplate,
      })
    );
  });

  placesList.prepend(fragment);
}

// Клик на карточку

export function handleImageClick(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(popuTypeImage);
}

//Работа с формой (автозаполнение)

function handleProfileFormSubmit(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = descriptionValue;
  closePopup(popupTypeEdit);
}

function handleNewPlaceFormSubmit(e) {
  e.preventDefault();
  const link = linkCardInput.value;
  const name = nameCardInput.value;
  addElements({
    initialCards: [{ link, name }],
    deleteCard,
    likeHeart,
    handleImageClick,
    elementTemplate,
    placesList,
  });
  //ТУТ ОТЧИСТИТЬ ИНПУТЫ
  e.target.reset();
  closePopup(popupTypeNewCard);
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("visible")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});
