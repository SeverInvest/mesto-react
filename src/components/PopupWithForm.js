function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__header">{props.title}</h2>
        <form method="post" className="form" name={props.name} id={props.name} noValidate>
          {props.children}
          <button className="form__submit" type="submit" aria-label={props.ariaLabel} name={`popup-form-submit_${props.name}`}>{props.buttonText}</button>
        </form>
        <button onClick={props.onClose} className="popup__close" type="button" aria-label="Закрытие попапа"></button>
      </div>
    </section>
  );

}
export default PopupWithForm;
