panel__form__wave__vector__input.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__wave__vector__input.textContent == "") {
        panel__form__wave__vector__input.textContent = "2e+8";
      };
      panel__form__wave__vector__input.blur();

      if(isNaN(panel__form__wave__vector__input.textContent)){
        panel__form__wave__vector__input.textContent = '2e+8';
        localStorage.setItem("panel__form__wave__vector__input", panel__form__wave__vector__input.textContent);
      }
    }
}

panel__form__wave__vector__input.addEventListener('focusout', function (e) {
      if (panel__form__wave__vector__input.textContent == "") {
        panel__form__wave__vector__input.textContent = "we+8";
      };
      
      if(isNaN(panel__form__wave__vector__input.textContent)){
        panel__form__wave__vector__input.textContent = '2e+8';
        localStorage.setItem("panel__form__wave__vector__input", panel__form__wave__vector__input.textContent);
      }
})

panel__form__wave__vector__input.oninput = function (event) {
  localStorage.setItem("panel__form__wave__vector__input", panel__form__wave__vector__input.textContent);
};
