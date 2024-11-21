import { initialCards } from "./cards";
import "../pages/index.css";
import { createCardElement, deleteCard, likeCard } from "../components/card";
import { hidePopup, showPopup } from "../components/modal";

// Глобальные константы и элементы DOM
const placesList = document.querySelector(".places__list");
const cardTemplate = document.getElementById("card-template").content;

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

const titleElement = document.querySelector(".profile__title");
const descriptionElemet = document.querySelector(".profile__description");

const editFormElement = editPopup.querySelector(".popup__form");
const addFormElement = addPopup.querySelector(".popup__form");

const cardNameInput = addFormElement.querySelector(
  ".popup__input_type_card-name"
);
const cardLinkInput = addFormElement.querySelector(".popup__input_type_url");

const nameInput = editFormElement.querySelector(".popup__input_type_name");
const jobInput = editFormElement.querySelector(
  ".popup__input_type_description"
);

// Добавление класса всем попапам для плавной анимации
editPopup.classList.add("popup_is-animated");
addPopup.classList.add("popup_is-animated");
imagePopup.classList.add("popup_is-animated");

// Обработчики событий
const handleEditFormSubmit = function (e) {
  e.preventDefault();

  titleElement.textContent = nameInput.value;
  descriptionElemet.textContent = jobInput.value;

  hidePopup(editPopup);
};

const handleAddFormSubmit = function (e) {
  e.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  cardNameInput.value = "";
  cardLinkInput.value = "";

  const newCardElement = createCardElement(
    newCard,
    cardTemplate,
    deleteCard,
    likeCard,
    openImage
  );

  placesList.prepend(newCardElement);

  hidePopup(addPopup);
};

const openImage = function (card) {
  imagePopup.querySelector(".popup__caption").textContent = card.name;
  imagePopup.querySelector(".popup__image").src = card.link;
  imagePopup.querySelector(
    ".popup__image"
  ).alt = `${card.name}: фото местности`;
  showPopup(imagePopup);
};

// Создание карточек и вставка в DOM
initialCards.forEach(function (card) {
  const cardElement = createCardElement(
    card,
    cardTemplate,
    deleteCard,
    likeCard,
    openImage
  );

  placesList.append(cardElement);
});

// Слушатели кликов по кнопкам редактирования и добавления карточки
editButton.addEventListener("click", () => {
  nameInput.value = titleElement.textContent;
  jobInput.value = descriptionElemet.textContent;

  editFormElement.addEventListener("submit", handleEditFormSubmit);

  showPopup(editPopup);
});

addButton.addEventListener("click", () => {
  addFormElement.addEventListener("submit", handleAddFormSubmit);

  showPopup(addPopup);
});
