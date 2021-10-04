
function panel__form__profile__set(event, property) {
    panel__form__profile__property.innerHTML = event.target.textContent
    panel__form__profile__property.dataset.property = property;
    localStorage.setItem('panel__form__profile__property__content', event.target.textContent);
    localStorage.setItem('panel__form__profile__property', property);
}
