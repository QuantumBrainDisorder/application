panel__form__energy__profile__del.onclick = function(event) {
    if (localStorage.getItem('panel__form__energy__profile__del') == null) {
        localStorage.setItem('panel__form__energy__profile__del', 'true');
    }
    else {
        localStorage.removeItem("panel__form__energy__profile__del");
    }
}


panel__form__energy__profile__dwf.onclick = function(event) {
    if (localStorage.getItem('panel__form__energy__profile__dwf') == null) {
        localStorage.setItem('panel__form__energy__profile__dwf', 'true');
    }
    else {
        localStorage.removeItem("panel__form__energy__profile__dwf");
    }
}

panel__form__energy__profile__deb.onclick = function(event) {
    if (localStorage.getItem('panel__form__energy__profile__deb') == null) {
        localStorage.setItem('panel__form__energy__profile__deb', 'true');
    }
    else {
        localStorage.removeItem("panel__form__energy__profile__deb");
    }
}
