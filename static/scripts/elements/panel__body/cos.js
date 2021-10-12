panel__form__cos__2d.onclick = function(event) {
    if (localStorage.getItem('panel__form__cos__2d') == null) {
        localStorage.setItem('panel__form__cos__2d', 'true');
    }
    else {
        localStorage.removeItem("panel__form__cos__2d");
    }
}

panel__form__cos__3d.onclick = function(event) {
    if (localStorage.getItem('panel__form__cos__3d') == null) {
        localStorage.setItem('panel__form__cos__3d', 'true');
    }
    else {
        localStorage.removeItem("panel__form__cos__3d");
    }
}

panel__form__cos__merged.onclick = function(event) {
    if (localStorage.getItem('panel__form__cos__merged') == null) {
        localStorage.setItem('panel__form__cos__merged', 'true');
    }
    else {
        localStorage.removeItem("panel__form__cos__merged");
    }
}