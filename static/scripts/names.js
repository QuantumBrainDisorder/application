const properties__scope = document.getElementById("properties__scope");
const properties__unit = document.getElementById("properties__unit");
const properties__char = document.getElementById("properties__char");
const properties__properties = document.getElementById("properties__properties");
const properties__property = document.getElementById("properties__property");
const properties__textarea = document.getElementById("properties__textarea");
const properties__list = document.getElementById("properties__list");
const properties__right__wall = document.getElementById("properties__right__wall");

const structure = document.getElementById("structure");
const structure__scope = document.getElementById("structure__scope");
const structure__fieldset = document.getElementById("structure__fieldset");
const structure__legend = document.getElementById("structure__legend");
const structure__legend__ul = document.getElementById("structure__legend__ul");
const structure__legend__structure = document.getElementById("structure__legend__structure");
const structure__legend__unit = document.getElementById("structure__legend__unit");
const structure__unit = document.getElementById("structure__unit");
const structure__fieldset__rect = structure__fieldset.getBoundingClientRect();

const margin = structure__fieldset__rect.left;

const resizer_l = document.getElementById("resizer_l");
const resizer_l__button__on = document.getElementById("resizer_l__button__on");
const resizer_l__button__off = document.getElementById("resizer_l__button__off");

const resizer_r = document.getElementById("resizer_r");
const resizer_r__button__on = document.getElementById("resizer_r__button__on");
const resizer_r__button__off = document.getElementById("resizer_r__button__off");

const panel__scope = document.getElementById("panel__scope");
const panel__bar = document.getElementById("panel__bar");
const panel__bar__list = document.getElementById("panel__bar__list");
const panel__bar__type = document.getElementById("panel__bar__type");
const panel__bar__type__base = document.getElementById("panel__bar__type__base");
const panel__bar__type__list = document.getElementById('panel__bar__type__list');
const panel__bar__run = document.getElementById("panel__bar__run");
const panel__bar__save = document.getElementById('panel__bar__save');

const panel__form__orint = document.getElementById("panel__form__orint");
const panel__form__orint__orint = document.getElementById("panel__form__orint__orint");

const panel__form__distribution = document.getElementById("panel__form__distribution");
// const panel__form__distribution__al = document.getElementById("panel__form__distribution__al");
const panel__form__distribution__ii = document.getElementById("panel__form__distribution__ii");
const panel__form__distribution__submit = document.getElementById("panel__form__distribution__submit");
const panel__form__distribution__w__axis = document.getElementById("panel__form__distribution__w__axis");
const panel__form__distribution__x__axis = document.getElementById("panel__form__distribution__x__axis");
const panel__form__distribution__y__axis = document.getElementById("panel__form__distribution__y__axis");
const panel__form__distribution__z__axis = document.getElementById("panel__form__distribution__z__axis");
const panel__form__distribution__w__axis__property = document.getElementById('panel__form__distribution__w__axis__property');
const panel__form__distribution__x__axis__property = document.getElementById('panel__form__distribution__x__axis__property');
const panel__form__distribution__y__axis__property = document.getElementById('panel__form__distribution__y__axis__property');
const panel__form__distribution__z__axis__property = document.getElementById('panel__form__distribution__z__axis__property');

const panel__form__profile = document.getElementById("panel__form__profile");
const panel__form__profile__submit = document.getElementById("panel__form__profile__submit");

const panel__form__al = document.getElementById("panel__form__al");
const panel__form__al__input = document.getElementById("panel__form__al__input");
const panel__form__al__label = document.getElementById("panel__form__al__label");

const panel__form__space__resolution = document.getElementById("panel__form__space__resolution");
const panel__form__space__resolution__input = document.getElementById('panel__form__space__resolution__input');

