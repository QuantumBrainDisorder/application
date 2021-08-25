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

// if (localStorage.getItem("panel__width") != null) {
//     properties__scope.style.width = localStorage.getItem("panel__width");
// }

if (localStorage.getItem("properties__width") != null) {
    properties__scope.style.width = localStorage.getItem("properties__width");
}



