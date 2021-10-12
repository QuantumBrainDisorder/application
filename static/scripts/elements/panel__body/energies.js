panel__form__band__electrons__input.onclick = function(event) {
    if (localStorage.getItem('panel__form__band__electrons__input') == null) {
        localStorage.setItem('panel__form__band__electrons__input', 'true');
        panel__form__band__electrons__del__label.style.display = 'initial';
        panel__form__band__electrons__dwf__label.style.display = 'initial';
    }
    else {
        localStorage.removeItem("panel__form__band__electrons__input");
        panel__form__band__electrons__del__label.style.display = 'none';
        panel__form__band__electrons__dwf__label.style.display = 'none';
        panel__form__band__electrons__dwf__normalised__label.style.display = 'none';

        
        localStorage.removeItem("panel__form__band__electrons__del");
        panel__form__band__electrons__del.checked = false;
        localStorage.removeItem("panel__form__band__electrons__dwf");
        panel__form__band__electrons__dwf.checked = false;
    }
}
panel__form__band__electrons__del.onclick = function(event) {
    if (panel__form__band__electrons__dwf.checked) {
      panel__form__band__electrons__del.checked = true;
      pane
    }
    else {
      if (localStorage.getItem('panel__form__band__electrons__del') == null) {
          localStorage.setItem('panel__form__band__electrons__del', 'true');
      }
      else {
          localStorage.removeItem("panel__form__band__electrons__del");
      }
    }
}
panel__form__band__electrons__dwf.onclick = function(event) {
    if (localStorage.getItem('panel__form__band__electrons__dwf') == null) {
        localStorage.setItem('panel__form__band__electrons__dwf', 'true');
        panel__form__band__electrons__dwf__normalised__label.style.display = 'initial';

        if (!panel__form__band__electrons__del.checked){panel__form__band__electrons__del.click()}
    }
    else {
        localStorage.removeItem("panel__form__band__electrons__dwf");
        panel__form__band__electrons__dwf__normalised__label.style.display = 'none';
    }
}
panel__form__band__electrons__dwf__normalised.onclick = function(event) {
    if (localStorage.getItem('panel__form__band__electrons__dwf__normalised') == null) {
        localStorage.setItem('panel__form__band__electrons__dwf__normalised', 'true');
    }
    else {
        localStorage.removeItem("panel__form__band__electrons__dwf__normalised");
    }
}










panel__form__band__holes__input.onclick = function(event) {
    if (localStorage.getItem('panel__form__band__holes__input') == null) {
        localStorage.setItem('panel__form__band__holes__input', 'true');
        panel__form__band__holes__del__label.style.display = 'initial';
        panel__form__band__holes__dwf__label.style.display = 'initial';
    }
    else {
        localStorage.removeItem("panel__form__band__holes__input");
        panel__form__band__holes__del__label.style.display = 'none';
        panel__form__band__holes__dwf__label.style.display = 'none';
        panel__form__band__holes__dwf__normalised__label.style.display = 'none';
        panel__form__band__holes__del__lh__label.style.display = 'none';
        panel__form__band__holes__del__hh__label.style.display = 'none';
        
        localStorage.removeItem("panel__form__band__holes__del");
        panel__form__band__holes__del.checked = false;
        localStorage.removeItem("panel__form__band__holes__del__lh");
        panel__form__band__holes__del__lh.checked = false;
        localStorage.removeItem("panel__form__band__holes__del__hh");
        panel__form__band__holes__del__hh.checked = false;
        localStorage.removeItem("panel__form__band__holes__dwf");
        panel__form__band__holes__dwf.checked = false;
    }
}
panel__form__band__holes__del.onclick = function(event) {
    if (panel__form__band__holes__dwf.checked){
      panel__form__band__holes__del.checked = true;
      localStorage.setItem('panel__form__band__holes__del', 'true');
      panel__form__band__holes__del__lh__label.style.display = 'initial';
      panel__form__band__holes__del__hh__label.style.display = 'initial'; 
      localStorage.setItem('panel__form__band__holes__del__lh', 'true');
      panel__form__band__holes__del__lh.checked = true;
      localStorage.setItem('panel__form__band__holes__del__hh', 'true');
      panel__form__band__holes__del__hh.checked = true;
    }
    else {
      if (localStorage.getItem('panel__form__band__holes__del') == null) {
          localStorage.setItem('panel__form__band__holes__del', 'true');
          panel__form__band__holes__del__lh__label.style.display = 'initial';
          panel__form__band__holes__del__hh__label.style.display = 'initial'; 
          localStorage.setItem('panel__form__band__holes__del__lh', 'true');
          panel__form__band__holes__del__lh.checked = true;
          localStorage.setItem('panel__form__band__holes__del__hh', 'true');
          panel__form__band__holes__del__hh.checked = true;
      }
      else {
          localStorage.removeItem("panel__form__band__holes__del");
          panel__form__band__holes__del__lh__label.style.display = 'none';
          panel__form__band__holes__del__hh__label.style.display = 'none';
          localStorage.removeItem("panel__form__band__holes__del__lh");
          panel__form__band__holes__del__lh.checked = false;
          localStorage.removeItem("panel__form__band__holes__del__hh");
          panel__form__band__holes__del__hh.checked = false;     
      }
    }
}
panel__form__band__holes__del__lh.onclick = function(event) {
  if (localStorage.getItem('panel__form__band__holes__del__lh') == null) {
      localStorage.setItem('panel__form__band__holes__del__lh', 'true');
  }
  else {
      localStorage.removeItem("panel__form__band__holes__del__lh");
      if (panel__form__band__holes__del__hh.checked == false) {
        panel__form__band__holes__del__lh__label.style.display = 'none';
        panel__form__band__holes__del__hh__label.style.display = 'none';
        localStorage.removeItem("panel__form__band__holes__del");
        panel__form__band__holes__del.checked = false;
        if (panel__form__band__holes__dwf.checked){ panel__form__band__holes__dwf.click()};
      }
  }
}
panel__form__band__holes__del__hh.onclick = function(event) {
  if (localStorage.getItem('panel__form__band__holes__del__hh') == null) {
      localStorage.setItem('panel__form__band__holes__del__hh', 'true');
  }
  else {
      localStorage.removeItem("panel__form__band__holes__del__hh");
      if (panel__form__band__holes__del__lh.checked == false) {
        panel__form__band__holes__del__lh__label.style.display = 'none';
        panel__form__band__holes__del__hh__label.style.display = 'none';
        localStorage.removeItem("panel__form__band__holes__del");
        panel__form__band__holes__del.checked = false;
        if (panel__form__band__holes__dwf.checked){ panel__form__band__holes__dwf.click()};
      }
  }
}
panel__form__band__holes__dwf.onclick = function(event) {
    if (localStorage.getItem('panel__form__band__holes__dwf') == null) {
        localStorage.setItem('panel__form__band__holes__dwf', 'true');
        panel__form__band__holes__dwf__normalised__label.style.display = 'initial';

        if (!panel__form__band__holes__del.checked) {panel__form__band__holes__del.click()}
    }
    else {
        localStorage.removeItem("panel__form__band__holes__dwf");
        panel__form__band__holes__dwf__normalised__label.style.display = 'none';
    }
}
panel__form__band__holes__dwf__normalised.onclick = function(event) {
    if (localStorage.getItem('panel__form__band__holes__dwf__normalised') == null) {
        localStorage.setItem('panel__form__band__holes__dwf__normalised', 'true');
    }
    else {
        localStorage.removeItem("panel__form__band__holes__dwf__normalised");
    }
}







