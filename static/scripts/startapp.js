
if (localStorage.getItem("resizer_l__clicked") != null) {
    structure__scope.style.display = "none";
    resizer_l__button__on.style.display = "none";
    resizer_l.style.cursor = "default";
    resizer_l__button__off.parentElement.style.cursor = "default";
    resizer_l__button__off.style.display = "block";
    properties__scope.style.left = 0;
    resizer_l.removeEventListener("mousedown", mousedown_l);
}

if (localStorage.getItem("resizer_r__clicked") != null) {
    properties__scope.style.display = "none";
    resizer_r__button__on.style.display = "none";
    resizer_r.style.cursor = "default";
    resizer_r__button__off.parentElement.style.cursor = "default";
    resizer_r__button__off.style.display = "block";
    panel__scope.style.left = structure__scope.style.width + "px";
    resizer_r.removeEventListener("mousedown", mousedown_r);
    resizer_l.style.display = "none";
}


if (localStorage.getItem('properties__property__dblclicked') == null) {
    properties__property.innerHTML = localStorage.getItem('properties__property__content');
}
else {
    properties__property.innerHTML = '...';
}

switch (localStorage.getItem('footer__theme')) {
    case 'A':   ST.title = 'Switch theme to the B'; break;
    case 'B':   ST.title = 'Switch theme to the C'; break;
    case 'C':   ST.title = 'Switch theme to the A'; break;
}

properties__char.innerHTML = localStorage.getItem('properties__property__char');
properties__property.title = localStorage.getItem('properties__property__content');
properties__property.dataset.content = localStorage.getItem('properties__property__content');
properties__property.dataset.name = localStorage.getItem('properties__property__name');
properties__unit.innerHTML = localStorage.getItem('properties__property__unit');
properties__textarea.value = localStorage.getItem("property__" + properties__property.dataset.name);

if (localStorage.getItem('panel__bar__type__list__height') == null) {
    localStorage.setItem('panel__bar__type__list__height', panel__scope.getBoundingClientRect().bottom - panel__bar__type.getBoundingClientRect().bottom + "px");
}
panel__bar__type__list.style.height = localStorage.getItem('panel__bar__type__list__height');
panel__bar.style.height = 1.3 * margin + "px";
panel__scope.style.left = localStorage.getItem("resizer_r");
panel__bar__type.innerHTML = localStorage.getItem("panel__bar__type__content");
panel__bar__type.dataset.type = localStorage.getItem("panel__bar__type");


properties__scope.style.left = localStorage.getItem("resizer_l");
properties__scope.style.width = localStorage.getItem("properties__width");

resizer_l.style.left = localStorage.getItem("resizer_l");
resizer_r.style.left = localStorage.getItem("resizer_r");

structure.innerHTML = localStorage.getItem("structure");
structure__unit.innerHTML = localStorage.getItem("structure__unit");
structure__scope.style.width = localStorage.getItem("structure__width");

if (localStorage.getItem("structure__legend__dblclicked") != null) {
    structure__legend__structure.textContent = "...";
}

if (localStorage.getItem('properties__list__width') == null) {
    localStorage.setItem('properties__list__width', properties__property.getBoundingClientRect().right - properties__property.getBoundingClientRect().left + "px");
}
properties__list.style.width = localStorage.getItem('properties__list__width');

if (localStorage.getItem('properties__list__height') == null) {
    localStorage.setItem('properties__list__height', properties__scope.getBoundingClientRect().bottom - properties__properties.getBoundingClientRect().bottom + "px");
}
properties__list.style.height = localStorage.getItem('properties__list__height');









if (localStorage.getItem("panel__form__orint__orint") != null) {
    panel__form__orint__orint.checked = true;
}

// if (localStorage.getItem("panel__form__distribution__al") != null) {
//     panel__form__distribution__al.checked = true;
// }

if (localStorage.getItem("panel__form__distribution__ii") != null) {
    panel__form__distribution__ii.checked = true;
}



panel__form__space__resolution__input.textContent = localStorage.getItem('panel__form__space__resolution__input');

panel__form__wave__vector__input.textContent = localStorage.getItem('panel__form__wave__vector__input');


if (localStorage.getItem("panel__form__al") != null) {
    panel__form__al__input.checked = true;
}
panel__form__profile__property.innerHTML = localStorage.getItem('panel__form__profile__property__content');
panel__form__profile__property.dataset.property = localStorage.getItem('panel__form__profile__property');


