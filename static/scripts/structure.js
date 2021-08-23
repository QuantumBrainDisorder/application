function structure__set__A() {
  document.getElementById("structure__unit").textContent = 'Alpha<ul contenteditable="false"><li onclick="structure__set__A()">&#8491;</li><li onclick="structure__set__nm()">nm</li><li onclick="structure__set__um()">&#956;m</li></ul>';
}

function structure__set__nm() {
    document.getElementById("structure__unit").style.color = "red";
}
  
function structure__set__um() {
    document.getElementById("structure__unit").style.color = "green";
 }