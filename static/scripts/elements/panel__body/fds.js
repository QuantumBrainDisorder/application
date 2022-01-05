

panel__form__fds__epr.onclick = function(event) {
    if (localStorage.getItem('panel__form__fds__epr') == null) {
        localStorage.setItem('panel__form__fds__epr', 'true');
    }
    else {
        localStorage.removeItem("panel__form__fds__epr");
    }
}


panel__form__fds__dos.onclick = function(event) {
  if (localStorage.getItem('panel__form__fds__dos') == null) {
      localStorage.setItem('panel__form__fds__dos', 'true');
  }
  else {
      localStorage.removeItem("panel__form__fds__dos");
  }
}





// panel__form__fds__for__el.onclick = function(event) {
//   if (localStorage.getItem('panel__form__fds__for__el') == null) {
//       localStorage.setItem('panel__form__fds__for__el', 'true');
//   }
//   else {
//       localStorage.removeItem("panel__form__fds__for__el");
//   }
// }




// panel__form__fds__for__ho.onclick = function(event) {
//   if (localStorage.getItem('panel__form__fds__for__ho') == null) {
//       localStorage.setItem('panel__form__fds__for__ho', 'true');
//   }
//   else {
//       localStorage.removeItem("panel__form__fds__for__ho");
//   }
// }




panel__form__fds__fi__B.onclick = function(event) {
  if (localStorage.getItem('panel__form__fds__fi__B') == null) {
      localStorage.setItem('panel__form__fds__fi__B', 'true');
      localStorage.removeItem("panel__form__fds__fi__OWS");
      panel__form__fds__fi__OWS.checked = false;
  }
  else {
      localStorage.removeItem("panel__form__fds__fi__B");
      localStorage.setItem('panel__form__fds__fi__OWS', 'true');
      panel__form__fds__fi__OWS.checked = true;
  }
}


panel__form__fds__fi__OWS.onclick = function(event) {
    if (localStorage.getItem('panel__form__fds__fi__OWS') == null) {
        localStorage.setItem('panel__form__fds__fi__OWS', 'true');
        localStorage.removeItem("panel__form__fds__fi__B");
        panel__form__fds__fi__B.checked = false;
    }
    else {
        localStorage.removeItem("panel__form__fds__fi__OWS");
        localStorage.setItem('panel__form__fds__fi__B', 'true');
        panel__form__fds__fi__B.checked = true;
    }
  }
  
  
  panel__form__fds__fi__res.onkeydown = function (event) {
    if (event.keyCode === 13) {
      if (panel__form__fds__fi__res.textContent == "") {
        panel__form__fds__fi__res.textContent = "0.0001";
      };
      panel__form__fds__fi__res.blur();

      if(isNaN(panel__form__fds__fi__res.textContent)){
        panel__form__fds__fi__res.textContent = '0.0001';
        localStorage.setItem("panel__form__fds__fi__res", panel__form__fds__fi__res.textContent);
      }
    }
}

panel__form__fds__fi__res.addEventListener('focusout', function (e) {
      if (panel__form__fds__fi__res.textContent == "") {
        panel__form__fds__fi__res.textContent = "0.0001";
      };
      
      if(isNaN(panel__form__fds__fi__res.textContent)){
        panel__form__fds__fi__res.textContent = '0.0001';
        localStorage.setItem("panel__form__fds__fi__res", panel__form__fds__fi__res.textContent);
      }
})

panel__form__fds__fi__res.oninput = function (event) {
  localStorage.setItem("panel__form__fds__fi__res", panel__form__fds__fi__res.textContent);
};








// panel__form__fds__et.onkeydown = function (event) {
//     if (event.keyCode === 13) {
//       if (panel__form__fds__et.textContent == "") {
//         panel__form__fds__et.textContent = "3";
//       };
//       panel__form__fds__et.blur();

//       if(isNaN(panel__form__fds__et.textContent)){
//         panel__form__fds__et.textContent = '3';
//         localStorage.setItem("panel__form__fds__et", panel__form__fds__et.textContent);
//       }
//     }
// }

// panel__form__fds__et.addEventListener('focusout', function (e) {
//       if (panel__form__fds__et.textContent == "") {
//         panel__form__fds__et.textContent = "3";
//       };
      
//       if(isNaN(panel__form__fds__et.textContent)){
//         panel__form__fds__et.textContent = '3';
//         localStorage.setItem("panel__form__fds__et", panel__form__fds__et.textContent);
//       }
// })

// panel__form__fds__et.oninput = function (event) {
//   localStorage.setItem("panel__form__fds__et", panel__form__fds__et.textContent);
// };







// panel__form__fds__eb.onkeydown = function (event) {
//     if (event.keyCode === 13) {
//       if (panel__form__fds__eb.textContent == "") {
//         panel__form__fds__eb.textContent = "-1.2";
//       };
//       panel__form__fds__eb.blur();

//       if(isNaN(panel__form__fds__eb.textContent)){
//         panel__form__fds__eb.textContent = '-1.2';
//         localStorage.setItem("panel__form__fds__eb", panel__form__fds__eb.textContent);
//       }
//     }
// }

// panel__form__fds__eb.addEventListener('focusout', function (e) {
//       if (panel__form__fds__eb.textContent == "") {
//         panel__form__fds__eb.textContent = "-1.2";
//       };
      
//       if(isNaN(panel__form__fds__eb.textContent)){
//         panel__form__fds__eb.textContent = '-1.2';
//         localStorage.setItem("panel__form__fds__eb", panel__form__fds__eb.textContent);
//       }
// })

// panel__form__fds__eb.oninput = function (event) {
//   localStorage.setItem("panel__form__fds__eb", panel__form__fds__eb.textContent);
// };







// panel__form__fds__er.onkeydown = function (event) {
//     if (event.keyCode === 13) {
//       if (panel__form__fds__er.textContent == "") {
//         panel__form__fds__er.textContent = "0.06";
//       };
//       panel__form__fds__er.blur();

//       if(isNaN(panel__form__fds__er.textContent)){
//         panel__form__fds__er.textContent = '0.06';
//         localStorage.setItem("panel__form__fds__er", panel__form__fds__er.textContent);
//       }
//     }
// }

// panel__form__fds__er.addEventListener('focusout', function (e) {
//       if (panel__form__fds__er.textContent == "") {
//         panel__form__fds__er.textContent = "0.06";
//       };
      
//       if(isNaN(panel__form__fds__er.textContent)){
//         panel__form__fds__er.textContent = '0.06';
//         localStorage.setItem("panel__form__fds__er", panel__form__fds__er.textContent);
//       }
// })

// panel__form__fds__er.oninput = function (event) {
//   localStorage.setItem("panel__form__fds__er", panel__form__fds__er.textContent);
// };

