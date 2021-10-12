panel__form__ldos__2d.onclick = function(event) {
    if (localStorage.getItem('panel__form__ldos__2d') == null) {
        localStorage.setItem('panel__form__ldos__2d', 'true');

        panel__form__ldos__3d.checked = false;
        panel__form__ldos__merged.checked = false;
        localStorage.removeItem("panel__form__ldos__3d");
        localStorage.removeItem("panel__form__ldos__merged");
    }
    else {
        localStorage.removeItem("panel__form__ldos__2d");
    }
}

panel__form__ldos__3d.onclick = function(event) {
    if (localStorage.getItem('panel__form__ldos__3d') == null) {
        localStorage.setItem('panel__form__ldos__3d', 'true');

        panel__form__ldos__2d.checked = false;
        panel__form__ldos__merged.checked = false;
        localStorage.removeItem("panel__form__ldos__2d");
        localStorage.removeItem("panel__form__ldos__merged");
    }
    else {
        localStorage.removeItem("panel__form__ldos__3d");
    }
}


panel__form__ldos__merged.onclick = function(event) {
    if (localStorage.getItem('panel__form__ldos__merged') == null) {
        localStorage.setItem('panel__form__ldos__merged', 'true');

        panel__form__ldos__3d.checked = false;
        panel__form__ldos__2d.checked = false;
        localStorage.removeItem("panel__form__ldos__3d");
        localStorage.removeItem("panel__form__ldos__2d");
    }
    else {
        localStorage.removeItem("panel__form__ldos__merged");
    }
}
