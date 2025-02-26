import { popupTypeNewCard, elementTemplate, placesList } from "../scripts";
import { addElements, deleteCard, likeHeart, handleImageClick } from "./card";
import { displayNone } from "./modal";

export const popupTypeEdit = document.querySelector(".popup_type_edit");

// Находим поля формы
const nameInput = popupTypeEdit.querySelector(".popup__input_type_name");
const descriptionInput = popupTypeEdit.querySelector(
  ".popup__input_type_description"
);

//Работа с формой (автозаполнение)

export function autocompleteForm(e) {
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

export function handleFormSubmit(e) {
  e.preventDefault();
  const name = popupTypeNewCard.querySelector(
    ".popup__input_type_card-name"
  ).value;
  const link = popupTypeNewCard.querySelector(".popup__input_type_url").value;
  // const isValid = name.length > 0 && link.length > 0;

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
