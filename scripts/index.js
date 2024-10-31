// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');
const cardTemplate = document.getElementById('card-template').content;

const createCardElement = function (card) {
    const cardElement = cardTemplate.cloneNode(true);
  
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').src = card.link;

    return cardElement;
}

const deleteCard = function (event) {
    event.target.parentElement.remove();
}

initialCards.forEach(function (card) {
    const cardElement = createCardElement(card);

    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  
    placesList.append(cardElement);
  })