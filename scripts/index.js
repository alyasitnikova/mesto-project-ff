// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template').content;

const createCardElement = function (card , deleteCard) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = `${card.name}: фото местности`;

    cardElement.querySelector('.card__delete-button').addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
}

const deleteCard = function (element) {
    element.remove();
}

initialCards.forEach(function (card) {
    const cardElement = createCardElement(card, deleteCard);
  
    placesList.append(cardElement);
  })