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
  input += get__sheet__json('bowings');

  // if (panel__form__distribution__al.checked) {input += '"al": "",'}
  if (panel__form__distribution__ii.checked) {
    input += '"ii": "",';
    input += '"r": "' + localStorage.getItem('panel__form__distribution__ii__r') + '",';
    if (panel__form__distribution__ii__pobd.checked) { input += '"pobd": "",';}
  }
  input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 

  input += get__theme();

  input = '{' + input.slice(0, input.length - 1) + '}';

  data__exchange('run__distribution', { 'input': input }, 'Properties');
}
    




function panel__bar__run__profile (event) {
  input = get__property('panel__form__profile__property');
  input += get__sheet__json('bowings');
  input += get__structure();

  input_ = get__property__unit('panel__form__profile__property');
  input_ += get__structure__unit();
  input_ += '"space__resolution": "nm",'; 
    
  input  = '"sheets": {' + input.slice(0, input.length - 1) + '},';
  input += '"units": {' + input_.slice(0, input_.length - 1) + '},';

if (panel__form__al__input.checked) {input += '"al": "",'}


if (panel__form__barriers__input.checked) {input += '"barriers": "",'}
input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
input += get__theme();

input = '{' + input.slice(0, input.length - 1) + '}';
data__exchange('run__profile', { 'input': input }, 'Profile');
}




function panel__bar__run__energies(event) {
    input = ''
    input_ = ''
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
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
    input_ += '"space__resolution": "nm",'; 
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
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';
  
    if (panel__form__al__input.checked) {input += '"al": "",'}
    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}
  
    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';
    data__exchange('run__energies', { 'input': input }, 'Energies');
    // print__output('run__energies', input)
}
  


  
function panel__bar__run__energy__paraboloids(event) {
    input = ''
    input_ = ''
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
    input += get__sheet('energy__gap')
    input_ += get__sheet__unit('energy__gap');
    input += get__sheet('valence__band__offset');
    input_ += get__sheet__unit('valence__band__offset');  
    input += get__sheet('valence__band__offset');
    input_ += get__sheet__unit('valence__band__offset');
    
    input += get__sheet__json('bowings');
    input += get__sheet__json('effective__mass');
    input += get__structure();
  
    input_ += get__sheet__unit('effective__mass');
    input_ += get__structure__unit();
     
    input  += '"sheets": {' + input.slice(0, input.length - 1) + '},';
  
    input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
    input_ += '"space__resolution": "nm",'; 
    input += '"wave__vector": "' + localStorage.getItem('panel__form__wave__vector__input') + '",'; 
    input_ += '"wave__vector__parameters": "1/m",'; 
    input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
    input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
    input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';
    
    input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
    input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
    input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
    
    input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
    input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
    input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
  
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';
  
    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}
    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';
    
    data__exchange('run__energy__paraboloids', { 'input': input }, 'Dispersion Relation');
    // print__output('run__energy__paraboloids', input)
}




