panel__form__al__input.onclick = function(event) {
    if (localStorage.getItem('panel__form__al') == null) {
        localStorage.setItem('panel__form__al', 'true');
    }
    else {
        localStorage.removeItem("panel__form__al");
    }
}

