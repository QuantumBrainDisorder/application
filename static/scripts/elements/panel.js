function set__panel__bar__type(event, type) {
  clean__panel();
  switch (type) {
    case "distribution": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__distribution.style.display = "initial";
      break;
    case "dos": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__dos.style.display = "initial";
      break;
    case "energies": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__energies.style.display = "initial";
      break;
    case "profile": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__profile.style.display = "initial";
      break;
  }
    // properties__list.style.width = properties__property.getBoundingClientRect().right - properties__property.getBoundingClientRect().left + "px";
    // localStorage.setItem('properties__list__width', properties__list.style.width);
  
    // localStorage.setItem('properties__list__height', properties__scope.getBoundingClientRect().bottom - properties__properties.getBoundingClientRect().bottom + "px");
    // properties__list.style.height = localStorage.getItem('properties__list__height');  
  
    panel__bar__type.parentElement.style.backgroundColor = css__vars.getPropertyValue('--theme1');
}
  
function set__panel__bar__type__body(event, type) {
    panel__bar__type.innerHTML = event.target.textContent;
    panel__bar__type.dataset.type = type;
    localStorage.setItem('panel__bar__type__content', event.target.textContent);
    localStorage.setItem('panel__bar__type', type);
}
  
function clean__panel() {
  panel__form__input__label.style.display = "none";
  panel__form__input.style.display = "none";
  panel__form__meta.style.display = "none";
  panel__form__output__label.style.display = "none";
  panel__form__output.style.display = "none";
  panel__form__orint.style.display = "none";
  panel__form__distribution.style.display = "none";
  panel__form__profile.style.display = "none";
  panel__form__energies.style.display = "none";
  panel__form__dos.style.display = "none";
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



// panel__bar__run.onclick = function (event) {
//   var content = null;
//   switch(panel__bar__type.dataset.form) {
//     case "energy__profile":
//       content__A = '"structure": ' + '"' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
//       content__B = '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
//       content__C = '"effective__mass": ' + localStorage.getItem('property__effective__mass').replaceAll('\r', '') ;
//       content__D = '"bowings": ' + localStorage.getItem('property__bowings').replaceAll('\r', '') ;
      
//       var unit__structure = null;
//       switch (localStorage.getItem('structure__unit')) {
//         case 'nm': unit__structure = 'nm'; break;
//         case '&#8491;': unit__structure = 'Angs'; break;
//         case '&#956;m': unit__structure = 'um'; break;
//       }
//       content__E = '"unit__structure": ' + '"' + unit__structure + '"';
//       content__F = '"unit__energy__gap": ' + '"' + localStorage.getItem('property__unit__energy__gap') + '"';
//       content__G = '"unit__effective__mass": ' + '"' + localStorage.getItem('property__unit__effective__mass') + '"';

//       content__H = '"checkbox__del": ' + '"' + String(panel__form__energy__profile__del.value) + '"';
//       content__I = '"checkbox__dwf": ' + '"' + String(panel__form__energy__profile__dwf.value) + '"';
//       content__J = '"checkbox__deb": ' + '"' + String(panel__form__energy__profile__deb.value) + '"';

//       content = '{' + content__A + ', ' + content__B + ', ' + content__C + ', ' + content__D + ', ' + content__E + ', ' + content__F + ', ' + content__G + ', ' + content__H + ', ' +  content__I + ', ' +  content__J + '}';
//       panel__form__energy__profile__submit.value = content;
//       set__interface();
//       panel__form__energy__profile__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
//       break;

//     case "distribution":
//       if (panel__bar__type.dataset.type == 'distributions__energy__gap') {
//         content = '{' + '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';  
//       }
//       else if (panel__bar__type.dataset.type = 'distributions__lattice__constant') {
//         content = '{' + '"lattice__constant":' + '"' + localStorage.getItem('property__lattice__constant').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';
//       }
//       panel__form__distribution__submit.value = content;
//       set__interface();
//       panel__form__distribution__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
//       break;

//     case "profile":
//       content__A = '"structure": ' + '"' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
//       content__B = '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
//       content__C = '"bowings": ' + localStorage.getItem('property__bowings').replaceAll('\r', '') ;
//       var unit = null;
//       switch (localStorage.getItem('structure__unit')) {
//         case 'nm': unit = 'nm'; break;
//         case '&#8491;': unit = 'Angs'; break;
//         case '&#956;m': unit = 'um'; break;
//       }
//       content__D = '"structure__unit": ' + '"' + unit + '"';
//       content = '{' + content__A + ', ' + content__B + ', ' + content__C + ', ' + content__D + '}';
//       panel__form__profile__submit.value = content;
//       set__interface();
//       panel__form__profile__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
//       break;
//   }
// }




function get__property(property) {
  return '"' + localStorage.getItem(property) + '": "' + localStorage.getItem('property__' + localStorage.getItem(property)).replaceAll('\r', '').replaceAll('\n', '\\n') + '",'
}

function get__property__unit(property) {
  return '"' + localStorage.getItem(property) + '": "' + localStorage.getItem('property__unit__' + localStorage.getItem(property)) + '",'
}

function get__theme() {
  return '"theme": {' +
    '"--theme0": "' + css__vars.getPropertyValue('--theme0') + '",' +
    '"--theme1": "' + css__vars.getPropertyValue('--theme1') + '",' +
    '"--theme2": "' + css__vars.getPropertyValue('--theme2') + '",' + 
    '"--theme3": "' + css__vars.getPropertyValue('--theme3') + '",' +
    '"--theme4": "' + css__vars.getPropertyValue('--theme4') + '"' +
    '},'
}

function hide__interface() {
  arguments = Array.from(arguments);
  if (arguments.includes('input')) {
    panel__form__input__label.style.display = "none";
    panel__form__input.style.display = "none";
    localStorage.removeItem('panel__form__input');
  }
  if (arguments.includes('meta')) {
    panel__form__meta.style.display = "none";
    localStorage.removeItem('panel__form__meta');
  }
  if (arguments.includes('output')) {
    panel__form__output__label.style.display = "none";
    panel__form__output.style.display = "none";
    localStorage.removeItem('panel__form__output');
  }
}
function set__interface() {
  arguments = Array.from(arguments);
  if (arguments.includes('input')) {
    panel__form__input__label.style.display = "block";
    panel__form__input.style.display = "block";
    localStorage.setItem('panel__form__input', 'true');
  }
  if (arguments.includes('meta')) {
    panel__form__meta.style.display = "block";
    localStorage.setItem('panel__form__meta', 'true');
  }
  if (arguments.includes('output')) {
    panel__form__output__label.style.display = "block";
    panel__form__output.style.display = "block";
    localStorage.setItem('panel__form__output', 'true');
  }
}
function render__html(code) {
  return String.raw`<!DOCTYPE html><head><meta charset="utf-8" /></head><body><code style="color: ` + css__vars.getPropertyValue('--theme4') + '">' + code + String.raw`</code></body></html>`
}
panel__bar__run.onclick = function (event) {
  switch(panel__bar__type.dataset.type) {
    case 'distribution':
      var input = "";
      var input_ = "";
      if (panel__form__distribution__w__axis.checked) { 
        input += get__property('panel__form__distribution__w__axis__property');
        input_ += get__property__unit('panel__form__distribution__w__axis__property')
      }
      if (panel__form__distribution__x__axis.checked) { 
        input += get__property('panel__form__distribution__x__axis__property');
        input_ += get__property__unit('panel__form__distribution__x__axis__property')
      }
      if (panel__form__distribution__y__axis.checked) { 
        input += get__property('panel__form__distribution__y__axis__property');
        input_ += get__property__unit('panel__form__distribution__y__axis__property')
      }
      if (panel__form__distribution__z__axis.checked) { 
        input += get__property('panel__form__distribution__z__axis__property');
        input_ += get__property__unit('panel__form__distribution__z__axis__property')
      }

      if (input != '') { 
        input  = '"axes": {' + input.slice(0, input.length - 1) + '},';
        input += '"units": {' + input_.slice(0, input_.length - 1) + '},'
      }
      else { 
        input  = '"axes": {},';
        input += '"units": {},'
     };

      if (panel__form__orint__orint.checked) { input += '"orint": "",'}
      // if (panel__form__distribution__al.checked) {input += '"al": "",'}
      if (panel__form__distribution__ii.checked) {input += '"ii": "",'}
      input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 

      input += get__theme();

      input = '{' + input.slice(0, input.length - 1) + '}';

      data__exchange('run__distribution', { 'input': input })
      .then(data => {
        if (data != null) {
          if (data['meta'] != null) {set__interface('meta')}
          else {hide__interface('meta')};

          set__interface('input');

          if (data['error'] != null) {
              set__interface('output');
              panel__form__output.srcdoc = render__html(data['error']);
          }
          else {
            if (data['plot'] != null) {
              set__interface('output')
              panel__form__output.srcdoc = data['plot'];
            }
            else {
              if (data['code'] != null){
                set__interface('output')
              }
              panel__form__output.srcdoc = render__html(data['code']);
            }
          }
        }
        
      });
      break;
    case 'dos':
      break;
    case 'energies':
      break;
    case 'profile':
      break;
  }
}

panel__form__output.onload = function (event) {
  panel__form__output.style.height = (20 + panel__form__output.contentWindow.document.body.scrollHeight) + 'px';
}
  // data__exchange('run__distribution', { 'input': '12' })
  // .then(data => {
  //     structure.innerHTML = data['dat'];
  //     console.log(data)
  //   });




  // var content = null;
  // switch(panel__bar__type.dataset.form) {
  //   case "energy__profile":
  //     content__A = '"structure": ' + '"' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
  //     content__B = '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
  //     content__C = '"effective__mass": ' + localStorage.getItem('property__effective__mass').replaceAll('\r', '') ;
  //     content__D = '"bowings": ' + localStorage.getItem('property__bowings').replaceAll('\r', '') ;
      
  //     var unit__structure = null;
  //     switch (localStorage.getItem('structure__unit')) {
  //       case 'nm': unit__structure = 'nm'; break;
  //       case '&#8491;': unit__structure = 'Angs'; break;
  //       case '&#956;m': unit__structure = 'um'; break;
  //     }
  //     content__E = '"unit__structure": ' + '"' + unit__structure + '"';
  //     content__F = '"unit__energy__gap": ' + '"' + localStorage.getItem('property__unit__energy__gap') + '"';
  //     content__G = '"unit__effective__mass": ' + '"' + localStorage.getItem('property__unit__effective__mass') + '"';

  //     content__H = '"checkbox__del": ' + '"' + String(panel__form__energy__profile__del.value) + '"';
  //     content__I = '"checkbox__dwf": ' + '"' + String(panel__form__energy__profile__dwf.value) + '"';
  //     content__J = '"checkbox__deb": ' + '"' + String(panel__form__energy__profile__deb.value) + '"';

  //     content = '{' + content__A + ', ' + content__B + ', ' + content__C + ', ' + content__D + ', ' + content__E + ', ' + content__F + ', ' + content__G + ', ' + content__H + ', ' +  content__I + ', ' +  content__J + '}';
  //     panel__form__energy__profile__submit.value = content;
  //     set__interface();
  //     panel__form__energy__profile__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
  //     break;

  //   case "distribution":
  //     if (panel__bar__type.dataset.type == 'distributions__energy__gap') {
  //       content = '{' + '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';  
  //     }
  //     else if (panel__bar__type.dataset.type = 'distributions__lattice__constant') {
  //       content = '{' + '"lattice__constant":' + '"' + localStorage.getItem('property__lattice__constant').replaceAll('\r', '').replaceAll('\n', '\\n') + '"' + '}';
  //     }
  //     panel__form__distribution__submit.value = content;
  //     set__interface();
  //     panel__form__distribution__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
  //     break;

  //   case "profile":
  //     content__A = '"structure": ' + '"' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
  //     content__B = '"energy__gap": ' + '"' + localStorage.getItem('property__energy__gap').replaceAll('\r', '').replaceAll('\n', '\\n') + '"';
  //     content__C = '"bowings": ' + localStorage.getItem('property__bowings').replaceAll('\r', '') ;
  //     var unit = null;
  //     switch (localStorage.getItem('structure__unit')) {
  //       case 'nm': unit = 'nm'; break;
  //       case '&#8491;': unit = 'Angs'; break;
  //       case '&#956;m': unit = 'um'; break;
  //     }
  //     content__D = '"structure__unit": ' + '"' + unit + '"';
  //     content = '{' + content__A + ', ' + content__B + ', ' + content__C + ', ' + content__D + '}';
  //     panel__form__profile__submit.value = content;
  //     set__interface();
  //     panel__form__profile__submit.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view:window}));
  //     break;
  // }
