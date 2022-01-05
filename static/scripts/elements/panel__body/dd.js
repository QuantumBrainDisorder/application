panel__form__dd__input.onclick = function(event) {
    if (localStorage.getItem('panel__form__dd__input') == null) {
        localStorage.setItem('panel__form__dd__input', 'true');
    }
    else {
        localStorage.removeItem("panel__form__dd__input");
    }
}

