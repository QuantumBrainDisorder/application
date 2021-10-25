panel__form__qfl__ho.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__qfl__ho.textContent == "") {
        panel__form__qfl__ho.textContent = "8";
      };
      panel__form__qfl__ho.blur();

      if(isNaN(panel__form__qfl__ho.textContent)){
        panel__form__qfl__ho.textContent = '8';
        localStorage.setItem("panel__form__qfl__ho", panel__form__qfl__ho.textContent);
      }
    }
}

panel__form__qfl__ho.addEventListener('focusout', function (e) {
      if (panel__form__qfl__ho.textContent == "") {
        panel__form__qfl__ho.textContent = "8";
      };
      
      if(isNaN(panel__form__qfl__ho.textContent)){
        panel__form__qfl__ho.textContent = '8';
        localStorage.setItem("panel__form__qfl__ho", panel__form__qfl__ho.textContent);
      }
})

panel__form__qfl__ho.oninput = function (event) {
  localStorage.setItem("panel__form__qfl__ho", panel__form__qfl__ho.textContent);
};







panel__form__qfl__el.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__qfl__el.textContent == "") {
        panel__form__qfl__el.textContent = "8";
      };
      panel__form__qfl__el.blur();

      if(isNaN(panel__form__qfl__el.textContent)){
        panel__form__qfl__el.textContent = '8';
        localStorage.setItem("panel__form__qfl__el", panel__form__qfl__el.textContent);
      }
    }
}

panel__form__qfl__el.addEventListener('focusout', function (e) {
      if (panel__form__qfl__el.textContent == "") {
        panel__form__qfl__el.textContent = "8";
      };
      
      if(isNaN(panel__form__qfl__el.textContent)){
        panel__form__qfl__el.textContent = '8';
        localStorage.setItem("panel__form__qfl__el", panel__form__qfl__el.textContent);
      }
})

panel__form__qfl__el.oninput = function (event) {
  localStorage.setItem("panel__form__qfl__el", panel__form__qfl__el.textContent);
};
