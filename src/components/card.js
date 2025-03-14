import { deleteCardById, deleteLikeById, likeById } from "../scripts/api";

export async function deleteCard(event) {
  const card = event.target.closest(".card");
  const id = card.getAttribute("data-id");
  await deleteCardById(id);
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
  ownerId,
}) {
  const cardElement = elementTemplate.querySelector(".card").cloneNode(true); //клонирование
  cardElement.setAttribute("data-id", item._id);
  const cardImage = cardElement.querySelector(".card__image");

  const cardLike = cardElement.querySelector(".card__like-count");
  cardLike.textContent = item?.likes?.length || 0;

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  item?.likes?.forEach((item) => {
    if (item._id === ownerId) {
      cardLikeButton.classList.toggle("card__like-button_is-active");
    }
  });

  if (ownerId !== item.owner?._id) {
    cardDeleteButton.remove();
  } else {
    cardDeleteButton.addEventListener("click", (e) => {
      deleteCard(e);
    });
  }

  cardLikeButton.addEventListener("click", () => {
    likeHeart(cardLikeButton, cardLike, item._id);
  });
  cardImage.addEventListener("click", () => handleImageClick(item, cardImage));

  return cardElement;
}

//Лайк карточек

export function likeHeart(button, count, id) {
  if (button.classList.contains("card__like-button_is-active")) {
    deleteLikeById(id);
    count.textContent--;
  } else {
    likeById(id);
    count.textContent++;
  }

  button.classList.toggle("card__like-button_is-active");
}
