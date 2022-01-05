panel__form__barriers__input.onclick = function(event) {
    if (localStorage.getItem('panel__form__barriers__input') == null) {
        localStorage.setItem('panel__form__barriers__input', 'true');

        panel__form__barriers__thickness.style.display = 'initial';
        panel__form__barriers__material.style.display = 'initial';
        panel__form__barriers__thickness__label.style.display = 'initial';
        panel__form__barriers__material__label.style.display = 'initial';

        
        panel__form__dos__3d.disabled = false;
        panel__form__dos__merged.disabled = false;

        panel__form__ldos__3d.disabled = false;
        panel__form__ldos__merged.disabled = false;

        panel__form__cos__3d.disabled = false;
        panel__form__cos__merged.disabled = false;
    }
    else {
        localStorage.removeItem("panel__form__barriers__input");
        panel__form__barriers__thickness.style.display = 'none';
        panel__form__barriers__material.style.display = 'none';
        panel__form__barriers__thickness__label.style.display = 'none';
        panel__form__barriers__material__label.style.display = 'none';

        if (panel__form__dos__3d.checked == true) { panel__form__dos__3d.click(); }
        panel__form__dos__3d.disabled = true;

        if (panel__form__dos__merged.checked == true) { panel__form__dos__merged.click(); }
        panel__form__dos__merged.disabled = true;
        
        panel__form__ldos__2d.click();
        panel__form__ldos__3d.disabled = true;
        panel__form__ldos__merged.disabled = true;


        if (panel__form__cos__3d.checked == true) { panel__form__cos__3d.click(); }
        panel__form__cos__3d.disabled = true;
        if (panel__form__cos__merged.checked == true) { panel__form__cos__merged.click(); }
        panel__form__cos__merged.disabled = true;
    }
}






panel__form__barriers__thickness.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__barriers__thickness.textContent == "") {
        panel__form__barriers__thickness.textContent = "20";
      };
      panel__form__barriers__thickness.blur();

      if(isNaN(panel__form__barriers__thickness.textContent)){
        panel__form__barriers__thickness.textContent = '20';
        localStorage.setItem("panel__form__barriers__thickness", panel__form__barriers__thickness.textContent);
      }
    }
}

panel__form__barriers__thickness.addEventListener('focusout', function (e) {
      if (panel__form__barriers__thickness.textContent == "") {
        panel__form__barriers__thickness.textContent = "20";
      };
      
      if(isNaN(panel__form__barriers__thickness.textContent)){
        panel__form__barriers__thickness.textContent = '20';
        localStorage.setItem("panel__form__barriers__thickness", panel__form__barriers__thickness.textContent);
      }
})

panel__form__barriers__thickness.oninput = function (event) {
  localStorage.setItem("panel__form__barriers__thickness", panel__form__barriers__thickness.textContent);
};
