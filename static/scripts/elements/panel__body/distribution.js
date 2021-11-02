// panel__form__distribution__al.onclick = function(event) {
//     if (localStorage.getItem('panel__form__distribution__al') == null) {
//         localStorage.setItem('panel__form__distribution__al', 'true');
//     }
//     else {
//         localStorage.removeItem("panel__form__distribution__al");
//     }
// }

panel__form__distribution__ii.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__ii') == null) {
        localStorage.setItem('panel__form__distribution__ii', 'true');

        panel__form__distribution__ii__r.style.display = 'initial';
        panel__form__distribution__ii__r__label.style.display = 'initial';
        panel__form__distribution__ii__pobd__label.style.display = 'initial';
    }
    else {
        panel__form__distribution__ii__r.style.display = 'none';
        
        panel__form__distribution__ii__r__label.style.display = 'none';

        panel__form__distribution__ii__pobd__label.style.display = 'none';

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
























panel__form__distribution__ii__r.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__distribution__ii__r.textContent == "") {
        panel__form__distribution__ii__r.textContent = "0.1";
      };
      panel__form__distribution__ii__r.blur();

      if(isNaN(panel__form__distribution__ii__r.textContent)){
        panel__form__distribution__ii__r.textContent = '0.1';
        localStorage.setItem("panel__form__distribution__ii__r", panel__form__distribution__ii__r.textContent);
      }
    }
}

panel__form__distribution__ii__r.addEventListener('focusout', function (e) {
      if (panel__form__distribution__ii__r.textContent == "") {
        panel__form__distribution__ii__r.textContent = "0.1";
      };
      
      if(isNaN(panel__form__distribution__ii__r.textContent)){
        panel__form__distribution__ii__r.textContent = '0.1';
        localStorage.setItem("panel__form__distribution__ii__r", panel__form__distribution__ii__r.textContent);
      }
})

panel__form__distribution__ii__r.oninput = function (event) {
  localStorage.setItem("panel__form__distribution__ii__r", panel__form__distribution__ii__r.textContent);
};



















panel__form__distribution__ii__pobd.onclick = function(event) {
    if (localStorage.getItem('panel__form__distribution__ii__pobd') == null) {
        localStorage.setItem('panel__form__distribution__ii__pobd', 'true');
    }
    else {
        localStorage.removeItem("panel__form__distribution__ii__pobd");
    }
}