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
      panel__form__band__electrons.style.display = "initial";
      panel__form__band__holes.style.display = "initial";
      panel__form__band__parameters.style.display = "initial";
      panel__form__al.style.display = 'initial';
      panel__form__space__resolution.style.display = "initial";
      panel__form__wave__vector.style.display = 'initial';
      break;
    case "profile": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__profile.style.display = "initial";
      panel__form__al.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
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
  panel__form__band__electrons.style.display = "none";
  panel__form__band__holes.style.display = "none";
  panel__form__band__parameters.style.display = "none";
  panel__form__dos.style.display = "none";
  panel__form__al.style.display = 'none';
  panel__form__space__resolution.style.display = 'none';
  panel__form__wave__vector.style.display = 'none';
}













function get__property(property) {
  return '"' + localStorage.getItem(property) + '": "' + localStorage.getItem('property__' + localStorage.getItem(property)).replaceAll('\r', '').replaceAll('\n', '\\n') + '",'
}
function get__sheet(property) {
  return '"' + property + '": "' + localStorage.getItem('property__' + property).replaceAll('\r', '').replaceAll('\n', '\\n') + '",'
}
function get__sheet__json(property) {
  return '"' + property + '": ' + localStorage.getItem('property__' + property).replaceAll('\r', '') + ','
}
function get__property__unit(property) {
  return '"' + localStorage.getItem(property) + '": "' + localStorage.getItem('property__unit__' + localStorage.getItem(property)) + '",'
}
function get__sheet__unit(property) {
  return '"' + property + '": "' + localStorage.getItem('property__unit__' + property) + '",'
}

function get__structure() {
  return '"structure": "' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '",'
}

function get__structure__unit() {
  let unit = null;
  switch (localStorage.getItem('structure__unit')) {
    case 'nm': unit = 'nm'; break;
    case '&#8491;': unit = 'Angs'; break;
    case '&#956;m': unit = 'um'; break;
  }
  return '"structure": "' + unit + '",'
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



function print__output(type, input) {
  data__exchange(type, { 'input': input })
  .then(data => {
    if (data != null) {
      if (data['meta'] != null) {
        set__interface('meta');
        panel__form__meta.value = data['meta']
        panel__form__meta__height_adjust();
      }
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
          if (data['output'] != null){
            set__interface('output')
          }
          panel__form__output.srcdoc = render__html(data['output']);
        }
      }
    }
    
  })
}


panel__form__output.onload = function (event) {
  panel__form__output.style.height = (20 + panel__form__output.contentWindow.document.body.scrollHeight) + 'px';
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

function panel__form__meta__height_adjust() {
    panel__form__meta.style.height = 0;
    panel__form__meta.style.height = panel__form__meta.scrollHeight + 'px';
}


panel__bar__run.onclick = function (event) {
  switch(panel__bar__type.dataset.type) {
    case 'distribution':
      panel__bar__run__distribution(event);
      break;
    case 'dos':
      break;
    case 'energies':
      panel__bar__run__energies(event);
      break;
    case 'profile':
      panel__bar__run__profile(event);
      break;
  }
}

function panel__bar__run__energies(event) {
  input = ''
  input_ = ''

  if (panel__form__band__electrons__input.checked) {
    input += get__sheet('energy__gap')
    input_ += get__sheet__unit('energy__gap');
    input += get__sheet('valence__band__offset');
    input_ += get__sheet__unit('valence__band__offset');  
  }
  else if (panel__form__band__holes__input.checked) {
    input += get__sheet('valence__band__offset');
    input_ += get__sheet__unit('valence__band__offset');
  }
  
  input += get__sheet__json('bowings');
  input += get__sheet__json('effective__mass');
  input += get__structure();

  input_ += get__sheet__unit('effective__mass');
  input_ += get__structure__unit();
   
  input  += '"sheets": {' + input.slice(0, input.length - 1) + '},';

  input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
  input_ += '"space__resolution": "m",'; 
  input += '"wave__vector": "' + localStorage.getItem('panel__form__wave__vector__input') + '",'; 
  input_ += '"wave__vector": "1/m",'; 
  input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
  input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
  input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 
  input += '"units": {' + input_.slice(0, input_.length - 1) + '},';

  if (panel__form__band__electrons__input.checked) {input += '"electrons": "",'}
  if (panel__form__band__electrons__del.checked) {input += '"del__electrons": "",'}
  if (panel__form__band__electrons__dwf.checked) {input += '"dwf__electrons": "",'}
  else if (panel__form__band__electrons__dwf__normalised.checked) {input += '"dwf__normalised__electrons": "",'}
  
  if (panel__form__band__holes__input.checked) {input += '"holes": "",'}
  if (panel__form__band__holes__del__lh.checked) {input += '"del__holes__lh": "",'}
  if (panel__form__band__holes__del__hh.checked) {input += '"del__holes__hh": "",'}
  if (panel__form__band__holes__dwf.checked) {input += '"dwf__holes": "",'}
  else if (panel__form__band__holes__dwf__normalised.checked) {input += '"dwf__normalised__holes": "",'}

  if (panel__form__orint__orint.checked) { input += '"orint": "",'}
  if (panel__form__al__input.checked) {input += '"al": "",'}

  input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
  input += get__theme();

  input = '{' + input.slice(0, input.length - 1) + '}';
  console.log(input);
  print__output('run__energies', input)
}

function panel__bar__run__profile (event) {
    input = get__property('panel__form__profile__property');
    input += get__sheet__json('bowings');
    input += get__structure();

    input_ = get__property__unit('panel__form__profile__property');
    input_ += get__structure__unit();
     
    input  = '"sheets": {' + input.slice(0, input.length - 1) + '},';
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';

  if (panel__form__orint__orint.checked) { input += '"orint": "",'}
  if (panel__form__al__input.checked) {input += '"al": "",'}
  
  input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
  input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
  input += get__theme();

  input = '{' + input.slice(0, input.length - 1) + '}';
  print__output('run__profile', input)
}





function panel__bar__run__distribution (event) {
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

  print__output('run__distribution', input);
}