function panel__bar__run__dos(event) {
    input = ''
    input_ = ''
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
    if (panel__form__for__el.checked) {
      input += get__sheet('energy__gap')
      input_ += get__sheet__unit('energy__gap');
      input += get__sheet('valence__band__offset');
      input_ += get__sheet__unit('valence__band__offset');  
    }
    else if (panel__form__for__lh.checked) {
      input += get__sheet('valence__band__offset');
      input_ += get__sheet__unit('valence__band__offset')
    }
    else if (panel__form__for__hh.checked) {
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
    input_ += '"space__resolution": "nm",'; 
  
    input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
    input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
    input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 

    input += '"energy__dos__t": "' + localStorage.getItem("panel__form__dos__parameters__et") + '",'; 
    input += '"energy__dos__b": "' + localStorage.getItem("panel__form__dos__parameters__eb") + '",'; 
    input += '"energy__dos__r": "' + localStorage.getItem("panel__form__dos__parameters__er") + '",'; 
    
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';
  
    input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
    input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
    input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
    
    input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
    input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
    input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  
  
   
    if (panel__form__al__input.checked) {input += '"al": "",'}
    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';
  
    if (panel__form__for__lh.checked) {input += '"for__lh": "",'}
    if (panel__form__for__hh.checked) {input += '"for__hh": "",'}
    if (panel__form__for__el.checked) {input += '"for__el": "",'}
  
    if (panel__form__dos__2d.checked) {input += '"dos__2d": "",'}
    if (panel__form__dos__3d.checked) {input += '"dos__3d": "",'}
    if (panel__form__dos__merged.checked) {input += '"dos__merged": "",'}
  
    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';
    data__exchange('run__dos', { 'input': input }, 'DOS');
    // print__output('run__dos', input)
}
  
  
  
  
function panel__bar__run__ldos(event) {
    input = ''
    input_ = ''
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
    if (panel__form__for___el.checked) {
      input += get__sheet('energy__gap')
      input_ += get__sheet__unit('energy__gap');
      input += get__sheet('valence__band__offset');
      input_ += get__sheet__unit('valence__band__offset');  
    }
    else if (panel__form__for___lh.checked) {
      input += get__sheet('valence__band__offset');
      input_ += get__sheet__unit('valence__band__offset')
    }
    else if (panel__form__for___hh.checked) {
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
    input_ += '"space__resolution": "nm",'; 

    input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
    input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
    input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 

    input += '"energy__ldos__t": "' + localStorage.getItem("panel__form__ldos__parameters__et") + '",'; 
    input += '"energy__ldos__b": "' + localStorage.getItem("panel__form__ldos__parameters__eb") + '",'; 
    input += '"energy__ldos__r": "' + localStorage.getItem("panel__form__ldos__parameters__er") + '",'; 
    
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';
  
    input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
    input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
    input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
    
    input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
    input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
    input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  
  
  
    if (panel__form__al__input.checked) {input += '"al": "",'}
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';
  
    if (panel__form__for___lh.checked) {input += '"for___lh": "",'}
    if (panel__form__for___hh.checked) {input += '"for___hh": "",'}
    if (panel__form__for___el.checked) {input += '"for___el": "",'}
  
    if (panel__form__ldos__2d.checked) {input += '"ldos__2d": "",'}
    if (panel__form__ldos__3d.checked) {input += '"ldos__3d": "",'}
    if (panel__form__ldos__merged.checked) {input += '"ldos__merged": "",'}
  
    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}
    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';
    data__exchange('run__ldos', { 'input': input }, 'LDOS');
    // print__output('run__ldos', input)
}
  
  
  
  
function panel__bar__run__cos(event) {
    input = ''
    input_ = ''
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
    if (panel__form__for__el.checked) {
      input += get__sheet('energy__gap')
      input_ += get__sheet__unit('energy__gap');
      input += get__sheet('valence__band__offset');
      input_ += get__sheet__unit('valence__band__offset');  
    }
    else if (panel__form__for__lh.checked) {
      input += get__sheet('valence__band__offset');
      input_ += get__sheet__unit('valence__band__offset')
    }
    else if (panel__form__for__hh.checked) {
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
    input_ += '"space__resolution": "nm",'; 

    input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
    input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
    input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 
    
    input += '"energy__ldos__t": "' + localStorage.getItem("panel__form__ldos__parameters__et") + '",'; 
    input += '"energy__ldos__b": "' + localStorage.getItem("panel__form__ldos__parameters__eb") + '",'; 
    input += '"energy__ldos__r": "' + localStorage.getItem("panel__form__ldos__parameters__er") + '",'; 
    
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';
  
    input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
    input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
    input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
    
    input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
    input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
    input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  
  
  
    if (panel__form__al__input.checked) {input += '"al": "",'}
  
    if (panel__form__for__lh.checked) {input += '"for__lh": "",'}
    if (panel__form__for__hh.checked) {input += '"for__hh": "",'}
    if (panel__form__for__el.checked) {input += '"for__el": "",'}
  
    if (panel__form__cos__2d.checked) {input += '"cos__2d": "",'}
    if (panel__form__cos__3d.checked) {input += '"cos__3d": "",'}
    if (panel__form__cos__merged.checked) {input += '"cos__merged": "",'}
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';     
  
    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}

    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';
    data__exchange('run__cos', { 'input': input }, 'Concentration of states');
    // print__output('run__cos', input)
}
  
  
  
  
function panel__bar__run__fds(event) {
    input = ''
    input_ = ''
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
    input += get__sheet('energy__gap');
    input_ += get__sheet__unit('energy__gap');
    input += get__sheet('valence__band__offset');
    input_ += get__sheet__unit('valence__band__offset');  
  
  

    input += get__sheet__json('bowings');
    input += get__sheet__json('effective__mass');
    input += get__structure();
  
    input_ += get__sheet__unit('effective__mass');
    input_ += get__structure__unit();
     
    input  += '"sheets": {' + input.slice(0, input.length - 1) + '},';
  
    input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
    input_ += '"space__resolution": "nm",'; 
  
    input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
    input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
    input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 

    input += '"energy__dos__t": "' + localStorage.getItem("panel__form__dos__parameters__et") + '",'; 
    input += '"energy__dos__b": "' + localStorage.getItem("panel__form__dos__parameters__eb") + '",'; 
    input += '"energy__dos__r": "' + localStorage.getItem("panel__form__dos__parameters__er") + '",'; 
    
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';
  
    input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
    input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
    input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
    
    input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
    input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
    input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  
  
    if (panel__form__al__input.checked) {input += '"al": "",'}
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';
  
    if (panel__form__fds__epr.checked) {input += '"append__epr": "",'}
    if (panel__form__fds__dos.checked) {input += '"append__dos": "",'}

    if (panel__form__fds__fi__B.checked) {input += '"fi__method": "B",'}
    else {input += '"fi__method": "OWS",'};
    input += '"fi__res": "' + localStorage.getItem("panel__form__fds__fi__res") + '",'; 

    // if (panel__form__fds__for__el.checked) {input += '"for__el": "",'}
    // if (panel__form__fds__for__ho.checked) {input += '"for__ho": "",'}
  
    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}

    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';

    data__exchange('run__fds', { 'input': input }, 'Fermi-Dirac statistics');
}
  
  
  
  
function panel__bar__run__cc(event) {
    input = ''
    input_ = ''
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
    input += get__sheet('energy__gap')
    input_ += get__sheet__unit('energy__gap');
    input += get__sheet('valence__band__offset');
    input_ += get__sheet__unit('valence__band__offset');  
    
    input += get__sheet__json('bowings');
    input += get__sheet__json('effective__mass');
    input += get__structure();
  
    input_ += get__sheet__unit('effective__mass');
    input_ += get__structure__unit();
     
    input  += '"sheets": {' + input.slice(0, input.length - 1) + '},';
  
    input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
    input_ += '"space__resolution": "nm",'; 
  
    input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
    input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
    input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 

    input += '"energy__ldos__t": "' + localStorage.getItem("panel__form__ldos__parameters__et") + '",'; 
    input += '"energy__ldos__b": "' + localStorage.getItem("panel__form__ldos__parameters__eb") + '",'; 
    input += '"energy__ldos__r": "' + localStorage.getItem("panel__form__ldos__parameters__er") + '",'; 
  
    // input += '"qfl__el": "' + localStorage.getItem("panel__form__qfl__el") + '",'; 
    // input += '"qfl__ho": "' + localStorage.getItem("panel__form__qfl__ho") + '",'; 
    
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';
  
    input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
    input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
    input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
    
    input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
    input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
    input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  
  
  
    // if (panel__form__al__input.checked) {input += '"al": "",'}
  
  
    if (panel__form__cc__el.checked) {input += '"cc__el": "",'}
    if (panel__form__cc__ho.checked) {input += '"cc__ho": "",'}
    if (panel__form__cc__di.checked) {input += '"cc__di": "",'}
  
    if (panel__form__cos__2d.checked) {input += '"cos__2d": "",'}
    if (panel__form__cos__3d.checked) {input += '"cos__3d": "",'}
    if (panel__form__cos__merged.checked) {input += '"cos__merged": "",'}
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';
  
    if (panel__form__fds__fi__B.checked) {input += '"fi__method": "B",'}
    else {input += '"fi__method": "OWS",'};
    input += '"fi__res": "' + localStorage.getItem("panel__form__fds__fi__res") + '",'; 

    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}

    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';
    data__exchange('run__cc', { 'input': input }, 'Carriers concentration');
    // print__output('run__cc', input)
}
  
  
  
  
function panel__bar__run__phi(event) {
    input = ''
    input_ = ''
  
    
    input += get__sheet('relative__permittivity')
    input_ += get__sheet__unit('relative__permittivity');
  
    input += get__sheet('alpha__varshni')
    input_ += get__sheet__unit('alpha__varshni');
    
    input += get__sheet('beta__varshni')
    input_ += get__sheet__unit('beta__varshni');
  
    input += get__sheet('energy__gap')
    input_ += get__sheet__unit('energy__gap');
    input += get__sheet('valence__band__offset');
    input_ += get__sheet__unit('valence__band__offset');  
  
    
    input += get__sheet__json('bowings');
    input += get__sheet__json('effective__mass');
    input += get__structure();
  
    input_ += get__sheet__unit('effective__mass');
    input_ += get__structure__unit();
     
    input  += '"sheets": {' + input.slice(0, input.length - 1) + '},';
  
    input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
    input_ += '"space__resolution": "nm",'; 
  
    input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
    input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
    input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 
  
    input += '"energy__ldos__t": "' + localStorage.getItem("panel__form__ldos__parameters__et") + '",'; 
    input += '"energy__ldos__b": "' + localStorage.getItem("panel__form__ldos__parameters__eb") + '",'; 
    input += '"energy__ldos__r": "' + localStorage.getItem("panel__form__ldos__parameters__er") + '",'; 
  
    // input += '"qfl__el": "' + localStorage.getItem("panel__form__qfl__el") + '",'; 
    // input += '"qfl__ho": "' + localStorage.getItem("panel__form__qfl__ho") + '",'; 
    
    input += '"units": {' + input_.slice(0, input_.length - 1) + '},';
  
    input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
    input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
    input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
    
    input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
    input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
    input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  
  
    input += '"phi__0": "' + localStorage.getItem("panel__form__phi__0") + '",'; 
    input += '"phi__L": "' + localStorage.getItem("panel__form__phi__L") + '",'; 
  
    input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
    input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
    input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
    input += '"ep__unit": "' + 'mV' + '",';
  

    if (panel__form__fds__fi__B.checked) {input += '"fi__method": "B",'}
    else {input += '"fi__method": "OWS",'};
    input += '"fi__res": "' + localStorage.getItem("panel__form__fds__fi__res") + '",'; 


    if (panel__form__barriers__input.checked) {input += '"barriers": "",'}
    
    input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
    input += get__theme();
  
    input = '{' + input.slice(0, input.length - 1) + '}';
    data__exchange('run__phi', { 'input': input }, 'Internal electric potential');
    // print__output('run__phi', input)
}






  
function panel__bar__run__dd(event) {
  input = ''
  input_ = ''
  
  input += get__sheet('relative__permittivity')
  input_ += get__sheet__unit('relative__permittivity');

  input += get__sheet('alpha__varshni')
  input_ += get__sheet__unit('alpha__varshni');
  
  input += get__sheet('beta__varshni')
  input_ += get__sheet__unit('beta__varshni');

  input += get__sheet('energy__gap')
  input_ += get__sheet__unit('energy__gap');
  input += get__sheet('valence__band__offset');
  input_ += get__sheet__unit('valence__band__offset');  

  
  input += get__sheet__json('bowings');
  input += get__sheet__json('effective__mass');
  input += get__sheet__json('carriers__mobility');
  input += get__structure();

  input_ += get__sheet__unit('effective__mass');
  input_ += get__sheet__unit('carriers__mobility');
  input_ += get__structure__unit();
   
  input  += '"sheets": {' + input.slice(0, input.length - 1) + '},';

  input += '"space__resolution": "' + localStorage.getItem('panel__form__space__resolution__input') + '",'; 
  input_ += '"space__resolution": "nm",'; 

  input += '"energy__levels__limit__top": "' + localStorage.getItem("panel__form__band__parameters__tle") + '",'; 
  input += '"energy__levels__limit__bottom": "' + localStorage.getItem("panel__form__band__parameters__ble") + '",'; 
  input += '"energy__levels__resolution": "' + localStorage.getItem("panel__form__band__parameters__elr") + '",'; 

  input += '"energy__ldos__t": "' + localStorage.getItem("panel__form__ldos__parameters__et") + '",'; 
  input += '"energy__ldos__b": "' + localStorage.getItem("panel__form__ldos__parameters__eb") + '",'; 
  input += '"energy__ldos__r": "' + localStorage.getItem("panel__form__ldos__parameters__er") + '",'; 

  // input += '"qfl__el": "' + localStorage.getItem("panel__form__qfl__el") + '",'; 
  // input += '"qfl__ho": "' + localStorage.getItem("panel__form__qfl__ho") + '",'; 
  
  input += '"units": {' + input_.slice(0, input_.length - 1) + '},';

  input += '"wave__vector__parameters__tx": "' + localStorage.getItem("panel__form__wave__vector__parameters__tx") + '",'; 
  input += '"wave__vector__parameters__bx": "' + localStorage.getItem("panel__form__wave__vector__parameters__bx") + '",'; 
  input += '"wave__vector__parameters__rx": "' + localStorage.getItem("panel__form__wave__vector__parameters__rx") + '",'; 
  
  input += '"wave__vector__parameters__ty": "' + localStorage.getItem("panel__form__wave__vector__parameters__ty") + '",';
  input += '"wave__vector__parameters__by": "' + localStorage.getItem("panel__form__wave__vector__parameters__by") + '",'; 
  input += '"wave__vector__parameters__ry": "' + localStorage.getItem("panel__form__wave__vector__parameters__ry") + '",';  

  input += '"phi__0": "' + localStorage.getItem("panel__form__phi__0") + '",'; 
  input += '"phi__L": "' + localStorage.getItem("panel__form__phi__L") + '",'; 

  input += '"temperature": "' + localStorage.getItem("panel__form__temperature__input") + '",'; 
  input += '"ep__0": "' + localStorage.getItem("panel__form__ep__0") + '",'; 
  input += '"ep__L": "' + localStorage.getItem("panel__form__ep__L") + '",';
  input += '"ep__unit": "' + 'mV' + '",';


  if (panel__form__fds__fi__B.checked) {input += '"fi__method": "B",'}
  else {input += '"fi__method": "OWS",'};
  input += '"fi__res": "' + localStorage.getItem("panel__form__fds__fi__res") + '",'; 

  if (panel__form__dd__input.checked) {input += '"add__potential": "",'}

  if (panel__form__barriers__input.checked) {input += '"barriers": "",'}
  
  input += '"code": "' + panel__form__input.value.replaceAll('\r', '').replaceAll('\n', '\\n') + '",' 
  input += get__theme();

  console.log(input);
  input = '{' + input.slice(0, input.length - 1) + '}';
  data__exchange('run__dd', { 'input': input }, 'Current Density');
  // print__output('run__phi', input)
}









  
  
  
  