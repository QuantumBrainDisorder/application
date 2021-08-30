const properties__scope = document.getElementById("properties__scope");
const properties__unit = document.getElementById("properties__unit");
const properties__char = document.getElementById("properties__char");
const properties__properties = document.getElementById("properties__properties");
const properties__property = document.getElementById("properties__property");
const properties__textarea = document.getElementById("properties__textarea");

const structure = document.getElementById("structure");
const structure__scope = document.getElementById("structure__scope");
const structure__fieldset = document.getElementById("structure__fieldset");
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

const RDS = document.getElementById("RDS");
const ST = document.getElementById("ST");
const info = document.getElementById("info");

const default__property__alpha__varshni = "GaAs 541\nGaSb 417\nInSb 320\nAlAs 885\nAlSb 420";
const default__property__beta__varshni = "GaAs 204\nGaSb 140\nInSb 170\nAlAs 530\nAlSb 140";
const default__property__biaxial__deformation__potential = "GaAs -2.00\nGaSb -2.00\nInSb -2.00\nAlAs -2.30\nAlSb -1.35";
const default__property__elastic__constant__11 = "GaAs 1.22\nGaSb 0.88\nInSb 0.68\nAlAs 1.25\nAlSb 0.87";
const default__property__elastic__constant__12 = "GaAs 566\nGaSb 402\nInSb 373\nAlAs 534\nAlSb 434";
const default__property__energy__gap = "GaAs 1.51\nGaSb 0.81\nInSb 0.23\nAlAs 3.10\nAlSb 2.39";
const default__property__hydrostatic__deformation__potential__of__conduction__band = "GaAs -7.17\nGaSb -7.50\nInSb -6.94\nAlAs -5.64\nAlSb -4.50";
const default__property__hydrostatic__deformation__potential__of__valence__band = "GaAs -1.16\nGaSb -0.80\nInSb -0.36\nAlAs -2.47\nAlSb -1.40";
const default__property__kane__parameter = "GaAs -1.94\nGaSb -1.64\nInSb -0.23\nAlAs -0.48\nAlSb -0.56";
const default__property__lattice__constant = "GaAs 5.64\nGaSb 6.08\nInSb 6.47\nAlAs 5.65\nAlSb 6.13";
const default__property__luttinger__parameter__1 = "GaAs 6.98\nGaSb 13.4\nInSb 34.8\nAlAs 3.76\nAlSb 5.18";
const default__property__luttinger__parameter__2 = "GaAs 2.06\nGaSb 4.70\nInSb 15.5\nAlAs 0.82\nAlSb 1.19";
const default__property__luttinger__parameter__3 = "GaAs 2.93\nGaSb 6.00\nInSb 16.5\nAlAs 1.42\nAlSb 1.97";
const default__property__matrix__element__of__kane__operator = "GaAs 28.8\nGaSb 27.0\nInSb 23.3\nAlAs 21.1\nAlSb 18.7";
const default__property__spin__orbit__split = "GaAs 341\nGaSb 760\nInSb 810\nAlAs 280\nAlSb 676";
const default__property__valence__band__offset = "GaAs -0.80\nGaSb -0.03\nInSb 0.00\nAlAs -1.33\nAlSb -0.41";

const default__property__unit__alpha__varshni = "ueV/K";
const default__property__unit__beta__varshni = "K";
const default__property__unit__biaxial__deformation__potential = "eV";
const default__property__unit__elastic__constant__11 = "TPa";
const default__property__unit__elastic__constant__12 = "GPa";
const default__property__unit__energy__gap = "eV";
const default__property__unit__hydrostatic__deformation__potential__of__conduction__band = "eV";
const default__property__unit__hydrostatic__deformation__potential__of__valence__band = "eV";
const default__property__unit__kane__parameter = "";
const default__property__unit__lattice__constant = "Angs.";
const default__property__unit__luttinger__parameter__1 = "";
const default__property__unit__luttinger__parameter__2 = "";
const default__property__unit__luttinger__parameter__3 = "";
const default__property__unit__matrix__element__of__kane__operator = "eV";
const default__property__unit__spin__orbit__split = "meV";
const default__property__unit__valence__band__offset = "eV";

const default__resizer_l = "30vw";
const default__resizer_r = "60vw";

const default__structure = "GaAs 400\nGa0.80In0.20As 200A\nAl0.70Ga0.30As 10\nGa0.20In0.80As0.40Sb0.60 0.01um";
const default__structure__unit = "nm";

var css__vars = getComputedStyle(document.body);