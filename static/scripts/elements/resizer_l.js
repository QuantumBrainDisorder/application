resizer_l.addEventListener('mousedown', mousedown_l);

function mousedown_l(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    init_x = e.clientX;

    function mousemove(e) {
        // let new_x = init_x - e.clientX

        // var resizer_l__bounds = resizer_l.getBoundingClientRect();
        // var structure__scope__bounds = structure__scope.getBoundingClientRect();
        // var properties__scope__bounds = properties__scope.getBoundingClientRect();

        // resizer_l.style.left = resizer_l__bounds.left - new_x + "px";
        
        // structure__scope.style.width = structure__scope__bounds.width - new_x + "px";
        // properties__scope.style.left = properties__scope__bounds.left - new_x + "px";
        // properties__scope.style.width = properties__scope__bounds.width + new_x + "px";
        // init_x = e.clientX;

        if (resizer_l.style.left >= "0px") {
            let new_x = init_x - e.clientX;
    
            var resizer_l__bounds = resizer_l.getBoundingClientRect();
            var structure__scope__bounds = structure__scope.getBoundingClientRect();
            var properties__scope__bounds = properties__scope.getBoundingClientRect();
    
            resizer_l.style.left = resizer_l__bounds.left - new_x + "px";
            
            structure__scope.style.width = structure__scope__bounds.width - new_x + "px";
            properties__scope.style.left = properties__scope__bounds.left - new_x + "px";
            properties__scope.style.width = properties__scope__bounds.width + new_x + "px";
            init_x = e.clientX;
        }
    }

    function mouseup(e) {
        if (resizer_l.style.left < "0px") {
            var properties__scope__bounds = properties__scope.getBoundingClientRect();
            properties__scope.style.width = properties__scope__bounds.width + properties__scope__bounds.left + "px";
            properties__scope.style.left = "0px";
            structure__scope.style.width = properties__scope.style.left;
            resizer_l.style.left = "0px";
        }
        else if ( resizer_l.getBoundingClientRect().left > resizer_r.getBoundingClientRect().left ) {
            if (resizer_l.getBoundingClientRect().left > window.innerWidth - resizer_r.getBoundingClientRect().width) {
                var resizer_r__bounds = resizer_r.getBoundingClientRect();
                properties__scope.style.left = resizer_r__bounds.left - resizer_r__bounds.width + "px";
                properties__scope.style.width = properties__scope.getBoundingClientRect().width + resizer_r__bounds.width + "px";
                resizer_l.style.left = resizer_r__bounds.left - resizer_r__bounds.width + "px";
                structure__scope.style.width = resizer_r__bounds.left - resizer_r__bounds.width + "px";
            }
            else {
                var resizer_r__bounds = resizer_r.getBoundingClientRect();
                properties__scope.style.left = resizer_r__bounds.left + "px";
                resizer_l.style.left = resizer_r__bounds.left + "px";
                structure__scope.style.width = resizer_r__bounds.left + "px";
            }
        }
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        localStorage.setItem("resizer_l", resizer_l.style.left);
        localStorage.setItem("structure__width", structure__scope.style.width);
        localStorage.setItem("properties__width", properties__scope.style.width);
        
    }

}


resizer_l__button__on.addEventListener("click", button_l__on__click);
function button_l__on__click (event) {

    var panel__scope__bounds = panel__scope.getBoundingClientRect();
    var structure__scope__bounds = structure__scope.getBoundingClientRect();
    var properties__scope__bounds = properties__scope.getBoundingClientRect();

    structure__scope.style.display = "none";
    localStorage.setItem("resizer_l__clicked", properties__scope__bounds.left);
    resizer_l.style.left = 0;
    localStorage.setItem("resizer_l", resizer_l.style.left);
    resizer_l__button__on.style.display = "none";
    resizer_l.style.cursor = "default";
    resizer_l__button__off.parentElement.style.cursor = "default";
    resizer_l__button__off.style.display = "block";

    properties__scope.style.left = 0;
    properties__scope.style.width = properties__scope__bounds.width + structure__scope__bounds.right + "px";
    localStorage.setItem("properties__width", properties__scope.style.width);
    localStorage.setItem("structure__scope__display", "false");
    resizer_l.removeEventListener("mousedown", mousedown_l);
}

resizer_l__button__off.addEventListener("click", button_l__off__click);
function button_l__off__click (event) {
    var properties__scope__bounds = properties__scope.getBoundingClientRect();
 
    resizer_l.addEventListener("mousedown", mousedown_l);

    properties__scope.style.width = String(properties__scope__bounds.width - parseFloat(localStorage.getItem("resizer_l__clicked"))) + "px";
    resizer_l.style.left = localStorage.getItem("resizer_l__clicked") + "px";
    properties__scope.style.left = localStorage.getItem("resizer_l__clicked") + "px";
    localStorage.setItem("resizer_l", resizer_l.style.left);
    resizer_l__button__on.style.display = "block";
    resizer_l__button__off.style.display = "none";
    resizer_l.style.cursor = "col-resize";
    resizer_l__button__on.parentElement.style.cursor = "col-resize";
    localStorage.setItem("structure__scope__display", "true");
    localStorage.setItem("properties__width", properties__scope.style.width);
    localStorage.removeItem("resizer_l__clicked");
    structure__scope.style.display = "flex";
}