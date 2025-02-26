// добавление и закрытие попапа
export const displayNone = (popup) => popup.classList.remove("visible");

export function closePopup(popup) {
  const handleClick = function (e) {
    if (
      e.target.classList.contains("popup__close") ||
      e.target.classList.contains("popup")
    ) {
      displayNone(popup);
      removeEventListeners(popup);
    }
  };

  const handleKeydown = (e) => {
    if (e.code === "Escape") {
      displayNone(popup);
      removeEventListeners(popup);
    }
  };

  popup.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);

  function removeEventListeners() {
    popup.removeEventListener("click", handleClick);
    document.removeEventListener("keydown", handleKeydown);
  }
}

export function setupPopup(openButton, popup) {
  openButton.addEventListener("click", function () {
    popup.classList.add("visible");
    closePopup(popup);
    if (openButton.classList.contains("profile__edit-button")) {
      const profileInfo = document.querySelector(".profile__info");
      const profileTitle =
        profileInfo.querySelector(".profile__title").textContent;
      const profileDescription = profileInfo.querySelector(
        ".profile__description"
      ).textContent;
      popup.querySelector(".popup__input_type_name").value = profileTitle;
      popup.querySelector(".popup__input_type_description").value =
        profileDescription;
    }
  });
}
