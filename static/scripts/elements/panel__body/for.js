panel__form__for__el.onclick = function(event) {
    if (localStorage.getItem('panel__form__for__el') == null) {
        localStorage.setItem('panel__form__for__el', 'true');
    }
    else {
        localStorage.removeItem("panel__form__for__el");
    }
}

panel__form__for__lh.onclick = function(event) {
    if (localStorage.getItem('panel__form__for__lh') == null) {
        localStorage.setItem('panel__form__for__lh', 'true');
    }
    else {
        localStorage.removeItem("panel__form__for__lh");
    }
}

panel__form__for__hh.onclick = function(event) {
    if (localStorage.getItem('panel__form__for__hh') == null) {
        localStorage.setItem('panel__form__for__hh', 'true');
    }
    else {
        localStorage.removeItem("panel__form__for__hh");
    }
}