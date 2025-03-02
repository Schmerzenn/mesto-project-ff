export function deleteCard(event) {
  const card = event.target.closest(".card");
  if (card) {
    card.remove();
  }
}

export function createCard({
  item,
  deleteCard,
  likeHeart,
  handleImageClick,
  elementTemplate,
}) {
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
  cardImage.addEventListener("click", () => handleImageClick(item, cardImage));

  return cardElement;
}

//Лайк карточек

export function likeHeart(button) {
  // Переключаем класс для изменения состояния лайка
  button.classList.toggle("card__like-button_is-active");
}
