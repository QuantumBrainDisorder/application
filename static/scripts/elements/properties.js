function set__property(event, property) {
  switch (property) {     
    case "bowings": set__property__body(event, "<i>C</i>", property, "(*)"); break;
    case "alpha__varshni": set__property__body(event, "<i>&alpha;</i>", property, "&mu;eV/K"); break;
    case "beta__varshni": set__property__body(event, "<i>&beta;</i>", property, "K"); break;
    case "carriers__mobility": set__property__body(event, "<i>&mu;</i>", property, "cm^2/(V*s)"); break;
    case "biaxial__deformation__potential": set__property__body(event, "<i>b</i>", property, "eV"); break;
    case "effective__mass": set__property__body(event, "<i>m*</i>", property, "m_e"); break;
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
    case "relative__permittivity": set__property__body(event, "<i>&epsilon;<sub>r</sub></i>", property, ""); break;
    case "spin__orbit__split": set__property__body(event, "<i>&Delta;<sub>so</sub></i>", property, "meV"); break;
    case "valence__band__offset": set__property__body(event, "<i>VBO</i>", property, "eV"); break;
  }
  properties__list.style.width = properties__property.getBoundingClientRect().right - properties__property.getBoundingClientRect().left + "px";
  localStorage.setItem('properties__list__width', properties__list.style.width);

  localStorage.setItem('properties__list__height', properties__scope.getBoundingClientRect().bottom - properties__properties.getBoundingClientRect().bottom + "px");
  properties__list.style.height = localStorage.getItem('properties__list__height');

  // properties__list.classList.add('')

}

function set__property__body(event, char, property, unit) {
  properties__char.innerHTML = char;
  if (localStorage.getItem('properties__property__dblclicked') == null) {
    properties__property.innerHTML = event.target.textContent;
  }
  properties__property.title = event.target.textContent;
  properties__property.dataset.content = event.target.textContent;
  properties__property.dataset.name = property;
  properties__unit.innerHTML = unit;
  properties__textarea.value = localStorage.getItem("property__" + property);

  localStorage.setItem('properties__property__property', property);
  localStorage.setItem('properties__property__char', char);
  localStorage.setItem('properties__property__name', property);
  localStorage.setItem('properties__property__unit', unit);
  localStorage.setItem('properties__property__content', event.target.textContent);
  }

properties__textarea.oninput = function (event) {
  localStorage.setItem("property__" + properties__property.dataset.name, properties__textarea.value);
}


properties__property.ondblclick = function(event) {
  if (localStorage.getItem("properties__property__dblclicked") == null) {
    properties__property.innerHTML = "...";
    localStorage.setItem("properties__property__dblclicked",'true');
    localStorage.setItem('properties__list__height', properties__scope.getBoundingClientRect().bottom - properties__properties.getBoundingClientRect().bottom + "px");
    properties__list.style.height = localStorage.getItem('properties__list__height');  
  }
  else {
    properties__property.innerHTML = properties__property.dataset.content;    
    localStorage.removeItem("properties__property__dblclicked");
    localStorage.setItem('properties__list__height', properties__scope.getBoundingClientRect().bottom - properties__properties.getBoundingClientRect().bottom + "px");
    properties__list.style.height = localStorage.getItem('properties__list__height');  
  }
}















properties__textarea.onkeypress = function (event) {
  if (properties__property.dataset.name != 'carriers__mobility' && properties__property.dataset.name != 'bowings' && properties__property.dataset.name != 'effective__mass'){
    switch(event.keyCode){
      case 34:
        properties__textarea.blur()
        alert('undesirable character');
        break;
      case 58:
        properties__textarea.blur()
        alert('undesirable character');
        break;
      case 123:
        properties__textarea.blur()
        alert('undesirable character');
        break;
      case 125:
        properties__textarea.blur()
        alert('undesirable character');
        break;
    }
  }
  else {
    switch(event.keyCode){
      case 39:
        properties__textarea.blur()
        alert('undesirable character');
        break;
      case 35:
        properties__textarea.blur()
        alert('undesirable character');
        break;
    }
  }
}

