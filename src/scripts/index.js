import { deleteCard, likeHeart, createCard } from "../components/card";
import {
  BUTTON_TEXT_LOADING,
  BUTTON_TEXT_SAVE,
  closePopup,
  openPopup,
} from "../components/modal";

import { setupPopup } from "../components/modal";
import { checkInputsValid, isValid } from "../components/validation";
import "../pages/index.css"; // добавьте импорт главного файла стилей
import {
  addCard,
  getCardList,
  getProfilrData,
  setAvatar,
  setProfilrData,
} from "./api";
import { initialCards } from "./cards";
import { sortByDate } from "./helpers";

const elementTemplate = document.querySelector("#card-template").content; // элемент темплейта
const placesList = document.querySelector(".places__list"); // лист карточек

const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileEditButton = document.querySelector(".profile__edit-button");

const popups = document.querySelectorAll(".popup");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popuTypeImage = document.querySelector(".popup_type_image");
const popuTypeAvatarEdit = document.querySelector(".popup_type_avatar_edit");
const popupCaption = popuTypeImage.querySelector(".popup__caption");

const popupImage = document.querySelector(".popup__image");

const profileInfo = document.querySelector(".profile__info");
const profileImage = document.querySelector(".profile__image");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileDescription = profileInfo.querySelector(".profile__description");

//ДЛЯ ОШИБКИ
const formPopups = document.querySelectorAll(".popup__form");

// Находим поля формы edit profile
const editProfileButton = popupTypeEdit.querySelector(".popup__button");
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

const newPlaceButton = newPlaceForm.querySelector(".popup__button");

const avatarForm = document.forms["avatar"];
const avatarUrl = avatarForm.querySelector(".popup__input_type_url");

const cards = await getCardList();
const profileData = await getProfilrData();

setInitialProfile();
// вызов создания initialCards
addElements({
  cards: sortByDate(cards),
  deleteCard,
  likeHeart,
  handleImageClick,
  elementTemplate,
  placesList,
});

//вызов модалки
setupPopup(profileAddButton, popupTypeNewCard, () => {
  nameCardInput.value = "";
  linkCardInput.value = "";
});

setupPopup(profileEditButton, popupTypeEdit, () => {
  profileNameForm.value = profileData.name;
  profileDescriptionForm.value = profileData.about;
});

setupPopup(profileImage, popuTypeAvatarEdit);

// Редактировать avatar
avatarForm.addEventListener("submit", handleAvatarFormSubmit);

// Редактировать profile
profileForm.addEventListener("submit", handleProfileFormSubmit);

//Добавление карточки
newPlaceForm.addEventListener("submit", handleNewPlaceFormSubmit);

async function addElements({
  cards,
  deleteCard,
  likeHeart,
  handleImageClick,
  elementTemplate,
  placesList,
}) {
  const fragment = document.createDocumentFragment();

  cards.forEach((item) => {
    fragment.prepend(
      createCard({
        item,
        deleteCard,
        likeHeart,
        handleImageClick,
        elementTemplate,
        ownerId: profileData._id,
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

async function handleProfileFormSubmit(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;

  editProfileButton.textContent = BUTTON_TEXT_LOADING;
  //отправка на сервер нового профиля
  const profile = await setProfilrData({
    name: nameValue,
    about: descriptionValue,
  });
  editProfileButton.textContent = BUTTON_TEXT_SAVE;

  profileTitle.textContent = profile.name;
  profileDescription.textContent = profile.about;

  closePopup(popupTypeEdit);
}

async function handleAvatarFormSubmit(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const profile = await setAvatar({
    avatar: avatarUrl.value,
  });
  setLocalBackgroundAvatar(profile.avatar);
  closePopup(popuTypeAvatarEdit);
}

async function handleNewPlaceFormSubmit(e) {
  e.preventDefault();
  const link = linkCardInput.value;
  const name = nameCardInput.value;
  newPlaceButton.textContent = BUTTON_TEXT_LOADING;
  const card = await addCard({
    link: link,
    name: name,
  });
  newPlaceButton.textContent = BUTTON_TEXT_SAVE;
  addElements({
    cards: [{ ...card }],
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

formPopups.forEach((form) => {
  const formInputs = Array.from(form.querySelectorAll(".popup__input"));
  const popupButton = form.querySelector(".popup__button");

  checkInputsValid({ formInputs, form, popupButton });
});

function setLocalBackgroundAvatar(avatar) {
  profileImage.style.background = `url('${avatar}') no-repeat center center`;
  profileImage.style.backgroundSize = "cover";
}

function setInitialProfile() {
  profileTitle.textContent = profileData.name;
  profileDescription.textContent = profileData.about;
  setLocalBackgroundAvatar(profileData.avatar);
}
