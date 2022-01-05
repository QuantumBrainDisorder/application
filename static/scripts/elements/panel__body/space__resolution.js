panel__form__space__resolution__input.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__space__resolution__input.textContent == "") {
        panel__form__space__resolution__input.textContent = "0.1";
      };
      panel__form__space__resolution__input.blur();

      if(isNaN(panel__form__space__resolution__input.textContent)){
        panel__form__space__resolution__input.textContent = '0.1';
        localStorage.setItem("panel__form__space__resolution__input", panel__form__space__resolution__input.textContent);
      }
    }
}

panel__form__space__resolution__input.addEventListener('focusout', function (e) {
      if (panel__form__space__resolution__input.textContent == "") {
        panel__form__space__resolution__input.textContent = "0.1";
      };
      
      if(isNaN(panel__form__space__resolution__input.textContent)){
        panel__form__space__resolution__input.textContent = '0.1';
        localStorage.setItem("panel__form__space__resolution__input", panel__form__space__resolution__input.textContent);
      }
})

panel__form__space__resolution__input.oninput = function (event) {
  localStorage.setItem("panel__form__space__resolution__input", panel__form__space__resolution__input.textContent);
};
