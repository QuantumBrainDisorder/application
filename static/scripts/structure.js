const structure__unit = document.getElementById("structure__unit");
const structure = document.getElementById("structure");


function set__structure__unit(unit) {
  switch(unit) {
    case 'A':
      structure__unit.innerHTML = "&#8491;";
      localStorage.setItem("structure__unit", "&#8491;");
      footer.style.color = "green";
      footer.textContent = "Structure unit changed!";
      break;
    case 'nm':
      structure__unit.innerHTML = "nm";
      localStorage.setItem("structure__unit", "nm");
      footer.style.color = "green";
      footer.textContent = "Structure unit changed!";
      break;
    case 'um':
      structure__unit.innerHTML = "&#956;m";
      localStorage.setItem("structure__unit", "&#956;m");
      footer.style.color = "green";
      footer.textContent = "Structure unit changed!";
      break;
  };
};

structure__unit.onkeypress = function (event) {
    if (event.keyCode === 13) {
      if (structure__unit.textContent == "") {
        structure__unit.textContent = "nm";
      }
      document.getElementById("structure__unit").blur();
    }
}

structure__unit.oninput = function (event) {
  localStorage.setItem("structure__unit", structure__unit.textContent);
  footer.style.color = "green";
  footer.textContent = "Structure unit changed!";
};

structure.oninput = function (event) {
  localStorage.setItem("structure", structure.value);
  footer.style.color = "green";
  footer.textContent = "Structure changed!";
}
