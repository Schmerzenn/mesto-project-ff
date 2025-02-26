import { closePopup } from "./modal";

const popuTypeImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");

export function deleteCard(event) {
  const card = event.target.closest(".card");
  if (card) {
    card.remove();
  }
}

export function createCard(
  item,
  deleteCard,
  likeHeart,
  handleImageClick,
  elementTemplate
) {
  const cardElement = elementTemplate.querySelector(".card").cloneNode(true); //клонирование
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button"); // тут создаете карточку и возвращаете ее
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardDeleteButton.addEventListener("click", (e) => {
    deleteCard(e);
  });

  cardLikeButton.addEventListener("click", () => {
    likeHeart(cardLikeButton);
  });

  cardImage.addEventListener("click", (e) => {
    handleImageClick(e);
  });

  return cardElement;
}

export function addElements({
  initialCards,
  deleteCard,
  likeHeart,
  handleImageClick,
  elementTemplate,
  placesList,
}) {
  console.log("initialCards :", initialCards);
  console.log("elementTemplate :", elementTemplate);

  const fragment = document.createDocumentFragment();

  initialCards.forEach((item) => {
    fragment.prepend(
      createCard(item, deleteCard, likeHeart, handleImageClick, elementTemplate)
    );
  });

  placesList.prepend(fragment);
}

//Лайк карточек

export function likeHeart(button) {
  // Переключаем класс для изменения состояния лайка
  button.classList.toggle("card__like-button_is-active");
}

// Клик на карточку

export function handleImageClick(e) {
  if (e.target.classList.contains("card__image")) {
    const src = e.target.getAttribute("src");
    const alt = e.target.getAttribute("alt");
    const popupCaption = popuTypeImage.querySelector(".popup__caption");
    popupImage.src = src;
    popupImage.alt = alt;
    popupCaption.textContent = alt;
    popuTypeImage.classList.add("visible");

    closePopup(popuTypeImage);
  }
}