// panel__form__band__electrons__del__label
// panel__form__band__electrons__dwf__label
// panel__form__band__electrons__dwf__normalised__label
if (localStorage.getItem("panel__form__band__electrons__input") != null) {
    panel__form__band__electrons__input.checked = true;
    panel__form__band__electrons__dwf__label.style.display = 'initial';
    panel__form__band__electrons__del__label.style.display = 'initial';
}
else {
    panel__form__band__electrons__del__label.style.display = 'none';
    panel__form__band__electrons__dwf__label.style.display = 'none';
}
if (localStorage.getItem("panel__form__band__electrons__del") != null) {
    panel__form__band__electrons__del.checked = true;
}
if (localStorage.getItem("panel__form__band__electrons__dwf") != null) {
    panel__form__band__electrons__dwf.checked = true;
    panel__form__band__electrons__dwf__normalised__label.style.display = 'initial';
}
else {
    panel__form__band__electrons__dwf__normalised__label.style.display = 'none';
}
if (localStorage.getItem("panel__form__band__electrons__dwf__normalised") != null) {
    panel__form__band__electrons__dwf__normalised.checked = true;
}


if (localStorage.getItem("panel__form__band__holes__input") != null) {
    panel__form__band__holes__input.checked = true;
    panel__form__band__holes__del__label.style.display = 'initial';
    panel__form__band__holes__dwf__label.style.display = 'initial';
}
else {
    panel__form__band__holes__del__label.style.display = 'none';
    panel__form__band__holes__dwf__label.style.display = 'none';
}
if (localStorage.getItem("panel__form__band__holes__del") != null) {
    panel__form__band__holes__del.checked = true;
    panel__form__band__holes__del__lh__label.style.display = 'initial';
    panel__form__band__holes__del__hh__label.style.display = 'initial';
}
else {
    panel__form__band__holes__del__lh__label.style.display = 'none';
    panel__form__band__holes__del__hh__label.style.display = 'none';
}
if (localStorage.getItem("panel__form__band__holes__del__lh") != null) {
    panel__form__band__holes__del__lh.checked = true;
}
if (localStorage.getItem("panel__form__band__holes__del__hh") != null) {
    panel__form__band__holes__del__hh.checked = true;
}
if (localStorage.getItem("panel__form__band__holes__dwf") != null) {
    panel__form__band__holes__dwf.checked = true;
    panel__form__band__holes__dwf__normalised__label.style.display = 'initial';
}
else {
    panel__form__band__holes__dwf__normalised__label.style.display = 'none';
}
if (localStorage.getItem("panel__form__band__holes__dwf__normalised") != null) {
    panel__form__band__holes__dwf__normalised.checked = true;
}

panel__form__band__parameters__tle.textContent = localStorage.getItem('panel__form__band__parameters__tle');
panel__form__band__parameters__ble.textContent = localStorage.getItem('panel__form__band__parameters__ble');
panel__form__band__parameters__elr.textContent = localStorage.getItem('panel__form__band__parameters__elr');


if (localStorage.getItem("panel__form__input") != null) {
    panel__form__input.style.display = "block";
}
if (localStorage.getItem("panel__form__meta") != null) {
    panel__form__meta.style.display = "block";
}
if (localStorage.getItem("panel__form__output") != null) {
    panel__form__output.style.display = "block";
}

panel__form__distribution__w__axis__property.innerHTML = localStorage.getItem('panel__form__distribution__w__axis__property__content');
panel__form__distribution__w__axis__property.dataset.property = localStorage.getItem('panel__form__distribution__w__axis__property');
panel__form__distribution__x__axis__property.innerHTML = localStorage.getItem('panel__form__distribution__x__axis__property__content');
panel__form__distribution__x__axis__property.dataset.property = localStorage.getItem('panel__form__distribution__x__axis__property');
panel__form__distribution__y__axis__property.innerHTML = localStorage.getItem('panel__form__distribution__y__axis__property__content');
panel__form__distribution__y__axis__property.dataset.property = localStorage.getItem('panel__form__distribution__y__axis__property');
panel__form__distribution__z__axis__property.innerHTML = localStorage.getItem('panel__form__distribution__z__axis__property__content');
panel__form__distribution__z__axis__property.dataset.property = localStorage.getItem('panel__form__distribution__z__axis__property');
if (localStorage.getItem("panel__form__distribution__w__axis") != null) {
    panel__form__distribution__w__axis.checked = true;
}
else {
    panel__form__distribution__w__axis.checked = false;
}
if (localStorage.getItem("panel__form__distribution__x__axis") != null) {
    panel__form__distribution__x__axis.checked = true;
}
else {
    panel__form__distribution__x__axis.checked = false;
}
if (localStorage.getItem("panel__form__distribution__y__axis") != null) {
    panel__form__distribution__y__axis.checked = true;
}
else {
    panel__form__distribution__y__axis.checked = false;
}
if (localStorage.getItem("panel__form__distribution__z__axis") != null) {
    panel__form__distribution__z__axis.checked = true;
}
else {
    panel__form__distribution__z__axis.checked = false;
}



class panel__bar__type__textContent {constructor(textContent){this.textContent = textContent}};
class panel__bar__type__target {     constructor(target)     {this.target = new panel__bar__type__textContent(target)}};
event__target__textContent = new panel__bar__type__target(localStorage.getItem('panel__bar__type__content'));
set__panel__bar__type(event__target__textContent, localStorage.getItem('panel__bar__type'));













function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


// Example POST method implementation:
async function data__exchange(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  