const panel__form__wave__vector = document.getElementById('panel__form__wave__vector');
const panel__form__wave__vector__input = document.getElementById('panel__form__wave__vector__input');
// panel__form__band__electrons
// panel__form__band__electrons__input
// panel__form__band__electrons__del
// panel__form__band__electrons__dwf
// panel__form__band__electrons__dwf__normalised
// panel__form__band__holes
// panel__form__band__holes__input
// panel__form__band__holes__del
// panel__form__band__holes__dwf
// panel__form__band__holes__dwf__normalised
// panel__form__band__parameters
// panel__form__band__parameters__tle
// panel__form__band__parameters__ble
// panel__form__band__parameters__elr
// panel__form__band__electrons__del__label
// panel__form__band__electrons__dwf__label
// panel__form__band__electrons__dwf__normalised__label
const panel__form__band__electrons = document.getElementById("panel__form__band__electrons");
const panel__form__band__electrons__input = document.getElementById("panel__form__band__electrons__input");
const panel__form__band__electrons__del = document.getElementById("panel__form__band__electrons__del");
const panel__form__band__electrons__del__label = document.getElementById("panel__form__band__electrons__del__label");
const panel__form__band__electrons__dwf = document.getElementById("panel__form__band__electrons__dwf");
const panel__form__band__electrons__dwf__label = document.getElementById("panel__form__band__electrons__dwf__label");
const panel__form__band__electrons__dwf__normalised = document.getElementById("panel__form__band__electrons__dwf__normalised");
const panel__form__band__electrons__dwf__normalised__label = document.getElementById("panel__form__band__electrons__dwf__normalised__label");

const panel__form__band__holes = document.getElementById("panel__form__band__holes");
const panel__form__band__holes__input = document.getElementById("panel__form__band__holes__input");
const panel__form__band__holes__del = document.getElementById("panel__form__band__holes__del");
const panel__form__band__holes__del__label = document.getElementById("panel__form__band__holes__del__label");
const panel__form__band__holes__del__lh = document.getElementById('panel__form__band__holes__del__lh');
const panel__form__band__holes__del__lh__label = document.getElementById('panel__form__band__holes__del__lh__label');
const panel__form__band__holes__del__hh = document.getElementById('panel__form__band__holes__del__hh');
const panel__form__band__holes__del__hh__label = document.getElementById('panel__form__band__holes__del__hh__label');
const panel__form__band__holes__dwf = document.getElementById("panel__form__band__holes__dwf");
const panel__form__band__holes__dwf__label = document.getElementById("panel__form__band__holes__dwf__label");
const panel__form__band__holes__dwf__normalised = document.getElementById("panel__form__band__holes__dwf__normalised");
const panel__form__band__holes__dwf__normalised__label = document.getElementById("panel__form__band__holes__dwf__normalised__label");

const panel__form__band__parameters = document.getElementById("panel__form__band__parameters");
const panel__form__band__parameters__tle = document.getElementById("panel__form__band__parameters__tle");
const panel__form__band__parameters__ble = document.getElementById("panel__form__band__parameters__ble");
const panel__form__band__parameters__elr = document.getElementById("panel__form__band__parameters__elr");

const panel__form__wave__vector__parameters = document.getElementById('panel__form__wave__vector__parameters');
const panel__form__wave__vector__parameters__tx = document.getElementById('panel__form__wave__vector__parameters__tx');
const panel__form__wave__vector__parameters__bx = document.getElementById('panel__form__wave__vector__parameters__bx');
const panel__form__wave__vector__parameters__rx = document.getElementById('panel__form__wave__vector__parameters__rx');
const panel__form__wave__vector__parameters__ty = document.getElementById('panel__form__wave__vector__parameters__ty');
const panel__form__wave__vector__parameters__by = document.getElementById('panel__form__wave__vector__parameters__by');
const panel__form__wave__vector__parameters__ry = document.getElementById('panel__form__wave__vector__parameters__ry');

const panel__form__dos = document.getElementById('panel__form__dos');

const panel__form__input__label = document.getElementById("panel__form__input__label");
const panel__form__meta = document.getElementById("panel__form__meta");
const panel__form__input = document.getElementById("panel__form__input");
const panel__form__output__label = document.getElementById("panel__form__output__label");
const panel__form__output = document.getElementById("panel__form__output");

const footer = document.getElementById("footer");
const RDS = document.getElementById("RDS");
const ST = document.getElementById("ST");
const info = document.getElementById("info");
const LS = document.getElementById("LS");
const LC = document.getElementById("LC");
const LC__input = document.getElementById('LC__input');
const SC = document.getElementById("SC");
const VERSION = document.getElementById('VERSION');
const LN = document.getElementById('LN');


var css__vars = getComputedStyle(document.body);












