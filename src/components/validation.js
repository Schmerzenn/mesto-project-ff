export function renderLoading({ buttonElement, isLoading }) {
  if (isLoading) {
    buttonElement.disabled = true;
    buttonElement.textContent = "Сохранение...";
  } else {
    buttonElement.disabled = false;
    buttonElement.textContent = "Сохранить";
  }
}

export const hideInputErrors = (
  popup,
  { inputSelector, formSelector, inputErrorClass, errorClass }
) => {
  const errorInputs = popup.querySelectorAll(inputSelector);
  const form = popup.querySelector(formSelector);
  errorInputs.forEach((element) => {
    hideInputError({
      element,
      formPopup: form,
      inputErrorClass,
      errorClass,
    });
  });
};

export function enableValidation(form, validationConfig) {
  runValidate(form, validationConfig, true);
}

export function runValidate(form, validationConfig, subscribe = false) {
  const formInputs = Array.from(
    form.querySelectorAll(validationConfig.inputSelector)
  );
  const popupButton = form.querySelector(validationConfig.submitButtonSelector);
  handleInputsValid({
    formInputs,
    form,
    popupButton,
    subscribe,
    validationConfig,
  });
}

const getErrorElementName = (element, formPopup) => {
  return formPopup.querySelector(`.${element.name}-input-error`);
};

// Передадим текст ошибки вторым параметром
const showInputError = ({
  element,
  errorMessage,
  formPopup,
  inputErrorClass,
  errorClass,
}) => {
  const formError = getErrorElementName(element, formPopup);
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  element.setCustomValidity(errorMessage);
  element.classList.add(inputErrorClass);
  formError.classList.add(errorClass);
};

const hideInputError = ({
  element,
  formPopup,
  inputErrorClass,
  errorClass,
}) => {
  const formError = getErrorElementName(element, formPopup);
  element.classList.remove(inputErrorClass);
  formError.classList.remove(errorClass);
  // Очистим ошибку
  formError.textContent = "";
  element.setCustomValidity("");
};

function isValid({ input, formPopup, validationConfig, popupInputTypeUrl }) {
  const { inputErrorClass, errorClass } = validationConfig;
  const regex = /^[a-zA-Zа-яА-Я\s-]{2,}$/;
  if (input.value.length === 0) {
    showInputError({
      element: input,
      errorMessage: "Это поле не заполнено",
      formPopup,
      inputErrorClass,
      errorClass,
    });
  } else if (input.value.length < 2) {
    showInputError({
      element: input,
      errorMessage: `Минимальное количество символов 2. Длина текста сейчас ${input.value.length} символов`,
      formPopup,
      inputErrorClass,
      errorClass,
    });
  } else if (!popupInputTypeUrl && !regex.test(input.value)) {
    showInputError({
      element: input,
      errorMessage: input.getAttribute("data-error"),
      formPopup,
      inputErrorClass,
      errorClass,
    });
  } else {
    hideInputError({ element: input, formPopup, inputErrorClass, errorClass });
  }

  if (!input.validity.valid) {
    showInputError({
      element: input,
      errorMessage: input.validationMessage,
      formPopup,
      inputErrorClass,
      errorClass,
    });
  } else {
    hideInputError({ element: input, formPopup, inputErrorClass, errorClass });
  }
}

const handleInputsValid = ({
  formInputs,
  form,
  popupButton,
  subscribe = false,
  validationConfig,
}) => {
  formInputs.forEach((input) => {
    const popupInputTypeUrl = input.classList.contains(
      validationConfig.inputUrlClass
    );

    const validateInput = () => {
      isValid({ input, formPopup: form, popupInputTypeUrl, validationConfig });
      toggleButtonState({
        formInputs,
        popupButton,
        inactiveButtonClass: validationConfig.inactiveButtonClass,
      });
    };
    hideInputError({
      element: input,
      formPopup: form,
      inputErrorClass: validationConfig.inputErrorClass,
      errorClass: validationConfig.errorClass,
    });
    if (subscribe) {
      input.addEventListener("input", (event) => {
        event.preventDefault();
        validateInput();
      });
    }
    validateInput();
  });
};

const toggleButtonState = ({
  formInputs,
  popupButton,
  inactiveButtonClass,
}) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(formInputs)) {
    // сделай кнопку неактивной
    popupButton.disabled = true;
    popupButton.classList.add(inactiveButtonClass);
  } else {
    // иначе сделай кнопку активной
    popupButton.disabled = false;
    popupButton.classList.remove(inactiveButtonClass);
  }
};

const hasInvalidInput = (formInputs) => {
  // проходим по этому массиву методом some
  return formInputs.some((inputElement) => {
    return !inputElement.validity.valid && inputElement.length !== 0;
  });
};
