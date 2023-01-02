import { useState, useEffect } from 'react';
import api from '../utils/Api.js'
import Card from './Card'

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialData()
      .then((data) => {
        setUserName(data[0].name);
        setUserDescription(data[0].about);
        setUserAvatar(data[0].avatar);
        setCards(data[1]);
      })
  })

  return (
    <main className="content">
      <section className="traveler">
        <div className="traveler__left">
          <img src={userAvatar} alt="аватар пользователя" className="traveler__avatar" />
          <button onClick={props.onEditAvatar} className="traveler__change-avatar" type="button" aria-label="Редактирование аватара">
          </button>
          <div className="traveler__middle">
            <div className="traveler__name-and-button">
              <h1 className="traveler__name">{userName}</h1>
              <button onClick={props.onEditProfile} className="traveler__button-correct" type="button" aria-label="Редактирование профиля">
              </button>
            </div>
            <p className="traveler__about">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="traveler__button-add" type="button" aria-label="Добавление карточки"></button>
      </section>

      <section aria-label="Раздел с картинками" className="cards">
        <ul className="cards__list">
          {cards.map((card) =>
            <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
          )}

        </ul>
      </section>
    </main>
  );
}

export default Main;