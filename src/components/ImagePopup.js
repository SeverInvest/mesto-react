function ImagePopup(props) {
  return (

    <div className={`popup popup_type_photo ${props.isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__photo-container">
        <img
          src={props.card ? props.card.link : ""}
          alt={props.card ? props.card.name : ""}
          className="popup__photo" />
        <p className="popup__photo-description">
          {props.card ? props.card.name : ""}
        </p>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрытие попапа"
          onClick={props.onClose}>
        </button>
      </div>
    </div>
  );
}

export default ImagePopup;