panel__form__orint__orint.onclick = function(event) {
    console.log('aaaa');
    if (localStorage.getItem('panel__form__orint__orint') == null) {
        localStorage.setItem('panel__form__orint__orint', 'true');
    }
    else {
        localStorage.removeItem("panel__form__orint__orint");
    }
}
