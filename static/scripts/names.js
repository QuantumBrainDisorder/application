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
const panel__bar__type__list = document.getElementById('panel__bar__type__list');
const panel__bar__run = document.getElementById("panel__bar__run");

const panel__form__orint = document.getElementById("panel__form__orint");
const panel__form__orint__orint = document.getElementById("panel__form__orint__orint");

const panel__form__distribution = document.getElementById("panel__form__distribution");
const panel__form__distribution__al = document.getElementById("panel__form__distribution__al");
const panel__form__distribution__ii = document.getElementById("panel__form__distribution__ii");
const panel__form__distribution__submit = document.getElementById("panel__form__distribution__submit")

const panel__form__profile = document.getElementById("panel__form__profile");
const panel__form__profile__al = document.getElementById("panel__form__profile__al");
const panel__form__profile__submit = document.getElementById("panel__form__profile__submit")

const panel__form__energy__profile = document.getElementById("panel__form__energy__profile")
const panel__form__energy__profile__del = document.getElementById("panel__form__energy__profile__del")
const panel__form__energy__profile__dwf = document.getElementById("panel__form__energy__profile__dwf")
const panel__form__energy__profile__deb = document.getElementById("panel__form__energy__profile__deb")
const panel__form__energy__profile__submit = document.getElementById("panel__form__energy__profile__submit")

const panel__form__meta = document.getElementById("panel__form__meta");
const panel__form__input = document.getElementById("panel__form__input");
const panel__form__figure = document.getElementById("panel__form__figure");
const panel__output = document.getElementById("panel__output");

const footer = document.getElementById("footer");
const RDS = document.getElementById("RDS");
const ST = document.getElementById("ST");
const info = document.getElementById("info");
const LS = document.getElementById("LS");
const LC = document.getElementById("LC");
const LC__input = document.getElementById('LC__input');
const SC = document.getElementById("SC");


var css__vars = getComputedStyle(document.body);