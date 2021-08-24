if (localStorage.getItem("structure__unit")){
    structure__unit.innerHTML = localStorage.getItem("structure__unit");
}
else {
    structure__unit.innerHTML = "nm";
}

if (localStorage.getItem("structure")){
    structure.innerHTML = localStorage.getItem("structure");
}
else {
    structure.value= "GaAs";
}
