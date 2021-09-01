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
