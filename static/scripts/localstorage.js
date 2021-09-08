if (localStorage.getItem("local__storage__initialized") == null) {
                
        // const default__property__alpha__varshni = "GaAs 541\nGaSb 417\nInSb 320\nAlAs 885\nAlSb 420";
        // const default__property__beta__varshni = "GaAs 204\nGaSb 140\nInSb 170\nAlAs 530\nAlSb 140";
        // const default__property__biaxial__deformation__potential = "GaAs -2.00\nGaSb -2.00\nInSb -2.00\nAlAs -2.30\nAlSb -1.35";
        // const default__property__elastic__constant__11 = "GaAs 1.22\nGaSb 0.88\nInSb 0.68\nAlAs 1.25\nAlSb 0.87";
        // const default__property__elastic__constant__12 = "GaAs 566\nGaSb 402\nInSb 373\nAlAs 534\nAlSb 434";
        // const default__property__energy__gap = "GaAs 1.51\nGaSb 0.81\nInSb 0.23\nAlAs 3.10\nAlSb 2.39";
        // const default__property__hydrostatic__deformation__potential__of__conduction__band = "GaAs -7.17\nGaSb -7.50\nInSb -6.94\nAlAs -5.64\nAlSb -4.50";
        // const default__property__hydrostatic__deformation__potential__of__valence__band = "GaAs -1.16\nGaSb -0.80\nInSb -0.36\nAlAs -2.47\nAlSb -1.40";
        // const default__property__kane__parameter = "GaAs -1.94\nGaSb -1.64\nInSb -0.23\nAlAs -0.48\nAlSb -0.56";
        // const default__property__lattice__constant = "GaAs 5.64\nGaSb 6.08\nInSb 6.47\nAlAs 5.65\nAlSb 6.13";
        // const default__property__luttinger__parameter__1 = "GaAs 6.98\nGaSb 13.4\nInSb 34.8\nAlAs 3.76\nAlSb 5.18";
        // const default__property__luttinger__parameter__2 = "GaAs 2.06\nGaSb 4.70\nInSb 15.5\nAlAs 0.82\nAlSb 1.19";
        // const default__property__luttinger__parameter__3 = "GaAs 2.93\nGaSb 6.00\nInSb 16.5\nAlAs 1.42\nAlSb 1.97";
        // const default__property__matrix__element__of__kane__operator = "GaAs 28.8\nGaSb 27.0\nInSb 23.3\nAlAs 21.1\nAlSb 18.7";
        // const default__property__spin__orbit__split = "GaAs 341\nGaSb 760\nInSb 810\nAlAs 280\nAlSb 676";
        // const default__property__valence__band__offset = "GaAs -0.80\nGaSb -0.03\nInSb 0.00\nAlAs -1.33\nAlSb -0.41";

        const default__property__unit__alpha__varshni = "ueV/K";
        const default__property__unit__beta__varshni = "K";
        const default__property__unit__bowings = "(*)";
        const default__property__unit__biaxial__deformation__potential = "eV";
        const default__property__unit__elastic__constant__11 = "TPa";
        const default__property__unit__elastic__constant__12 = "GPa";
        const default__property__unit__energy__gap = "eV";
        const default__property__unit__hydrostatic__deformation__potential__of__conduction__band = "eV";
        const default__property__unit__hydrostatic__deformation__potential__of__valence__band = "eV";
        const default__property__unit__kane__parameter = "";
        const default__property__unit__lattice__constant = "Angs.";
        const default__property__unit__luttinger__parameter__1 = "";
        const default__property__unit__luttinger__parameter__2 = "";
        const default__property__unit__luttinger__parameter__3 = "";
        const default__property__unit__matrix__element__of__kane__operator = "eV";
        const default__property__unit__spin__orbit__split = "meV";
        const default__property__unit__valence__band__offset = "eV";

        const default__properties__property__property = 'energy__gap';
        const default__properties__property__char = "<i>E<sub>g</sub></i>";
        const default__properties__property__name = 'energy__gap';
        const default__properties__property__unit = "eV";
        const default__properties__property__content = "Energy Gap";

        const default__panel__bar__type = "distributions__energy__gap";
        const default__panel__bar__type__content = "Distribution: Energy Gap";
        const default__panel__bar__type__form = 'distribution';

        const default__resizer_l = "30vw";
        const default__resizer_r = "60vw";

        const default__structure = "GaAs 400\nGa0.80In0.20As 200A\nAl0.70Ga0.30As 10\nGa0.20In0.80As0.40Sb0.60 0.01um";
        const default__structure__unit = "nm";
        
        // localStorage.setItem("property__alpha__varshni", default__property__alpha__varshni);
        // localStorage.setItem("property__beta__varshni", default__property__beta__varshni);
        // localStorage.setItem("property__biaxial__deformation__potential", default__property__biaxial__deformation__potential);
        // localStorage.setItem("property__elastic__constant__11", default__property__elastic__constant__11);
        // localStorage.setItem("property__elastic__constant__12", default__property__elastic__constant__12);
        // localStorage.setItem("property__energy__gap", default__property__energy__gap);
        // localStorage.setItem("property__hydrostatic__deformation__potential__of__conduction__band", default__property__hydrostatic__deformation__potential__of__conduction__band);
        // localStorage.setItem("property__hydrostatic__deformation__potential__of__valence__band", default__property__hydrostatic__deformation__potential__of__valence__band);
        // localStorage.setItem("property__kane__parameter", default__property__kane__parameter);
        // localStorage.setItem("property__lattice__constant", default__property__lattice__constant);
        // localStorage.setItem("property__luttinger__parameter__1", default__property__luttinger__parameter__1);
        // localStorage.setItem("property__luttinger__parameter__2", default__property__luttinger__parameter__2);
        // localStorage.setItem("property__luttinger__parameter__3", default__property__luttinger__parameter__3);
        // localStorage.setItem("property__matrix__element__of__kane__operator", default__property__matrix__element__of__kane__operator);
        // localStorage.setItem("property__spin__orbit__split", default__property__spin__orbit__split);
        // localStorage.setItem("property__valence__band__offset", default__property__valence__band__offset);


        localStorage.setItem("property__alpha__varshni", set__default__property('alpha__varshni'));
        localStorage.setItem("property__bowings", set__default__property('bowings'));
        localStorage.setItem("property__beta__varshni", set__default__property('beta__varshni'));
        localStorage.setItem("property__biaxial__deformation__potential", set__default__property('biaxial__deformation__potential'));
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
        localStorage.setItem("property__spin__orbit__split", set__default__property('spin__orbit__split'));
        localStorage.setItem("property__valence__band__offset", set__default__property('valence__band__offset'));

        localStorage.setItem("property__unit__alpha__varshni", default__property__unit__alpha__varshni);
        localStorage.setItem("property__unit__beta__varshni", default__property__unit__beta__varshni);
        localStorage.setItem("property__unit__bowings", default__property__unit__bowings);
        localStorage.setItem("property__unit__biaxial__deformation__potential", default__property__unit__biaxial__deformation__potential);
        localStorage.setItem("property__unit__elastic__constant__11", default__property__unit__elastic__constant__11);
        localStorage.setItem("property__unit__elastic__constant__12", default__property__unit__elastic__constant__12);
        localStorage.setItem("property__unit__energy__gap", default__property__unit__energy__gap);
        localStorage.setItem("property__unit__hydrostatic__deformation__potential__of__conduction__band", default__property__unit__hydrostatic__deformation__potential__of__conduction__band);
        localStorage.setItem("property__unit__hydrostatic__deformation__potential__of__valence__band", default__property__unit__hydrostatic__deformation__potential__of__valence__band);
        localStorage.setItem("property__unit__kane__parameter", default__property__unit__kane__parameter);
        localStorage.setItem("property__unit__lattice__constant", default__property__unit__lattice__constant);
        localStorage.setItem("property__unit__luttinger__parameter__1", default__property__unit__luttinger__parameter__1);
        localStorage.setItem("property__unit__luttinger__parameter__2", default__property__unit__luttinger__parameter__2);
        localStorage.setItem("property__unit__luttinger__parameter__3", default__property__unit__luttinger__parameter__3);
        localStorage.setItem("property__unit__matrix__element__of__kane__operator", default__property__unit__matrix__element__of__kane__operator);
        localStorage.setItem("property__unit__spin__orbit__split", default__property__unit__spin__orbit__split);
        localStorage.setItem("property__unit__valence__band__offset", default__property__unit__valence__band__offset);

        localStorage.setItem('properties__property__property', default__properties__property__property);
        localStorage.setItem('properties__property__char', default__properties__property__char);
        localStorage.setItem('properties__property__name', default__properties__property__name);
        localStorage.setItem('properties__property__unit', default__properties__property__unit);
        localStorage.setItem('properties__property__content', default__properties__property__content);

        localStorage.setItem("resizer_l", default__resizer_l);
        localStorage.setItem("resizer_r", default__resizer_r);

        // localStorage.setItem("structure", default__structure);
        set__default__structure();

        localStorage.setItem("structure__unit", default__structure__unit);

        localStorage.setItem('panel__bar__type', default__panel__bar__type);
        localStorage.setItem("panel__bar__type__content", default__panel__bar__type__content);
        localStorage.setItem("panel__bar__type__form", default__panel__bar__type__form);




        localStorage.setItem("local__storage__initialized", "true");
}

function set__default__property(property) {
        var path = scripts__names.dataset.default__sheets__path + 'properties/' + property + '.dat';
        fetch(path).then(step__one).then(step__two);
        function step__one(response) {  return response.text()}
        function step__two(data){       localStorage.setItem('property__' + property, data)}
};

function set__default__structure() {
        var path = scripts__names.dataset.default__sheets__path + 'structure.dat';
        fetch(path).then(step__one).then(step__two);
        function step__one(response) {  return response.text()}
        function step__two(data){       
                localStorage.setItem('structure', data);
                document.location.reload();
        }  
};