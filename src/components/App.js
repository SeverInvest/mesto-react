import { useState } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        ariaLabel="Сохранить изменения"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              required
              minLength="2"
              maxLength="40"
              type="text"
              placeholder="Введите свое имя"
              className="form__input form__input_type_name"
              name="name"
              id="input-name" />
            <span className="error" id="input-name-error"></span>
            <input
              required
              minLength="2"
              maxLength="200"
              type="text"
              placeholder="Напишите немного о себе"
              className="form__input form__input_type_about"
              name="about"
              id="input-about" />
            <span className="error" id="input-about-error"></span>
          </>
        }
      />

      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        ariaLabel="Добавление карточки"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              required
              minLength="2"
              maxLength="30"
              type="text"
              placeholder="Название"
              className="form__input form__input_type_place"
              name="name"
              id="place-header" />
            <span className="error" id="place-header-error"></span>
            <input
              required
              type="url"
              placeholder="Ссылка на картинку"
              className="form__input form__input_type_link"
              name="link"
              id="link" />
            <span className="error" id="link-error"></span>
          </>
        }
      />

      <ImagePopup
        card={selectedCard}
        isOpen={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        ariaLabel="Удаление карточки"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="upd-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        ariaLabel="Сохранение данных формы"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              required
              type="url"
              placeholder="Ссылка на аватар"
              className="form__input form__input_type_link"
              name="avatar"
              id="link-avatar" />
            <span className="error" id="link-avatar-error"></span>
          </>
        }
      />

    </div>
  );
}

export default App;
