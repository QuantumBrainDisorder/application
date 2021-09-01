
resizer_r.addEventListener('mousedown', mousedown_r);

function mousedown_r(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    init_x = e.clientX;

    function mousemove(e) {
        let new_x = init_x - e.clientX;

        var resizer_r__bounds = resizer_r.getBoundingClientRect();
        var properties__scope__bounds = properties__scope.getBoundingClientRect();
        var panel__scope__bounds = panel__scope.getBoundingClientRect();

        resizer_r.style.left = resizer_r__bounds.left - new_x + "px";
        if (panel__scope__bounds.left > properties__scope__bounds.left){
            properties__scope.style.width = panel__scope__bounds.left - properties__scope__bounds.left + "px";
        }

        // properties__scope.style.width = properties__scope__bounds.width - new_x + "px";
        panel__scope.style.left = panel__scope__bounds.left - new_x + "px";
        init_x = e.clientX;
    }

    function mouseup(e) {
        if (resizer_r.style.left < "0px") {
            var panel__scope__bounds = panel__scope.getBoundingClientRect();
            panel__scope.style.width = panel__scope__bounds.width + panel__scope__bounds.left + "px";
            panel__scope.style.left = "0px";
            properties__scope.style.width = panel__scope.style.left;
            resizer_r.style.left = "0px";
        }
        else if (resizer_r.getBoundingClientRect().left > window.innerWidth - resizer_r.getBoundingClientRect().width){
            resizer_r.style.left = window.innerWidth - resizer_r.getBoundingClientRect().width + "px";
            panel__scope.style.left = window.innerWidth - resizer_r.getBoundingClientRect().width + "px";
            properties__scope.style.width = resizer_r.getBoundingClientRect().left - structure__scope.getBoundingClientRect().width + "px";
        }
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        localStorage.setItem("resizer_r", resizer_r.style.left);
        localStorage.setItem("properties__width", properties__scope.style.width);
        properties__list.style.width = properties__property.getBoundingClientRect().right - properties__property.getBoundingClientRect().left + "px";
        localStorage.setItem('properties__list__width', properties__list.style.width);
    }

}


resizer_r__button__on.addEventListener("click", button_r__on__click);

function button_r__on__click (event) {

    var panel__scope__bounds = panel__scope.getBoundingClientRect();
    var structure__scope__bounds = structure__scope.getBoundingClientRect();
    var properties__scope__bounds = properties__scope.getBoundingClientRect();
    var resizer_l__bounds = resizer_l.getBoundingClientRect();

    properties__scope.style.display = "none";
    resizer_l.style.display = "none";
    localStorage.setItem("resizer_r__clicked", panel__scope__bounds.left);
    resizer_r.style.left = resizer_l__bounds.width + structure__scope__bounds.width + "px";
    localStorage.setItem("resizer_r", resizer_r.style.left);
    resizer_r__button__on.style.display = "none";
    resizer_r.style.cursor = "default";
    resizer_r__button__off.parentElement.style.cursor = "default";
    resizer_r__button__off.style.display = "block";

    // resizer_l.style.cursor = "default";
    // resizer_l__button__on.parentElement.style.cursor = "default";
    // resizer_l__button__on.style.cursor = "default";
    // resizer_l.removeEventListener("mousedown", mousedown_l);
    // resizer_l__button__on.removeEventListener("click", button_l__on__click);

    panel__scope.style.left = resizer_l__bounds.width + structure__scope__bounds.width + "px";
    panel__scope.style.width = properties__scope__bounds.width + panel__scope__bounds.width + "px";
    localStorage.setItem("panel__width", panel__scope.style.width);
    localStorage.setItem("panel__scope__display", "false");
    resizer_r.removeEventListener("mousedown", mousedown_r);
}

resizer_r__button__off.addEventListener("click", button_r__off__click);
function button_r__off__click (event) {
    var panel__scope__bounds = panel__scope.getBoundingClientRect();
    resizer_r.addEventListener("mousedown", mousedown_r);
    panel__scope.style.right = 0;
    resizer_r.style.left = localStorage.getItem("resizer_r__clicked") + "px";
    panel__scope.style.left = localStorage.getItem("resizer_r__clicked") + "px";
    localStorage.setItem("resizer_r", resizer_r.style.left);
    resizer_r__button__on.style.display = "block";
    resizer_r__button__off.style.display = "none";
    resizer_r.style.cursor = "col-resize";
    resizer_r__button__on.parentElement.style.cursor = "col-resize";
    localStorage.setItem("panel__scope__display", "true");
    localStorage.setItem("panel__width", panel__scope.style.width);
    localStorage.removeItem("resizer_r__clicked");
    properties__scope.style.display = "flex";
    resizer_l.style.display = "flex";
}