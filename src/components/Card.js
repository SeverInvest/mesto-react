function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button className="card__remove-button" type="button" aria-label="Удаление карточки"></button>
      <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__footer">
        <p className="card__description">{card.name}</p>
        <div className="card__heart-and-count-likes">
          <button className="card__heart" type="button" aria-label="Лайк"></button>
          <span className="card__count-likes">{Object.keys(card.likes).length}</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
