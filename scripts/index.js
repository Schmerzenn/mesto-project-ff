const elementTemplate = document.querySelector("#card-template").content; // элемент темплейта
const placesList = document.querySelector(".places__list"); // лист карточек

function deleteCard(event) {
  const card = event.target.closest(".card");
  if (card) {
    card.remove();
  }
}

function createCard(item, deleteCard) {
  const cardElement = elementTemplate.querySelector(".card").cloneNode(true); //клонирование

  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button"); // тут создаете карточку и возвращаете ее

  cardDeleteButton.addEventListener("click", (e) => {
    deleteCard(e);
  });
  return cardElement;
}

function addElements(initialCards, deleteCard) {
  const fragment = document.createDocumentFragment();

  initialCards.forEach((item) => {
    fragment.appendChild(createCard(item, deleteCard));
  });

  placesList.appendChild(fragment);
}

addElements(initialCards, deleteCard);
