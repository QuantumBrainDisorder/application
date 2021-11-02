
document.body.ondragover = function(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  document.body.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
  });