function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button className="card__remove-button" type="button" aria-label="Удаление карточки"></button>
      <img className="card__photo" src={props.card.link} alt="" onClick={handleClick} />
      <div className="card__footer">
        <p className="card__description">{props.card.name}</p>
        <div className="card__heart-and-count-likes">
          <button className="card__heart" type="button" aria-label="Лайк"></button>
          <span className="card__count-likes">0</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
