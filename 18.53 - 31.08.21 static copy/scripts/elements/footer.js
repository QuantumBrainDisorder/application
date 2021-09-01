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
            ST.title = "Switch to theme C"
            // location.reload();
            break;
        case 'B': 
            set__theme("#1d1b22", "#813dff", "#6e34da", "#5e2cba", "#ffffff");
            localStorage.setItem("footer__theme", "C");
            ST.title = "Switch to theme A"
            // location.reload();
            break;
        case 'C': 
            set__theme("#ffffff", "#b40078", "#9a0066", "#840057", "#000000");
            localStorage.setItem("footer__theme", "A");
            ST.title = "Switch to theme B"
            // location.reload();
            break;
    }
}
