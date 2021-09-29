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


function panel__form__distribution__set__axis(event, property, axis) {
    switch(axis){
        case 'w':
            panel__form__distribution__w__axis__property.innerHTML = event.target.textContent
            panel__form__distribution__w__axis__property.dataset.property = property;
            localStorage.setItem('panel__form__distribution__w__axis__property__content', event.target.textContent);
            localStorage.setItem('panel__form__distribution__w__axis__property', property);
            break;
        case 'x':
            panel__form__distribution__x__axis__property.innerHTML = event.target.textContent
            panel__form__distribution__x__axis__property.dataset.property = property;
            localStorage.setItem('panel__form__distribution__x__axis__property__content', event.target.textContent);
            localStorage.setItem('panel__form__distribution__x__axis__property', property);
            break;
        case 'y':
            panel__form__distribution__y__axis__property.innerHTML = event.target.textContent
            panel__form__distribution__y__axis__property.dataset.property = property;
            localStorage.setItem('panel__form__distribution__y__axis__property__content', event.target.textContent);
            localStorage.setItem('panel__form__distribution__y__axis__property', property);
            break;
        case 'z':
            panel__form__distribution__z__axis__property.innerHTML = event.target.textContent
            panel__form__distribution__z__axis__property.dataset.property = property;
            localStorage.setItem('panel__form__distribution__z__axis__property__content', event.target.textContent);
            localStorage.setItem('panel__form__distribution__z__axis__property', property);
            break;
    }
}


panel__form__distribution__w__axis.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__w__axis') == null) {
        localStorage.setItem('panel__form__distribution__w__axis', 'true');
    }
    else {
        localStorage.removeItem("panel__form__distribution__w__axis");
    }
}
panel__form__distribution__x__axis.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__x__axis') == null) {
        localStorage.setItem('panel__form__distribution__x__axis', 'true');
    }
    else {
        localStorage.removeItem("panel__form__distribution__x__axis");
    }
}
panel__form__distribution__y__axis.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__y__axis') == null) {
        localStorage.setItem('panel__form__distribution__y__axis', 'true');
    }
    else {
        localStorage.removeItem("panel__form__distribution__y__axis");
    }
}
panel__form__distribution__z__axis.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__z__axis') == null) {
        localStorage.setItem('panel__form__distribution__z__axis', 'true');
    }
    else {
        localStorage.removeItem("panel__form__distribution__z__axis");
    }
}