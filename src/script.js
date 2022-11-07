var i = 0;
var queue = [];
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelectorAll("[id='myBar']");
    // if elm style width is 0, set it to 100% else get next element and set it to 100%
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        // create new "myBar" element
        var newBar = document.createElement("div");
        newBar.setAttribute("id", "myBar");
        newBar.setAttribute("class", "bar");
        document.getElementById("myProgress").appendChild(newBar);
      } else {
        width++;
        elem[elem.length - 1].style.width = width + "%";
      }
    }
  }
}
