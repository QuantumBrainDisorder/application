

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
    structure.value = "GaAs 400\nGa0.80In0.20As 200A\nAl0.70Ga0.30As 10\nGa0.20In0.80As0.40Sb0.60 0.01um";
}

footer.style.color = "green";
footer.textContent = "Loaded!";