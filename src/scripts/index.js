import { deleteCard, likeHeart, createCard } from "../components/card";
import {
  BUTTON_TEXT_LOADING,
  BUTTON_TEXT_SAVE,
  closePopup,
  openPopup,
} from "../components/modal";

import { setupPopup } from "../components/modal";
import {
  enableValidation,
  hideInputErrors,
  renderLoading,
  runValidate,
} from "../components/validation";
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
import { handleCatch } from "./utils";

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
const editProfileSubmit = popupTypeEdit.querySelector(".popup__button");
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
const newPlaceSubmit = newPlaceForm.querySelector(".popup__button");

const avatarForm = document.forms["avatar"];
const avatarUrl = avatarForm.querySelector(".popup__input_type_url");
const avatarFormSubmit = avatarForm.querySelector(".popup__button");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  inputUrlClass: "popup__input_type_url",
};

Promise.all([getCardList(), getProfilrData()])
  .then(([cardsData, profile]) => {
    setInitialProfile(profile);

    addElements({
      cards: sortByDate(cardsData),
      deleteCard,
      likeHeart,
      handleImageClick,
      elementTemplate,
      placesList,
      ownerId: profile._id,
    });
  })
  .catch((error) => {
    console.error(error);
  });

//вызов модалки Новая карточка
setupPopup(profileAddButton, popupTypeNewCard, () => {
  nameCardInput.value = "";
  linkCardInput.value = "";
  initialValidation(newPlaceForm, popupTypeNewCard);
});

//вызов модалки Профиль
setupPopup(profileEditButton, popupTypeEdit, () => {
  profileNameForm.value = profileTitle.textContent;
  profileDescriptionForm.value = profileDescription.textContent;
  initialValidation(profileForm, popupTypeEdit);
});

//вызов модалки Изменить аватар
setupPopup(profileImage, popuTypeAvatarEdit, () => {
  avatarUrl.value = "";
  initialValidation(avatarForm, popuTypeAvatarEdit);
});

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
  ownerId,
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
        ownerId,
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

  renderLoading({
    buttonElement: editProfileSubmit,
    isLoading: true,
  });

  //отправка на сервер нового профиля
  setProfilrData({
    name: nameValue,
    about: descriptionValue,
  })
    .then((profile) => {
      profileTitle.textContent = profile.name;
      profileDescription.textContent = profile.about;
      closePopup(popupTypeEdit);
    })
    .catch(handleCatch)
    .finally(() => {
      renderLoading({
        buttonElement: editProfileSubmit,
        isLoading: false,
      });
    });
}

function handleAvatarFormSubmit(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  renderLoading({
    buttonElement: avatarFormSubmit,
    isLoading: true,
  });

  setAvatar({
    avatar: avatarUrl.value,
  })
    .then((profile) => {
      setLocalBackgroundAvatar(profile.avatar);
      closePopup(popuTypeAvatarEdit);
    })
    .catch(handleCatch)
    .finally(() => {
      renderLoading({
        buttonElement: avatarFormSubmit,
        isLoading: false,
      });
    });
}

function handleNewPlaceFormSubmit(e) {
  e.preventDefault();
  const link = linkCardInput.value;
  const name = nameCardInput.value;

  renderLoading({
    buttonElement: newPlaceSubmit,
    isLoading: true,
  });

  addCard({
    link,
    name,
  })
    .then((card) => {
      addElements({
        cards: [card],
        deleteCard,
        likeHeart,
        handleImageClick,
        elementTemplate,
        placesList,
        ownerId: card.owner._id,
      });
      closePopup(popupTypeNewCard);
    })
    .catch(handleCatch)
    .finally(() => {
      renderLoading({
        buttonElement: newPlaceSubmit,
        isLoading: false,
      });
      e.target.reset();
    });
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
  enableValidation(form, validationConfig);
});

function setLocalBackgroundAvatar(avatar) {
  profileImage.style.background = `url('${avatar}') no-repeat center center`;
  profileImage.style.backgroundSize = "cover";
}

function setInitialProfile(profileData) {
  profileTitle.textContent = profileData.name;
  profileDescription.textContent = profileData.about;
  setLocalBackgroundAvatar(profileData.avatar);
}

function initialValidation(form, popup) {
  runValidate(form, validationConfig);
  hideInputErrors(popup, validationConfig);
}
