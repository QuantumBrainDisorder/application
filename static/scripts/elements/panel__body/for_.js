panel__form__for___el.onclick = function(event) {
    if (localStorage.getItem('panel__form__for___el') == null) {
        localStorage.setItem('panel__form__for___el', 'true');

        panel__form__for___lh.checked = false;
        panel__form__for___hh.checked = false;
        localStorage.removeItem("panel__form__for___lh");
        localStorage.removeItem("panel__form__for___hh");
    }
    else {
        localStorage.removeItem("panel__form__for___el");
    }
}

panel__form__for___lh.onclick = function(event) {
    if (localStorage.getItem('panel__form__for___lh') == null) {
        localStorage.setItem('panel__form__for___lh', 'true');
        
        panel__form__for___el.checked = false;
        panel__form__for___hh.checked = false;
        localStorage.removeItem("panel__form__for___el");
        localStorage.removeItem("panel__form__for___hh");
    }
    else {
        localStorage.removeItem("panel__form__for___lh");
    }
}

panel__form__for___hh.onclick = function(event) {
    if (localStorage.getItem('panel__form__for___hh') == null) {
        localStorage.setItem('panel__form__for___hh', 'true');
        
        panel__form__for___lh.checked = false;
        panel__form__for___el.checked = false;
        localStorage.removeItem("panel__form__for___lh");
        localStorage.removeItem("panel__form__for___el");
    }
    else {
        localStorage.removeItem("panel__form__for___hh");
    }
}