panel__form__temperature__input.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__temperature__input.textContent == "") {
        panel__form__temperature__input.textContent = "0";
      };
      panel__form__temperature__input.blur();

      if(isNaN(panel__form__temperature__input.textContent)){
        panel__form__temperature__input.textContent = '0';
        localStorage.setItem("panel__form__temperature__input", panel__form__temperature__input.textContent);
      }
    }
}

panel__form__temperature__input.addEventListener('focusout', function (e) {
      if (panel__form__temperature__input.textContent == "") {
        panel__form__temperature__input.textContent = "0";
      };
      
      if(isNaN(panel__form__temperature__input.textContent)){
        panel__form__temperature__input.textContent = '0';
        localStorage.setItem("panel__form__temperature__input", panel__form__temperature__input.textContent);
      }
})

panel__form__temperature__input.oninput = function (event) {
  localStorage.setItem("panel__form__temperature__input", panel__form__temperature__input.textContent);
};


