const footer = document.getElementById("footer");
const properties__scope = document.getElementById("properties__scope");
const structure = document.getElementById("structure");
const structure__scope = document.getElementById("structure__scope");
const structure__fieldset = document.getElementById("structure__fieldset");
const structure__unit = document.getElementById("structure__unit");
const resizer_l = document.getElementById("resizer_l");
const resizer_r = document.getElementById("resizer_r");
const panel__scope = document.getElementById("panel__scope");

//const structure__rect = structure.getBoundingClientRect();
const structure__fieldset__rect = structure__fieldset.getBoundingClientRect();

const margin = structure__fieldset__rect.left;

const default__structure = "GaAs 400\nGa0.80In0.20As 200A\nAl0.70Ga0.30As 10\nGa0.20In0.80As0.40Sb0.60 0.01um";
