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
}

structure__legend.ondblclick = function(event) {
  if (localStorage.getItem("structure__legend__dblclicked") == null) {
    // structure__legend__ul.classList.add('structure__legend__ul');
    // structure__legend__span.classList.add('structure__legend__span');
    // structure__legend__span.title = "Structure (" + structure__unit.textContent + ')';
    structure_legend__structure.textContent = "...";
    localStorage.setItem("structure__legend__dblclicked",'true');
  }
  else {
    // structure__legend__ul.classList.remove('structure__legend__ul');
    // structure__legend__span.classList.remove('structure__legend__span');
    structure_legend__structure.innerHTML = "Structure";
    localStorage.removeItem("structure__legend__dblclicked");
  }
}