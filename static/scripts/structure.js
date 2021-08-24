const structure__unit = document.getElementById("structure__unit");

function set__structure__unit(unit) {
  switch(unit) {
    case 'A':
      structure__unit.innerHTML = "&#8491;";
      localStorage.setItem("structure__unit", "&#8491;");
      break;
    case 'nm':
      structure__unit.innerHTML = "nm";
      localStorage.setItem("structure__unit", "nm");
      break;
    case 'um':
      structure__unit.innerHTML = "&#956;m";
      localStorage.setItem("structure__unit", "&#956;m");
      break;
  };
};

structure__unit.onkeypress = function (event) {
    if (event.keyCode === 13) {
      document.getElementById("structure__unit").blur();
    }
}

structure__unit.oninput = function (event) {
  localStorage.setItem("structure__unit", structure__unit.textContent);
}