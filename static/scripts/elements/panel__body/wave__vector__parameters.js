panel__form__wave__vector__parameters__tx.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__wave__vector__parameters__tx.textContent == "") {
        panel__form__wave__vector__parameters__tx.textContent = "2.5e+9";
      };
      panel__form__wave__vector__parameters__tx.blur();

      if(isNaN(panel__form__wave__vector__parameters__tx.textContent)){
        panel__form__wave__vector__parameters__tx.textContent = '2.5e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__tx", panel__form__wave__vector__parameters__tx.textContent);
      }
    }
}

panel__form__wave__vector__parameters__tx.addEventListener('focusout', function (e) {
      if (panel__form__wave__vector__parameters__tx.textContent == "") {
        panel__form__wave__vector__parameters__tx.textContent = "2.5e+9";
      };
      
      if(isNaN(panel__form__wave__vector__parameters__tx.textContent)){
        panel__form__wave__vector__parameters__tx.textContent = '2.5e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__tx", panel__form__wave__vector__parameters__tx.textContent);
      }
})

panel__form__wave__vector__parameters__tx.oninput = function (event) {
  localStorage.setItem("panel__form__wave__vector__parameters__tx", panel__form__wave__vector__parameters__tx.textContent);
};










panel__form__wave__vector__parameters__bx.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__wave__vector__parameters__bx.textContent == "") {
        panel__form__wave__vector__parameters__bx.textContent = "0e+9";
      };
      panel__form__wave__vector__parameters__bx.blur();

      if(isNaN(panel__form__wave__vector__parameters__bx.textContent)){
        panel__form__wave__vector__parameters__bx.textContent = '0e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__bx", panel__form__wave__vector__parameters__bx.textContent);
      }
    }
}

panel__form__wave__vector__parameters__bx.addEventListener('focusout', function (e) {
      if (panel__form__wave__vector__parameters__bx.textContent == "") {
        panel__form__wave__vector__parameters__bx.textContent = "0e+9";
      };
      
      if(isNaN(panel__form__wave__vector__parameters__bx.textContent)){
        panel__form__wave__vector__parameters__bx.textContent = '0e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__bx", panel__form__wave__vector__parameters__bx.textContent);
      }
})

panel__form__wave__vector__parameters__bx.oninput = function (event) {
  localStorage.setItem("panel__form__wave__vector__parameters__bx", panel__form__wave__vector__parameters__bx.textContent);
};








panel__form__wave__vector__parameters__rx.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__wave__vector__parameters__rx.textContent == "") {
        panel__form__wave__vector__parameters__rx.textContent = "1e+7";
      };
      panel__form__wave__vector__parameters__rx.blur();

      if(isNaN(panel__form__wave__vector__parameters__rx.textContent)){
        panel__form__wave__vector__parameters__rx.textContent = '1e+7';
        localStorage.setItem("panel__form__wave__vector__parameters__rx", panel__form__wave__vector__parameters__rx.textContent);
      }
    }
}

panel__form__wave__vector__parameters__rx.addEventListener('focusout', function (e) {
      if (panel__form__wave__vector__parameters__rx.textContent == "") {
        panel__form__wave__vector__parameters__rx.textContent = "1e+7";
      };
      
      if(isNaN(panel__form__wave__vector__parameters__rx.textContent)){
        panel__form__wave__vector__parameters__rx.textContent = '1e+7';
        localStorage.setItem("panel__form__wave__vector__parameters__rx", panel__form__wave__vector__parameters__rx.textContent);
      }
})

panel__form__wave__vector__parameters__rx.oninput = function (event) {
  localStorage.setItem("panel__form__wave__vector__parameters__rx", panel__form__wave__vector__parameters__rx.textContent);
};













panel__form__wave__vector__parameters__ty.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__wave__vector__parameters__ty.textContent == "") {
        panel__form__wave__vector__parameters__ty.textContent = "2.5e+9";
      };
      panel__form__wave__vector__parameters__ty.blur();

      if(isNaN(panel__form__wave__vector__parameters__ty.textContent)){
        panel__form__wave__vector__parameters__ty.textContent = '2.5e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__ty", panel__form__wave__vector__parameters__ty.textContent);
      }
    }
}

panel__form__wave__vector__parameters__ty.addEventListener('focusout', function (e) {
      if (panel__form__wave__vector__parameters__ty.textContent == "") {
        panel__form__wave__vector__parameters__ty.textContent = "2.5e+9";
      };
      
      if(isNaN(panel__form__wave__vector__parameters__ty.textContent)){
        panel__form__wave__vector__parameters__ty.textContent = '2.5e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__ty", panel__form__wave__vector__parameters__ty.textContent);
      }
})

panel__form__wave__vector__parameters__ty.oninput = function (event) {
  localStorage.setItem("panel__form__wave__vector__parameters__ty", panel__form__wave__vector__parameters__ty.textContent);
};










panel__form__wave__vector__parameters__by.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__wave__vector__parameters__by.textContent == "") {
        panel__form__wave__vector__parameters__by.textContent = "0e+9";
      };
      panel__form__wave__vector__parameters__by.blur();

      if(isNaN(panel__form__wave__vector__parameters__by.textContent)){
        panel__form__wave__vector__parameters__by.textContent = '0e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__by", panel__form__wave__vector__parameters__by.textContent);
      }
    }
}

panel__form__wave__vector__parameters__by.addEventListener('focusout', function (e) {
      if (panel__form__wave__vector__parameters__by.textContent == "") {
        panel__form__wave__vector__parameters__by.textContent = "0e+9";
      };
      
      if(isNaN(panel__form__wave__vector__parameters__by.textContent)){
        panel__form__wave__vector__parameters__by.textContent = '0e+9';
        localStorage.setItem("panel__form__wave__vector__parameters__by", panel__form__wave__vector__parameters__by.textContent);
      }
})

panel__form__wave__vector__parameters__by.oninput = function (event) {
  localStorage.setItem("panel__form__wave__vector__parameters__by", panel__form__wave__vector__parameters__by.textContent);
};




panel__form__wave__vector__parameters__ry.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__wave__vector__parameters__ry.textContent == "") {
        panel__form__wave__vector__parameters__ry.textContent = "1e+7";
      };
      panel__form__wave__vector__parameters__ry.blur();

      if(isNaN(panel__form__wave__vector__parameters__ry.textContent)){
        panel__form__wave__vector__parameters__ry.textContent = '1e+7';
        localStorage.setItem("panel__form__wave__vector__parameters__ry", panel__form__wave__vector__parameters__ry.textContent);
      }
    }
}

panel__form__wave__vector__parameters__ry.addEventListener('focusout', function (e) {
      if (panel__form__wave__vector__parameters__ry.textContent == "") {
        panel__form__wave__vector__parameters__ry.textContent = "1e+7";
      };
      
      if(isNaN(panel__form__wave__vector__parameters__ry.textContent)){
        panel__form__wave__vector__parameters__ry.textContent = '1e+7';
        localStorage.setItem("panel__form__wave__vector__parameters__ry", panel__form__wave__vector__parameters__ry.textContent);
      }
})

panel__form__wave__vector__parameters__ry.oninput = function (event) {
  localStorage.setItem("panel__form__wave__vector__parameters__ry", panel__form__wave__vector__parameters__ry.textContent);
};







