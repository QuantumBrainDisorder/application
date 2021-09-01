function set__property(event, property) {
  switch (property) {     
    case "alpha__varshni": set__property__body(event, "<i>&alpha;</i>", property, "&mu;eV/K"); break;
    case "beta__varshni": set__property__body(event, "<i>&beta;</i>", property, "K"); break;
    case "biaxial__deformation__potential": set__property__body(event, "<i>b</i>", property, "eV"); break;
    case "elastic__constant__11": set__property__body(event, "<i>c<sub>11</sub></i>", property, "TPa"); break;
    case "elastic__constant__12": set__property__body(event, "<i>c<sub>12</sub></i>", property, "GPa"); break;
    case "energy__gap": set__property__body(event, "<i>E<sub>g</sub></i>", property, "eV"); break;
    case "hydrostatic__deformation__potential__of__conduction__band": set__property__body(event, "<i>a<sub>c</sub></i>", property, "eV"); break;
    case "hydrostatic__deformation__potential__of__valence__band": set__property__body(event, "<i>a<sub>v</sub></i>", property, "eV"); break;
    case "kane__parameter": set__property__body(event, "<i>F</i>", property, ""); break;
    case "lattice__constant": set__property__body(event, "<i>a<sub>lc</sub></i>", property, "&#8491;"); break;
    case "luttinger__parameter__1": set__property__body(event, "<i>&gamma;<sub>1</sub></i>", property, ""); break;
    case "luttinger__parameter__2": set__property__body(event, "<i>&gamma;<sub>2</sub></i>", property, ""); break;
    case "luttinger__parameter__3": set__property__body(event, "<i>&gamma;<sub>3</sub></i>", property, ""); break;
    case "matrix__element__of__kane__operator": set__property__body(event, "<i>E<sub>p</sub></i>", property, "eV"); break;
    case "spin__orbit__split": set__property__body(event, "<i>&Delta;<sub>so</sub></i>", property, "meV"); break;
    case "valence__band__offset": set__property__body(event, "<i>VBO</i>", property, "eV"); break;
  }
}

function set__property__body(event, char, property, unit) {
  properties__char.innerHTML = char;
  properties__property.innerHTML = event.target.textContent;
  properties__property.dataset.name = property;
  properties__unit.innerHTML = unit;
  properties__textarea.value = localStorage.getItem("property__" + property);
}

properties__textarea.oninput = function (event) {
  localStorage.setItem("property__" + properties__property.dataset.name, properties__textarea.value);
}