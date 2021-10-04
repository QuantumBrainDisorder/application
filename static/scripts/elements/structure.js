function set__structure__unit (unit) {
  switch(unit) {
    case 'A':   set__structure__unit__body("&#8491;"); break;
    case 'nm':  set__structure__unit__body("nm");      break;
    case 'um':  set__structure__unit__body("&#956;m"); break;
  };
};

function set__structure__unit__body (unit) {
  structure__unit.innerHTML = unit;
  localStorage.setItem("structure__unit", unit);
}

structure__unit.onkeypress = function (event) {
    if (event.keyCode === 13) {
      if (structure__unit.textContent == "") {
        structure__unit.textContent = "nm";
      };
      structure__unit.blur();
    }
}

structure__unit.addEventListener('focusout', function (e) {
      if (structure__unit.textContent == "") {
        structure__unit.textContent = "nm";
      };
})

structure__unit.oninput = function (event) {
  localStorage.setItem("structure__unit", structure__unit.textContent);
};

structure.oninput = function (event) {
  localStorage.setItem("structure", structure.value);
  // if (event.keyCode === 34) {
  //   alert('undesirable character');
  //   // structure.innerHTML = "structure.textContent.replace('"', '');"
  // }
}

structure__legend.ondblclick = function(event) {
  if (localStorage.getItem("structure__legend__dblclicked") == null) {
    structure__legend__structure.textContent = "...";
    localStorage.setItem("structure__legend__dblclicked",'true');
  }
  else {
    structure__legend__structure.innerHTML = "Structure";
    localStorage.removeItem("structure__legend__dblclicked");
  }
}


structure.onkeypress = function (event) {
  switch(event.keyCode){
    case 34:
      structure.blur()
      alert('undesirable character');
      // structure.innerHTML = localStorage.getItem('structure').replaceAll('\"','');
      break;
    case 58:
      structure.blur()
      alert('undesirable character');
      // structure.innerHTML = localStorage.getItem('structure').replaceAll(':','');
      break;
    case 123:
      structure.blur()
      alert('undesirable character');
      // structure.innerHTML = localStorage.getItem('structure').replaceAll('{','');
      break;
    case 125:
      structure.blur()
      alert('undesirable character');
      // structure.innerHTML = localStorage.getItem('structure').replaceAll('}','');
      break;
  }
}