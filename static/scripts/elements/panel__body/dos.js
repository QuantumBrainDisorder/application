panel__form__dos__2d.onclick = function(event) {
    if (localStorage.getItem('panel__form__dos__2d') == null) {
        localStorage.setItem('panel__form__dos__2d', 'true');
    }
    else {
        localStorage.removeItem("panel__form__dos__2d");
    }
}

panel__form__dos__3d.onclick = function(event) {
    if (localStorage.getItem('panel__form__dos__3d') == null) {
        localStorage.setItem('panel__form__dos__3d', 'true');
    }
    else {
        localStorage.removeItem("panel__form__dos__3d");
    }
}

panel__form__dos__merged.onclick = function(event) {
    if (localStorage.getItem('panel__form__dos__merged') == null) {
        localStorage.setItem('panel__form__dos__merged', 'true');

        // panel__form__dos__2d.checked = true;
        // localStorage.setItem('panel__form__dos__2d', 'true');
        // panel__form__dos__3d.checked = true;
        // localStorage.setItem('panel__form__dos__3d', 'true');
    }
    else {
        localStorage.removeItem("panel__form__dos__merged");
        // panel__form__dos__2d.disabled = false;
        // panel__form__dos__3d.disabled = false;
    }
}