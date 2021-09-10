function set__panel__bar__type(event, type, form) {
  clean__panel();

    switch (type) {
      case "profiles__energy": 
        set__panel__bar__type__body(event, "Profile: ", type, form); 
        panel__form__orint.style.display = "initial";
        panel__form__profile.style.display = "initial";
        break;
      case "distributions__energy__gap": 
        set__panel__bar__type__body(event, "Distribution: ", type, form); 
        panel__form__orint.style.display = "initial";
        panel__form__distribution.style.display = "initial";
        break;
      case "distributions__lattice__constant": 
        set__panel__bar__type__body(event, "Distribution: ", type, form); 
        panel__form__orint.style.display = "initial";
        panel__form__distribution.style.display = "initial";
        break;
    }
    // properties__list.style.width = properties__property.getBoundingClientRect().right - properties__property.getBoundingClientRect().left + "px";
    // localStorage.setItem('properties__list__width', properties__list.style.width);
  
    // localStorage.setItem('properties__list__height', properties__scope.getBoundingClientRect().bottom - properties__properties.getBoundingClientRect().bottom + "px");
    // properties__list.style.height = localStorage.getItem('properties__list__height');  
    panel__bar__type.parentElement.style.backgroundColor = css__vars.getPropertyValue('--theme1');
  }
  
function set__panel__bar__type__body(event, prefix, type, form) {
    panel__bar__type.innerHTML = prefix + event.target.textContent;
    panel__bar__type.dataset.type = type;
    panel__bar__type.dataset.form = form;
    localStorage.setItem('panel__bar__type__content', prefix + event.target.textContent);
    localStorage.setItem('panel__bar__type', type);
    localStorage.setItem('panel__bar__type__form', form);
}
  
function clean__panel() {
  panel__form__orint.style.display = "none";
  panel__form__distribution.style.display = "none";
  panel__form__profile.style.display = "none";
}






panel__bar__run.onclick = function (event) {
  var content = null;
  switch(panel__bar__type.dataset.form) {
    case "distribution":
      if (panel__bar__type.dataset.type == 'distributions__energy__gap') {
        content = '{' + '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';  
      }
      else if (panel__bar__type.dataset.type = 'distributions__lattice__constant') {
        content = '{' + '"lattice__constant":' + '"' + localStorage.getItem('property__lattice__constant').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';
      }
      panel__form__distribution__submit.value = content;
      panel__form__distribution__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
      break;
    case "profile":
      content__A = '"structure": ' + '"' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
      content__B = '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
      content__C = '"bowings": ' + localStorage.getItem('property__bowings').replaceAll('\r', '') ;
      content = '{' + content__A + ', ' + content__B + ', ' + content__C + '}';
      panel__form__profile__submit.value = content;
      panel__form__profile__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
      break;
  }
}



// const butbut = document.getElementById('butbut');
// panel__bar__run.onclick = function (event) {
//     butbut.dispatchEvent(
//         new MouseEvent('click', {
//             bubbles: true,
//             cancelable: true,
//             view: window,
//     }));
// }