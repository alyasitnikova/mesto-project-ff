export const createCardElement = function (
  card,
  cardTemplate,
  deleteCard,
  likeCard,
  openImage
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeElement = cardElement.querySelector(".card__like-button");

  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(
    ".card__image"
  ).alt = `${card.name}: фото местности`;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => deleteCard(cardElement));
  likeElement.addEventListener("click", () => likeCard(likeElement));

  cardElement
    .querySelector(".card__image")
    .addEventListener("click", () => openImage(card));

  return cardElement;
};

export const deleteCard = function (cardElement) {
  cardElement.remove();
};

export const likeCard = function (likeElement) {
  if (likeElement.className.includes("card__like-button_is-active")) {
    likeElement.classList.remove("card__like-button_is-active");
  } else {
    likeElement.classList.add("card__like-button_is-active");
  }
};
