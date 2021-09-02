function set__panel__bar__type(event, type) {
    switch (type) {     
      case "profiles__energy": set__panel__bar__type__body(event, "Profile: ", type); break;
      case "distributions__energy__gap": set__panel__bar__type__body(event, "Distribution: ", type); break;
      case "distributions__lattice__constant": set__panel__bar__type__body(event, "Distribution: ", type); break;
    }
    // properties__list.style.width = properties__property.getBoundingClientRect().right - properties__property.getBoundingClientRect().left + "px";
    // localStorage.setItem('properties__list__width', properties__list.style.width);
  
    // localStorage.setItem('properties__list__height', properties__scope.getBoundingClientRect().bottom - properties__properties.getBoundingClientRect().bottom + "px");
    // properties__list.style.height = localStorage.getItem('properties__list__height');  
    panel__bar__type.parentElement.style.backgroundColor = css__vars.getPropertyValue('--theme1');
  }
  
function set__panel__bar__type__body(event, prefix, type) {
    panel__bar__type.innerHTML = prefix + event.target.textContent;
    panel__bar__type.dataset.type = type;
    localStorage.setItem('panel__bar__type__content', prefix + event.target.textContent);
    localStorage.setItem('panel__bar__type', type);
}
  
const butbut = document.getElementById('butbut');

panel__bar__run.onclick = function (event) {
    butbut.dispatchEvent(
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
    }));
}