panel__form__band__parameters__tle.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__band__parameters__tle.textContent == "") {
        panel__form__band__parameters__tle.textContent = "12";
      };
      panel__form__band__parameters__tle.blur();

      if(isNaN(panel__form__band__parameters__tle.textContent)){
        panel__form__band__parameters__tle.textContent = '12';
        localStorage.setItem("panel__form__band__parameters__tle", panel__form__band__parameters__tle.textContent);
      }
    }
}
panel__form__band__parameters__tle.addEventListener('focusout', function (e) {
      if (panel__form__band__parameters__tle.textContent == "") {
        panel__form__band__parameters__tle.textContent = "12";
      };
      
      if(isNaN(panel__form__band__parameters__tle.textContent)){
        panel__form__band__parameters__tle.textContent = '12';
        localStorage.setItem("panel__form__band__parameters__tle", panel__form__band__parameters__tle.textContent);
      }
})
panel__form__band__parameters__tle.oninput = function (event) {
  localStorage.setItem("panel__form__band__parameters__tle", panel__form__band__parameters__tle.textContent);
};










panel__form__band__parameters__ble.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__band__parameters__ble.textContent == "") {
        panel__form__band__parameters__ble.textContent = "-6";
      };
      panel__form__band__parameters__ble.blur();

      if(isNaN(panel__form__band__parameters__ble.textContent)){
        panel__form__band__parameters__ble.textContent = '-6';
        localStorage.setItem("panel__form__band__parameters__ble", panel__form__band__parameters__ble.textContent);
      }
    }
}
panel__form__band__parameters__ble.addEventListener('focusout', function (e) {
      if (panel__form__band__parameters__ble.textContent == "") {
        panel__form__band__parameters__ble.textContent = "-6";
      };
      
      if(isNaN(panel__form__band__parameters__ble.textContent)){
        panel__form__band__parameters__ble.textContent = '-6';
        localStorage.setItem("panel__form__band__parameters__ble", panel__form__band__parameters__ble.textContent);
      }
})
panel__form__band__parameters__ble.oninput = function (event) {
  localStorage.setItem("panel__form__band__parameters__ble", panel__form__band__parameters__ble.textContent);
};







panel__form__band__parameters__elr.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__band__parameters__elr.textContent == "") {
        panel__form__band__parameters__elr.textContent = "0.01";
      };
      panel__form__band__parameters__elr.blur();

      if(isNaN(panel__form__band__parameters__elr.textContent)){
        panel__form__band__parameters__elr.textContent = '0.01';
        localStorage.setItem("panel__form__band__parameters__elr", panel__form__band__parameters__elr.textContent);
      }
    }
}
panel__form__band__parameters__elr.addEventListener('focusout', function (e) {
      if (panel__form__band__parameters__elr.textContent == "") {
        panel__form__band__parameters__elr.textContent = "0.01";
      };
      
      if(isNaN(panel__form__band__parameters__elr.textContent)){
        panel__form__band__parameters__elr.textContent = '0.01';
        localStorage.setItem("panel__form__band__parameters__elr", panel__form__band__parameters__elr.textContent);
      }
})
panel__form__band__parameters__elr.oninput = function (event) {
  localStorage.setItem("panel__form__band__parameters__elr", panel__form__band__parameters__elr.textContent);
};