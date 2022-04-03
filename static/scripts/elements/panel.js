function set__panel__bar__type(event, type) {
  clean__panel();
  switch (type) {
    case "distribution": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__distribution.style.display = "initial";
      break;
  case "dd": 
      set__panel__bar__type__body(event, type); 
      panel__form__temperature.style.display = 'initial';
      panel__form__orint.style.display = "initial";
      panel__form__ldos__parameters.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__band__parameters.style.display = 'initial';
      panel__form__phi.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__fds__fi.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      panel__form__dd.style.display = 'initial';
      break;
    case "phi": 
      set__panel__bar__type__body(event, type); 
      panel__form__temperature.style.display = 'initial';
      panel__form__orint.style.display = "initial";
      panel__form__ldos__parameters.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__band__parameters.style.display = 'initial';
      // panel__form__qfl.style.display = 'initial';
      // panel__form__cc.style.display = 'initial';
      // panel__form__cos.style.display = 'initial';
      panel__form__phi.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__fds__fi.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case "cc": 
      set__panel__bar__type__body(event, type); 
      panel__form__temperature.style.display = 'initial';
      panel__form__orint.style.display = "initial";
      panel__form__ldos__parameters.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__band__parameters.style.display = 'initial';
      // panel__form__qfl.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__cc.style.display = 'initial';
      panel__form__cos.style.display = 'initial';
      panel__form__fds__fi.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case "fds": 
      set__panel__bar__type__body(event, type); 
      panel__form__temperature.style.display = 'initial';
      panel__form__orint.style.display = "initial";
      panel__form__fds.style.display = 'initial';
      // panel__form__qfl.style.display = 'initial';
      panel__form__fds__fi.style.display = 'initial';
      panel__form__band__parameters.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__dos__parameters.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case "cos": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__cos.style.display = "initial";
      panel__form__for.style.display = 'initial';
      panel__form__ldos__parameters.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__band__parameters.style.display = 'initial';
      panel__form__temperature.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case "dos": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__dos.style.display = "initial";
      panel__form__for.style.display = 'initial';
      panel__form__dos__parameters.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__band__parameters.style.display = 'initial';
      panel__form__temperature.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case "ldos": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__ldos.style.display = "initial";
      panel__form__for_.style.display = 'initial';
      panel__form__ldos__parameters.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__band__parameters.style.display = 'initial';
      panel__form__temperature.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case "energies": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__band__electrons.style.display = "initial";
      panel__form__band__holes.style.display = "initial";
      panel__form__band__parameters.style.display = "initial";
      // panel__form__al.style.display = 'initial';
      panel__form__space__resolution.style.display = "initial";
      panel__form__wave__vector.style.display = 'initial';
      panel__form__temperature.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case "profile": 
      set__panel__bar__type__body(event, type); 
      panel__form__orint.style.display = "initial";
      panel__form__profile.style.display = "initial";
      //panel__form__al.style.display = 'initial';
      panel__form__space__resolution.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
      break;
    case 'energy__paraboloids':
      set__panel__bar__type__body(event, type);
      panel__form__orint.style.display = "initial";
      panel__form__band__parameters.style.display = "initial";
      panel__form__space__resolution.style.display = 'initial';
      panel__form__wave__vector__parameters.style.display = 'initial';
      panel__form__temperature.style.display = 'initial';
      panel__form__ep.style.display = 'initial';
      panel__form__barriers.style.display = 'initial';
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
  panel__form__al.style.display = 'none';
  panel__form__space__resolution.style.display = 'none';
  panel__form__wave__vector.style.display = 'none';
  panel__form__wave__vector__parameters.style.display = 'none';
  panel__form__for.style.display = 'none';
  panel__form__dos.style.display = 'none';
  panel__form__cos.style.display = 'none';
  panel__form__for_.style.display = 'none';
  panel__form__ldos.style.display = 'none';
  panel__form__dos__parameters.style.display = 'none';
  panel__form__ldos__parameters.style.display = 'none';
  panel__form__temperature.style.display = 'none';
  panel__form__qfl.style.display = 'none';
  panel__form__cc.style.display = 'none';
  panel__form__phi.style.display = 'none';
  panel__form__fds.style.display = 'none';
  panel__form__ep.style.display = 'none';
  panel__form__fds__fi.style.display = 'none';
  panel__form__barriers.style.display = 'none';
  panel__form__dd.style.display = 'none';
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
  if (panel__form__barriers__input.checked){
    return '"structure": "' + localStorage.getItem('panel__form__barriers__material') + ' ' + localStorage.getItem('panel__form__barriers__thickness') + '\\n' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '\\n'  + localStorage.getItem('panel__form__barriers__material') + ' ' + localStorage.getItem('panel__form__barriers__thickness') + '",';
  }
  else {   
    return '"structure": "' + localStorage.getItem('structure').replaceAll('\r', '').replaceAll('\n', '\\n') + '",';
  }
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










var xhr = null;

async function data__exchange(url_ = '', data_ = {}, name) {
    data_ = JSON.stringify(data_)
    xhr = $.ajax({
        cache: false,
        type: "POST",
        contentType: "json",
        url: url_,
        data: data_,
        dataType: 'json',
        success: function(data){ data__recived(data, name) },
        error: function(jqXHR){ alert(jqXHR); console.log('ERROR')}
    });
    panel__bar__run.innerHTML = "Pass";
}

function data__recived(data, name) {
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
        if (panel__form__orint__orint.checked) {
          panel__form__output.style.display = 'none';
          panel__form__output__label.style.display = 'none';

          const index = data['plot'].search('</head>');
          var winPrint = window.open('','_blank');
          console.log(data['plot'].slice(0,index) + '<title>' + 'Total Energies' + '</title>' + '<style>body{margin:0}</style>' + data['plot'].slice(index));
          winPrint.document.write(data['plot'].slice(0,index) + '<title>' + name + '</title>' + '<style>body{margin:0}</style>' + data['plot'].slice(index));
          winPrint.document.close();
          winPrint.focus();
        }
        else {
          set__interface('output');
          panel__form__output.srcdoc = data['plot']
        }
      }
      else {
        if (data['output'] != null){
          set__interface('output')
        }
        panel__form__output.srcdoc = render__html(data['output']);
      }
    }
  }
  favicon.href = window.location.href + "site__icon.ico";
  document.title = 'NanoTools - Material engineering application';
  panel__bar__run.innerHTML = "Send";
}





