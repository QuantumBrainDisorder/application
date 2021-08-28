footer.textContent = "Storage loading...";

if (localStorage.getItem("structure__unit") != null){
    structure__unit.innerHTML = localStorage.getItem("structure__unit");
}
else {
    structure__unit.innerHTML = "nm";
}

if (localStorage.getItem("structure") != null){
    structure.innerHTML = localStorage.getItem("structure");
}
else {
    structure.value = default__structure;
}

if (localStorage.getItem("resizer_l") != null) {
    resizer_l.style.left = localStorage.getItem("resizer_l");
    properties__scope.style.left = localStorage.getItem("resizer_l");
}

if (localStorage.getItem("resizer_r") != null) {
    resizer_r.style.left = localStorage.getItem("resizer_r");
    panel__scope.style.left = localStorage.getItem("resizer_r");
}

if (localStorage.getItem("structure__width") != null) {
    structure__scope.style.width = localStorage.getItem("structure__width");
}

if (localStorage.getItem("properties__width") != null) {
    properties__scope.style.width = localStorage.getItem("properties__width");
}

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