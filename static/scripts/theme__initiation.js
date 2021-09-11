switch(localStorage.getItem("footer__theme")) {
    case null:  localStorage.setItem("footer__theme", "A"); break;
    case "A":   set__theme("#ffffff", "#b40078", "#9a0066", "#840057", "#000000"); break;
    case "B":   set__theme("#242e31", "#4ad5ff", "#3fb6da", "#369cba", "#ffffff"); break;
    case "C":   set__theme("#1d1b22", "#813dff", "#6e34da", "#5e2cba", "#ffffff"); break;
}

function set__theme(theme0, theme1, theme2, theme3, theme4) {
    var root = document.querySelector(':root');
    root.style.setProperty('--theme0', theme0);
    root.style.setProperty('--theme1', theme1);
    root.style.setProperty('--theme2', theme2);
    root.style.setProperty('--theme3', theme3);
    root.style.setProperty('--theme4', theme4);
}