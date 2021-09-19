function set__panel__bar__type(event, type, form) {
  clean__panel();

    switch (type) {
      case "energy__profile": 
        set__panel__bar__type__body(event, "", type, form); 
        panel__form__orint.style.display = "initial";
        panel__form__energy__profile.style.display = "initial";
        break;
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
  panel__form__input.style.display = "none";
  panel__form__meta.style.display = "none";
  panel__form__figure.style.display = "none";
  panel__form__orint.style.display = "none";
  panel__form__distribution.style.display = "none";
  panel__form__profile.style.display = "none";
  panel__form__energy__profile.style.display = "none";
}






panel__bar__run.onclick = function (event) {
  var content = null;
  switch(panel__bar__type.dataset.form) {
    case "energy__profile":
      content__A = '"structure": ' + '"' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
      content__B = '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
      content__C = '"effective__mass": ' + localStorage.getItem('property__effective__mass').replaceAll('\r', '') ;
      content__D = '"bowings": ' + localStorage.getItem('property__bowings').replaceAll('\r', '') ;
      
      var unit__structure = null;
      switch (localStorage.getItem('structure__unit')) {
        case 'nm': unit__structure = 'nm'; break;
        case '&#8491;': unit__structure = 'Angs'; break;
        case '&#956;m': unit__structure = 'um'; break;
      }
      content__E = '"unit__structure": ' + '"' + unit__structure + '"';
      content__F = '"unit__energy__gap": ' + '"' + localStorage.getItem('property__unit__energy__gap') + '"';
      content__G = '"unit__effective__mass": ' + '"' + localStorage.getItem('property__unit__effective__mass') + '"';

      content__H = '"checkbox__del": ' + '"' + String(panel__form__energy__profile__del.value) + '"';
      content__I = '"checkbox__dwf": ' + '"' + String(panel__form__energy__profile__dwf.value) + '"';
      content__J = '"checkbox__deb": ' + '"' + String(panel__form__energy__profile__deb.value) + '"';

      content = '{' + content__A + ', ' + content__B + ', ' + content__C + ', ' + content__D + ', ' + content__E + ', ' + content__F + ', ' + content__G + ', ' + content__H + ', ' +  content__I + ', ' +  content__J + '}';
      panel__form__energy__profile__submit.value = content;
      set__interface();
      panel__form__energy__profile__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
      break;

    case "distribution":
      if (panel__bar__type.dataset.type == 'distributions__energy__gap') {
        content = '{' + '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';  
      }
      else if (panel__bar__type.dataset.type = 'distributions__lattice__constant') {
        content = '{' + '"lattice__constant":' + '"' + localStorage.getItem('property__lattice__constant').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';
      }
      panel__form__distribution__submit.value = content;
      set__interface();
      panel__form__distribution__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
      break;

    case "profile":
      content__A = '"structure": ' + '"' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
      content__B = '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
      content__C = '"bowings": ' + localStorage.getItem('property__bowings').replaceAll('\r', '') ;
      var unit = null;
      switch (localStorage.getItem('structure__unit')) {
        case 'nm': unit = 'nm'; break;
        case '&#8491;': unit = 'Angs'; break;
        case '&#956;m': unit = 'um'; break;
      }
      content__D = '"structure__unit": ' + '"' + unit + '"';
      content = '{' + content__A + ', ' + content__B + ', ' + content__C + ', ' + content__D + '}';
      panel__form__profile__submit.value = content;
      set__interface();
      panel__form__profile__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
      break;
  }
}



function set__interface() {
  localStorage.setItem('panel__form__input', 'true');
  localStorage.setItem('panel__form__meta', 'true');
  localStorage.setItem('panel__form__figure', 'true');
}


panel__form__input.onkeydown = function (event) {
  if (event.keyCode == 9) {
    var v = this.value;
    var s = this.selectionStart;
    var e = this.selectionEnd;
    this.value = v.substring(0, s) + '\t' + v.substring(e);
    this.selectionStart = this.selectionEnd = s+1;
    return false;
  }
} 
