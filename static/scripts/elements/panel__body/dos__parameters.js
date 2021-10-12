panel__form__dos__parameters__et.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__dos__parameters__et.textContent == "") {
        panel__form__dos__parameters__et.textContent = "8";
      };
      panel__form__dos__parameters__et.blur();

      if(isNaN(panel__form__dos__parameters__et.textContent)){
        panel__form__dos__parameters__et.textContent = '8';
        localStorage.setItem("panel__form__dos__parameters__et", panel__form__dos__parameters__et.textContent);
      }
    }
}

panel__form__dos__parameters__et.addEventListener('focusout', function (e) {
      if (panel__form__dos__parameters__et.textContent == "") {
        panel__form__dos__parameters__et.textContent = "8";
      };
      
      if(isNaN(panel__form__dos__parameters__et.textContent)){
        panel__form__dos__parameters__et.textContent = '8';
        localStorage.setItem("panel__form__dos__parameters__et", panel__form__dos__parameters__et.textContent);
      }
})

panel__form__dos__parameters__et.oninput = function (event) {
  localStorage.setItem("panel__form__dos__parameters__et", panel__form__dos__parameters__et.textContent);
};













panel__form__dos__parameters__eb.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__dos__parameters__eb.textContent == "") {
        panel__form__dos__parameters__eb.textContent = "-3";
      };
      panel__form__dos__parameters__eb.blur();

      if(isNaN(panel__form__dos__parameters__eb.textContent)){
        panel__form__dos__parameters__eb.textContent = '-3';
        localStorage.setItem("panel__form__dos__parameters__eb", panel__form__dos__parameters__eb.textContent);
      }
    }
}

panel__form__dos__parameters__eb.addEventListener('focusout', function (e) {
      if (panel__form__dos__parameters__eb.textContent == "") {
        panel__form__dos__parameters__eb.textContent = "-3";
      };
      
      if(isNaN(panel__form__dos__parameters__eb.textContent)){
        panel__form__dos__parameters__eb.textContent = '-3';
        localStorage.setItem("panel__form__dos__parameters__eb", panel__form__dos__parameters__eb.textContent);
      }
})

panel__form__dos__parameters__eb.oninput = function (event) {
  localStorage.setItem("panel__form__dos__parameters__eb", panel__form__dos__parameters__eb.textContent);
};






panel__form__dos__parameters__er.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__dos__parameters__er.textContent == "") {
        panel__form__dos__parameters__er.textContent = "0.1";
      };
      panel__form__dos__parameters__er.blur();

      if(isNaN(panel__form__dos__parameters__er.textContent)){
        panel__form__dos__parameters__er.textContent = '0.1';
        localStorage.setItem("panel__form__dos__parameters__er", panel__form__dos__parameters__er.textContent);
      }
    }
}

panel__form__dos__parameters__er.addEventListener('focusout', function (e) {
      if (panel__form__dos__parameters__er.textContent == "") {
        panel__form__dos__parameters__er.textContent = "0.1";
      };
      
      if(isNaN(panel__form__dos__parameters__er.textContent)){
        panel__form__dos__parameters__er.textContent = '0.1';
        localStorage.setItem("panel__form__dos__parameters__er", panel__form__dos__parameters__er.textContent);
      }
})

panel__form__dos__parameters__er.oninput = function (event) {
  localStorage.setItem("panel__form__dos__parameters__er", panel__form__dos__parameters__er.textContent);
};


