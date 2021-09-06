panel__form__profile__al.onclick = function(event) {
    if (localStorage.getItem('panel__form__profile__al') == null) {
        localStorage.setItem('panel__form__profile__al', 'true');
    }
    else {
        localStorage.removeItem("panel__form__profile__al");
    }
}
