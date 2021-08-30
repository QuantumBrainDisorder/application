
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

properties__char.innerHTML = "<i>E<sub>g</sub></i>";
properties__property.innerHTML = "Energy Gap";
properties__property.title = "energy__gap";
properties__unit.innerHTML = "eV";
properties__textarea.value = localStorage.getItem("properties__energy__gap");


panel__scope.style.left = localStorage.getItem("resizer_r");
properties__scope.style.left = localStorage.getItem("resizer_l");
properties__scope.style.width = localStorage.getItem("properties__width");
resizer_l.style.left = localStorage.getItem("resizer_l");
resizer_r.style.left = localStorage.getItem("resizer_r");
structure.innerHTML = localStorage.getItem("structure");
structure__unit.innerHTML = localStorage.getItem("structure__unit");
structure__scope.style.width = localStorage.getItem("structure__width");


    