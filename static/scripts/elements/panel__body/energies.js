panel__form__energies__del.onclick = function(event) {
    if (localStorage.getItem('panel__form__energies__del') == null) {
        localStorage.setItem('panel__form__energies__del', 'true');
    }
    else {
        localStorage.removeItem("panel__form__energies__del");
    }
}


panel__form__energies__dwf.onclick = function(event) {
    if (localStorage.getItem('panel__form__energies__dwf') == null) {
        localStorage.setItem('panel__form__energies__dwf', 'true');
    }
    else {
        localStorage.removeItem("panel__form__energies__dwf");
    }
}

panel__form__energies__deb.onclick = function(event) {
    if (localStorage.getItem('panel__form__energies__deb') == null) {
        localStorage.setItem('panel__form__energies__deb', 'true');
    }
    else {
        localStorage.removeItem("panel__form__energies__deb");
    }
}
