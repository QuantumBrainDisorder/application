RDS.addEventListener("click", RDS__clicked);

function RDS__clicked(event) {
    localStorage.clear();
    location.reload();
}

ST.addEventListener("click", ST__clicked);
function ST__clicked(event) {
    switch (localStorage.getItem("footer__theme")) {
        case 'A': 
            // in theme__initiation.js
            set__theme("#242e31", "#4ad5ff", "#3fb6da", "#369cba", "#ffffff");
            localStorage.setItem("footer__theme", "B");
            ST.title = "Switch theme to the C"
            // location.reload();
            break;
        case 'B': 
            set__theme("#1d1b22", "#813dff", "#6e34da", "#5e2cba", "#ffffff");
            localStorage.setItem("footer__theme", "C");
            ST.title = "Switch theme to the A"
            // location.reload();
            break;
        case 'C': 
            set__theme("#ffffff", "#b40078", "#9a0066", "#840057", "#000000");
            localStorage.setItem("footer__theme", "A");
            ST.title = "Switch theme to the B"
            // location.reload();
            break;
    }
}


function get__local__storage__size() {
    var _lsTotal = 0, _xLen, _x; 
    for (_x in localStorage) { 
        _xLen = (((localStorage[_x].length || 0) + (_x.length || 0)) * 2);
        _lsTotal += _xLen;
    }
    return (_lsTotal / 1024).toFixed(2);
}

footer.addEventListener("mouseenter", footer__hover);

function footer__hover (event) {
    LS.innerHTML = 'LS: ' + String((100 * get__local__storage__size() / localStorage.getItem("local__storage__max__size")).toFixed(1)) + '%';
}







LC__input.addEventListener("input", LC__inputed);
function LC__inputed(event) {
    if (this.files[0].name != 'nt__cfg.json') {
        alert('the nt__cfg.json file required');
    }
    else {
        var fr=new FileReader();
        fr.onload=function(){
            const x = JSON.parse(fr.result, (key, value) => {
                if(key != 'property__bowings') {
                    localStorage.setItem(key, value)
                }
                else{
                    let content = JSON.parse(value.replaceAll('\'', '"'));
                    var content__syntaxed = JSON.stringify(content, null, 2);
                    localStorage.setItem(key, content__syntaxed);
                }
            });
            document.location.reload();
        }
        fr.readAsText(this.files[0]);
    }
}


SC.addEventListener("click", SC__clicked);
function SC__clicked(event) {

    var configuration = '{';
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        switch(key){
            case "structure": 
                configuration += '"' + key + '":' + '"' + localStorage.getItem(key).replaceAll('\r', '').replaceAll('\n', '\\n')  + '",';
                break;
            case "structure__unit": 
                configuration += '"' + key + '":' + '"' + localStorage.getItem(key).replaceAll('\r', '').replaceAll('\n', '\\n')  + '",';
                break;
            case "property__bowings": 
                configuration += '"' + key + '":' + '"' + localStorage.getItem(key).replaceAll('\r', '').replaceAll('\n', '').replaceAll(' ', '').replaceAll('"', '\'') + '"' + ',';
                break;
            default:
                if (key.startsWith('property__')) {
                    configuration += '"' + key + '":' + '"' + localStorage.getItem(key).replaceAll('\r', '').replaceAll('\n', '\\n') + '",';
                };
        };
    }
    configuration += '"local__storage__initialized":' + '"true"';
    configuration += '}';

    var nanotools__configuration = document.createElement('a');
    nanotools__configuration.href = 'data:attachment/json,' + encodeURIComponent(configuration);
    nanotools__configuration.download = 'nt__cfg.json';
    nanotools__configuration.click();
}