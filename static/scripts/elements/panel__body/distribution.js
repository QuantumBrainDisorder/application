panel__form__distribution__al.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__al') == null) {
        localStorage.setItem('panel__form__distribution__al', 'true');
    }
    else {
        localStorage.removeItem("panel__form__distribution__al");
    }
}

panel__form__distribution__ii.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__ii') == null) {
        localStorage.setItem('panel__form__distribution__ii', 'true');
    }
    else {
        localStorage.removeItem("panel__form__distribution__ii");
    }

    // panel__form__meta.textContent = "a\na\na\na";
    // panel__form__meta.dispatchEvent(new InputEvent("input", {
    //     bubbles: true,
    //     cancelable: true,
    //     view: window,
    // }));
}


// panel__form__meta.oninput = function(event) {
//     panel__form__meta.style.height = panel__form__meta.scrollHeight + "px";
// }