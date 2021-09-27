
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

if (localStorage.getItem("panel__form__distribution__al") != null) {
    panel__form__distribution__al.checked = true;
}

if (localStorage.getItem("panel__form__distribution__ii") != null) {
    panel__form__distribution__ii.checked = true;
}

if (localStorage.getItem("panel__form__profile__al") != null) {
    panel__form__profile__al.checked = true;
}

if (localStorage.getItem("panel__form__energies__del") != null) {
    panel__form__energy__profile__del.checked = true;
}

if (localStorage.getItem("panel__form__energies__dwf") != null) {
    panel__form__energy__profile__dwf.checked = true;
}

if (localStorage.getItem("panel__form__energies__deb") != null) {
    panel__form__energy__profile__deb.checked = true;
}


if (localStorage.getItem("panel__form__input") != null) {
    panel__form__input.style.display = "block";
}
if (localStorage.getItem("panel__form__meta") != null) {
    panel__form__meta.style.display = "block";
}
if (localStorage.getItem("panel__form__figure") != null) {
    panel__form__figure.style.display = "block";
}














