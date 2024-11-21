const handleEscapeKeydown = function (e, popupElement) {
  if (e.key === "Escape") {
    hidePopup(popupElement);
    document.removeEventListener("keydown", (e) =>
      handleEscapeKeydown(e, popupElement)
    );
  }
};

const handleClickOverlay = function (e, popupElement) {
  if (e.target === popupElement) {
    hidePopup(popupElement);
    popupElement.removeEventListener("click", (e) =>
      handleClickOverlay(e, popupElement)
    );
  }
};

export const hidePopup = function (popupElement) {
  popupElement.classList.remove("popup_is-opened");
};

export const showPopup = function (popupElement) {
  popupElement.classList.add("popup_is-opened");
  popupElement
    .querySelector(".popup__close")
    .addEventListener("click", () => hidePopup(popupElement), { once: true });
  popupElement.addEventListener("click", (e) =>
    handleClickOverlay(e, popupElement)
  );
  document.addEventListener("keydown", (e) =>
    handleEscapeKeydown(e, popupElement)
  );
};