// function print__output(type, input) {
//   data__exchange(type, { 'input': input })
//   .then(data => {
//     if (data != null) {
//       if (data['meta'] != null) {
//         set__interface('meta');
//         panel__form__meta.value = data['meta']
//         panel__form__meta__height_adjust();
//       }
//       else {hide__interface('meta')};

//       set__interface('input');

//       if (data['error'] != null) {
//           set__interface('output');
//           panel__form__output.srcdoc = render__html(data['error']);
//       }
//       else {
//         if (data['plot'] != null) {
//           set__interface('output')
//           panel__form__output.srcdoc = data['plot'];
//         }
//         else {
//           if (data['output'] != null){
//             set__interface('output')
//           }
//           panel__form__output.srcdoc = render__html(data['output']);
//         }
//       }
//     }
//     favicon.href = window.location.href + "site__icon.ico";
//     document.title = 'NanoTools - Material engineering application';
//   })
// }


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
  if (panel__bar__run.textContent == 'Send') {
    favicon.href = window.location.href + "site__icon_.ico";
    document.title = 'Computing...';
    switch(panel__bar__type.dataset.type) {
      case 'distribution':
        panel__bar__run__distribution(event);
        break;
      case 'dd':
        panel__bar__run__dd(event);
        break;
      case 'phi':
        panel__bar__run__phi(event);
        break;
      case 'cc':
        panel__bar__run__cc(event);
          break;
      case 'fds':
        panel__bar__run__fds(event);
          break;
      case 'cos':
        panel__bar__run__cos(event);
        break;
      case 'dos':
        panel__bar__run__dos(event);
        break;
      case 'ldos':
        panel__bar__run__ldos(event);
        break;
      case 'energies':
        panel__bar__run__energies(event);
        break;
      case 'profile':
        panel__bar__run__profile(event);
        break;
      case 'energy__paraboloids':
        panel__bar__run__energy__paraboloids(event);
        break;
    }
  }
  else {
    xhr.abort();
    favicon.href = window.location.href + "site__icon.ico";
    document.title = 'NanoTools - Material engineering application';
    panel__bar__run.innerHTML = "Send";
  }
}
