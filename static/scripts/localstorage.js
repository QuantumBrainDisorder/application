if (localStorage.getItem("local__storage__initialized") == null) {
        // const default__property__unit__alpha__varshni = "ueV/K";
        // const default__property__unit__beta__varshni = "K";
        // const default__property__unit__bowings = "(*)";
        // const default__property__unit__biaxial__deformation__potential = "eV";
        // const default__property__unit__effective__mass = "m_e";
        // const default__property__unit__elastic__constant__11 = "TPa";
        // const default__property__unit__elastic__constant__12 = "GPa";
        // const default__property__unit__energy__gap = "eV";
        // const default__property__unit__hydrostatic__deformation__potential__of__conduction__band = "eV";
        // const default__property__unit__hydrostatic__deformation__potential__of__valence__band = "eV";
        // const default__property__unit__kane__parameter = "";
        // const default__property__unit__lattice__constant = "Angs.";
        // const default__property__unit__luttinger__parameter__1 = "";
        // const default__property__unit__luttinger__parameter__2 = "";
        // const default__property__unit__luttinger__parameter__3 = "";
        // const default__property__unit__matrix__element__of__kane__operator = "eV";
        // const default__property__unit__relative__permittivity = "";
        // const default__property__unit__spin__orbit__split = "meV";
        // const default__property__unit__valence__band__offset = "eV";

        // const default__properties__property__property = 'energy__gap';
        // const default__properties__property__char = "<i>E<sub>g</sub></i>";
        // const default__properties__property__name = 'energy__gap';
        // const default__properties__property__unit = "eV";
        // const default__properties__property__content = "Energy Gap";

        // const default__resizer_l = "30vw";
        // const default__resizer_r = "60vw";

        // const default__structure = "GaAs 400\nGa0.80In0.20As 200A\nAl0.70Ga0.30As 10\nGa0.20In0.80As0.40Sb0.60 0.01um";
        // const default__structure__unit = "nm";
        
        localStorage.setItem("property__unit__alpha__varshni", "ueV/K");// default__property__unit__alpha__varshni);
        localStorage.setItem("property__unit__beta__varshni", "K");// default__property__unit__beta__varshni);
        localStorage.setItem("property__unit__bowings", "(*)");//default__property__unit__bowings);
        localStorage.setItem("property__unit__carriers__mobility", "m^2/(V*s)");// default__property__unit__carriers__mobility);
        localStorage.setItem("property__unit__biaxial__deformation__potential", "eV");// default__property__unit__biaxial__deformation__potential);
        localStorage.setItem("property__unit__effective__mass", "m_e");// default__property__unit__effective__mass);
        localStorage.setItem("property__unit__elastic__constant__11", "TPa");//default__property__unit__elastic__constant__11);
        localStorage.setItem("property__unit__elastic__constant__12", "GPa");//default__property__unit__elastic__constant__12);
        localStorage.setItem("property__unit__energy__gap", "eV");//default__property__unit__energy__gap);
        localStorage.setItem("property__unit__hydrostatic__deformation__potential__of__conduction__band", "eV");// default__property__unit__hydrostatic__deformation__potential__of__conduction__band);
        localStorage.setItem("property__unit__hydrostatic__deformation__potential__of__valence__band", "eV");// default__property__unit__hydrostatic__deformation__potential__of__valence__band);
        localStorage.setItem("property__unit__kane__parameter", "");// default__property__unit__kane__parameter);
        localStorage.setItem("property__unit__lattice__constant", "Angs");// default__property__unit__lattice__constant);
        localStorage.setItem("property__unit__luttinger__parameter__1", "");//default__property__unit__luttinger__parameter__1);
        localStorage.setItem("property__unit__luttinger__parameter__2", "");//default__property__unit__luttinger__parameter__2);
        localStorage.setItem("property__unit__luttinger__parameter__3", "");//default__property__unit__luttinger__parameter__3);
        localStorage.setItem("property__unit__matrix__element__of__kane__operator", "eV");// default__property__unit__matrix__element__of__kane__operator);
        localStorage.setItem("property__unit__relative__permittivity", "");//default__property__unit__relative__permittivity);
        localStorage.setItem("property__unit__spin__orbit__split", "meV");//default__property__unit__spin__orbit__split);
        localStorage.setItem("property__unit__valence__band__offset", "eV");//default__property__unit__valence__band__offset);

        localStorage.setItem('properties__property__property', 'energy__gap');//default__properties__property__property);
        localStorage.setItem('properties__property__char', "<i>E<sub>g</sub></i>");//default__properties__property__char);
        localStorage.setItem('properties__property__name', 'energy__gap');// default__properties__property__name);
        localStorage.setItem('properties__property__unit', "eV");//default__properties__property__unit);
        localStorage.setItem('properties__property__content', "Energy Gap");//default__properties__property__content);

        localStorage.setItem("resizer_l", "25vw");//default__resizer_l);
        localStorage.setItem("resizer_r", "57vw");//default__resizer_r);

        localStorage.setItem("structure__unit", "nm");//default__structure__unit);

        localStorage.setItem('panel__bar__type',"energies");
        localStorage.setItem("panel__bar__type__content", 'Energies');

        localStorage.setItem('panel__form__profile__property__content', 'Lattice Constant');
        localStorage.setItem('panel__form__profile__property', 'lattice__constant');
        
        localStorage.setItem('panel__form__band__electrons__input', 'true');

        localStorage.setItem('panel__form__space__resolution__input', '1e-11');

        localStorage.setItem('panel__form__wave__vector__input', '0e+9');
        
        localStorage.setItem('panel__form__band__parameters__tle', '3');
        localStorage.setItem('panel__form__band__parameters__ble', '-1.2');
        localStorage.setItem('panel__form__band__parameters__elr', '0.0001');

        localStorage.setItem('panel__form__wave__vector__parameters__tx', '2e+9');
        localStorage.setItem('panel__form__wave__vector__parameters__bx', '-2e+9');
        localStorage.setItem('panel__form__wave__vector__parameters__rx', '0.05e+9');
        localStorage.setItem('panel__form__wave__vector__parameters__ty', '2e+9');
        localStorage.setItem('panel__form__wave__vector__parameters__by', '-2e+9');
        localStorage.setItem('panel__form__wave__vector__parameters__ry', '0.05e+9');

        localStorage.setItem('panel__form__distribution__w__axis__property__content', 'Energy Gap');
        localStorage.setItem('panel__form__distribution__w__axis__property', 'energy__gap');
        localStorage.setItem('panel__form__distribution__x__axis__property__content', 'Lattice Constant');
        localStorage.setItem('panel__form__distribution__x__axis__property', 'lattice__constant');
        localStorage.setItem('panel__form__distribution__y__axis__property__content', 'Valence Band Offset');
        localStorage.setItem('panel__form__distribution__y__axis__property', 'valence__band__offset');
        localStorage.setItem('panel__form__distribution__z__axis__property__content', 'Spin-Orbit Split');
        localStorage.setItem('panel__form__distribution__z__axis__property', 'spin__orbit__split');
        localStorage.setItem("panel__form__distribution__w__axis", 'true');
        localStorage.setItem("panel__form__distribution__x__axis", 'true');

        localStorage.setItem("panel__form__dos__2d", 'true');
        localStorage.setItem("panel__form__for__el", 'true');

        localStorage.setItem('panel__form__dos__parameters__et', '3');
        localStorage.setItem('panel__form__dos__parameters__eb', '-1.2');
        localStorage.setItem('panel__form__dos__parameters__er', '0.06');

        
        localStorage.setItem("panel__form__cos__2d", 'true');

        localStorage.setItem("panel__form__ldos__2d", 'true');
        localStorage.setItem("panel__form__for___el", 'true');

        localStorage.setItem('panel__form__ldos__parameters__et', '3');
        localStorage.setItem('panel__form__ldos__parameters__eb', '-1.2');
        localStorage.setItem('panel__form__ldos__parameters__er', '0.06');

        localStorage.setItem("panel__form__temperature__input", '300');
        
        localStorage.setItem("panel__form__fds__ho", 'true');
        localStorage.setItem("panel__form__fds__el", 'true');
        localStorage.setItem("panel__form__fds__et", '3');
        localStorage.setItem("panel__form__fds__eb", '-1.2');
        localStorage.setItem("panel__form__fds__er", '0.06');


        localStorage.setItem("panel__form__cc__el", 'true');

        localStorage.setItem("panel__form__qfl__ho", '-1.1');
        localStorage.setItem("panel__form__qfl__el", '2.4');

        localStorage.setItem("panel__form__phi__0", '0');
        localStorage.setItem("panel__form__phi__L", '0');
        
        localStorage.setItem("property__alpha__varshni", set__default__property('alpha__varshni'));
        localStorage.setItem("property__bowings", set__default__property('bowings'));
        localStorage.setItem("property__beta__varshni", set__default__property('beta__varshni'));
        localStorage.setItem("property__carriers__mobility", set__default__property('carriers__mobility'));
        localStorage.setItem("property__biaxial__deformation__potential", set__default__property('biaxial__deformation__potential'));
        localStorage.setItem("property__effective__mass", set__default__property('effective__mass'));
        localStorage.setItem("property__elastic__constant__11", set__default__property('elastic__constant__11'));
        localStorage.setItem("property__elastic__constant__12", set__default__property('elastic__constant__12'));
        localStorage.setItem("property__energy__gap", set__default__property('energy__gap'));
        localStorage.setItem("property__hydrostatic__deformation__potential__of__conduction__band", set__default__property('hydrostatic__deformation__potential__of__conduction__band'));
        localStorage.setItem("property__hydrostatic__deformation__potential__of__valence__band", set__default__property('hydrostatic__deformation__potential__of__valence__band'));
        localStorage.setItem("property__kane__parameter", set__default__property('kane__parameter'));
        localStorage.setItem("property__lattice__constant", set__default__property('lattice__constant'));
        localStorage.setItem("property__luttinger__parameter__1", set__default__property('luttinger__parameter__1'));
        localStorage.setItem("property__luttinger__parameter__2", set__default__property('luttinger__parameter__2'));
        localStorage.setItem("property__luttinger__parameter__3", set__default__property('luttinger__parameter__3'));
        localStorage.setItem("property__matrix__element__of__kane__operator", set__default__property('matrix__element__of__kane__operator'));
        localStorage.setItem("property__relative__permittivity", set__default__property('relative__permittivity'));
        localStorage.setItem("property__spin__orbit__split", set__default__property('spin__orbit__split'));
        localStorage.setItem("property__valence__band__offset", set__default__property('valence__band__offset'));
        
        set__default__structure();  

        localStorage.setItem("local__storage__initialized", "true");  

        var i = 0;
        try {
                for (i = 0; i <= 10000; i += 250) {
                localStorage.setItem('test', new Array((i * 1024) + 250).join('a'));
                }
        } 
        catch (e) {
                localStorage.removeItem('test');
                localStorage.setItem('local__storage__max__size', i - 250);            
        }    
}


async function set__default__property(property) {
        $.ajax({
                cache: false,
                type: "POST",
                contentType: "text",
                url: scripts__names.dataset.default__sheets__path + 'properties/' + property + '.dat',
                dataType: 'text',
                success: function(data){ localStorage.setItem('property__' + property, data) }
        })
}
async function set__default__structure() {
        $.ajax({
                cache: false,
                type: "POST",
                contentType: "text",
                url: scripts__names.dataset.default__sheets__path + 'structure.dat',
                dataType: 'text',
                success: function(data){ localStorage.setItem('structure', data) }
        })
}

// function set__default__property(property) {
//         var path = scripts__names.dataset.default__sheets__path + 'properties/' + property + '.dat';
//         fetch(path).then(step__one).then(step__two);
//         function step__one(response) {  return response.text()}
//         function step__two(data){       localStorage.setItem('property__' + property, data)}
// };





// function set__default__structure() {
//         var path = scripts__names.dataset.default__sheets__path + 'structure.dat';
//         fetch(path).then(step__one).then(step__two);
//         function step__one(response) {  return response.text()}
//         function step__two(data){       
//                 localStorage.setItem('structure', data);
//                 document.location.reload();
//         }  
// };