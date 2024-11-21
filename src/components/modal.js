const handleEscapeKeydown = function (e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    hidePopup(openedPopup);
  }
};

const handleClickOverlay = function (e) {
  const openedPopup = document.querySelector(".popup_is-opened");
  if (e.target === openedPopup) {
    hidePopup(openedPopup);
  }
};

export const hidePopup = function (popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscapeKeydown);
  popupElement.removeEventListener("click", handleClickOverlay);
};

export const showPopup = function (popupElement) {
  popupElement.classList.add("popup_is-opened");
  popupElement
    .querySelector(".popup__close")
    .addEventListener("click", () => hidePopup(popupElement), { once: true });
  popupElement.addEventListener("click", handleClickOverlay);
  document.addEventListener("keydown", handleEscapeKeydown);
};
