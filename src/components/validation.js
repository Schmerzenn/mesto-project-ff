//ОШИБКА

const getErrorElementName = (element, formPopup) => {
  return formPopup.querySelector(`.${element.name}-input-error`);
};

// Передадим текст ошибки вторым параметром
const showInputError = (element, errorMessage, formPopup) => {
  const formError = getErrorElementName(element, formPopup);
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  element.setCustomValidity(errorMessage);
  formError.classList.add("form__input-error_active");
};

export const hideInputErrors = (popup) => {
  const errorInputs = popup.querySelectorAll(".popup__input");
  const form = popup.querySelector(".popup__form");
  errorInputs.forEach((element) => {
    hideInputError(element, form);
  });
};

const hideInputError = (element, formPopup) => {
  const formError = getErrorElementName(element, formPopup);
  element.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_active");
  // Очистим ошибку
  formError.textContent = "";
  element.setCustomValidity("");
};

export function isValid({ input, formPopup, popupInputTypeUrl }) {
  const regex = /^[a-zA-Zа-яА-Я\s-]{2,}$/;
  if (input.value.length === 0) {
    showInputError(input, "Это поле не заполнено", formPopup);
  } else if (input.value.length < 2) {
    showInputError(
      input,
      `Минимальное количество символов 2. Длина текста сейчас ${input.value.length} символов`,
      formPopup
    );
  } else if (!popupInputTypeUrl && !regex.test(input.value)) {
    showInputError(input, input.getAttribute("data-error"), formPopup);
  } else {
    hideInputError(input, formPopup, formPopup);
  }

  if (!input.validity.valid) {
    showInputError(input, input.validationMessage, formPopup);
  } else {
    hideInputError(input, formPopup, formPopup);
  }
}

export const checkInputsValid = ({ formInputs, form, popupButton }) => {
  formInputs.forEach((input) => {
    const popupInputTypeUrl = input.classList.contains("popup__input_type_url");

    input.addEventListener("input", (event) => {
      event.preventDefault();
      isValid({ input, formPopup: form, popupInputTypeUrl });
      toggleButtonState(formInputs, popupButton);
    });
  });
};

export const toggleButtonState = (formInputs, popupButton) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(formInputs)) {
    // сделай кнопку неактивной
    popupButton.disabled = true;
    popupButton.classList.add("form__submit_inactive");
  } else {
    // иначе сделай кнопку активной
    popupButton.disabled = false;
    popupButton.classList.remove("form__submit_inactive");
  }
};

const hasInvalidInput = (formInputs) => {
  // проходим по этому массиву методом some
  return formInputs.some((inputElement) => {
    return !inputElement.validity.valid && inputElement.length !== 0;
  });
};
