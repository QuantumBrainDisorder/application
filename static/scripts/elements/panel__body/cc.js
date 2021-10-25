panel__form__cc__ho.onclick = function(event) {
    if (localStorage.getItem('panel__form__cc__ho') == null) {
        localStorage.setItem('panel__form__cc__ho', 'true');
    }
    else {
        localStorage.removeItem("panel__form__cc__ho");
    }
}


panel__form__cc__el.onclick = function(event) {
    if (localStorage.getItem('panel__form__cc__el') == null) {
        localStorage.setItem('panel__form__cc__el', 'true');
    }
    else {
        localStorage.removeItem("panel__form__cc__el");
    }
}
