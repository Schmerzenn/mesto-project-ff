const elementTemplate = document.querySelector("#card-template").content; // элемент темплейта
const placesList = document.querySelector(".places__list"); // лист карточек

function deleteCard(event) {
  const card = event.target.closest(".card");
  if (card) {
    card.remove();
  }
}

function addElement(item, deleteCard) {
  const cardElement = elementTemplate.querySelector(".card").cloneNode(true); //клонирование

  cardElement.querySelector(".card__image").src = item.link;
  cardElement.querySelector(".card__image").alt = item.name;
  cardElement.querySelector(".card__title").textContent = item.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  placesList.append(cardElement);

  cardDeleteButton.addEventListener("click", (e) => {
    deleteCard(e);
  });
}

initialCards.forEach(function (item) {
  addElement(item, deleteCard);
});
