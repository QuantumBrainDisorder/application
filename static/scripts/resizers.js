resizer_l.addEventListener('mousedown', mousedown_l);
resizer_r.addEventListener('mousedown', mousedown_r);

function mousedown_l(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    init_x = e.clientX;

    function mousemove(e) {
        let new_x = init_x - e.clientX

        const resizer_l__bounds = resizer_l.getBoundingClientRect();
        const structure__scope__bounds = structure__scope.getBoundingClientRect();
        const properties__scope__bounds = properties__scope.getBoundingClientRect();

        resizer_l.style.left = resizer_l__bounds.left - new_x + "px";
        
        structure__scope.style.width = structure__scope__bounds.width - new_x + "px";
        properties__scope.style.left = properties__scope__bounds.left - new_x + "px";
        properties__scope.style.width = properties__scope__bounds.width + new_x + "px";
        init_x = e.clientX;


    }

    function mouseup(e) {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        localStorage.setItem("resizer_l", resizer_l.style.left);
        localStorage.setItem("structure__width", structure__scope.style.width);
        localStorage.setItem("properties__width", properties__scope.style.width);
    }

}


function mousedown_r(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    init_x = e.clientX;

    function mousemove(e) {
        let new_x = init_x - e.clientX

        const resizer_r__bounds = resizer_r.getBoundingClientRect();
        const properties__scope__bounds = properties__scope.getBoundingClientRect();
        const panel__scope__bounds = panel__scope.getBoundingClientRect();

        resizer_r.style.left = resizer_r__bounds.left - new_x + "px";
        properties__scope.style.width = properties__scope__bounds.width - new_x + "px";
        panel__scope.style.left = panel__scope__bounds.left - new_x + "px";
        init_x = e.clientX;


    }

    function mouseup(e) {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        localStorage.setItem("resizer_r", resizer_r.style.left);
        localStorage.setItem("properties__width", properties__scope.style.width);
    }

}

resizer_l__button__on.addEventListener("click", button__on__click);
function button__on__click (event) {
    structure__scope.style.display = "none";
    localStorage.setItem("resizer_l__clicked", resizer_l.style.left);
    resizer_l.style.left = 0;
    localStorage.setItem("resizer_l", resizer_l.style.left);
    resizer_l__button__on.style.display = "none";
    resizer_l.style.cursor = "default";
    resizer_l__button__off.parentElement.style.cursor = "default";
    resizer_l__button__off.style.display = "block";
    resizer_l.removeEventListener("mousedown", mousedown_l);
}

resizer_l__button__off.addEventListener("click", button__off__click);
function button__off__click (event) {
    resizer_l.addEventListener("mousedown", mousedown_l);
    structure__scope.style.display = "flex";
    resizer_l.style.left = localStorage.getItem("resizer_l__clicked");
    localStorage.setItem("resizer_l", resizer_l.style.left);
    resizer_l__button__on.style.display = "block";
    resizer_l__button__off.style.display = "none";
    resizer_l.style.cursor = "col-resize";
    resizer_l__button__on.parentElement.style.cursor = "col-resize";
}