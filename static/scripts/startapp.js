footer.style.color = "black";
footer.textContent = "Storage loading...";

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
    structure.value = default__structure;
}

footer.style.color = "green";
footer.textContent = "Loaded!";