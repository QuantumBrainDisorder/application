panel__form__phi__0.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__phi__0.textContent == "") {
        panel__form__phi__0.textContent = "8";
      };
      panel__form__phi__0.blur();

      if(isNaN(panel__form__phi__0.textContent)){
        panel__form__phi__0.textContent = '8';
        localStorage.setItem("panel__form__phi__0", panel__form__phi__0.textContent);
      }
    }
}

panel__form__phi__0.addEventListener('focusout', function (e) {
      if (panel__form__phi__0.textContent == "") {
        panel__form__phi__0.textContent = "8";
      };
      
      if(isNaN(panel__form__phi__0.textContent)){
        panel__form__phi__0.textContent = '8';
        localStorage.setItem("panel__form__phi__0", panel__form__phi__0.textContent);
      }
})

panel__form__phi__0.oninput = function (event) {
  localStorage.setItem("panel__form__phi__0", panel__form__phi__0.textContent);
};



panel__form__phi__L.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__phi__L.textContent == "") {
        panel__form__phi__L.textContent = "8";
      };
      panel__form__phi__L.blur();

      if(isNaN(panel__form__phi__L.textContent)){
        panel__form__phi__L.textContent = '8';
        localStorage.setItem("panel__form__phi__L", panel__form__phi__L.textContent);
      }
    }
}

panel__form__phi__L.addEventListener('focusout', function (e) {
      if (panel__form__phi__L.textContent == "") {
        panel__form__phi__L.textContent = "8";
      };
      
      if(isNaN(panel__form__phi__L.textContent)){
        panel__form__phi__L.textContent = '8';
        localStorage.setItem("panel__form__phi__L", panel__form__phi__L.textContent);
      }
})

panel__form__phi__L.oninput = function (event) {
  localStorage.setItem("panel__form__phi__L", panel__form__phi__L.textContent);
};





