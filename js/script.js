function header_mobile() {
    var x = document.getElementById("nav1");
    if (x.className === "navclass") {
      x.className += " responsive";
    } else {
      x.className = "navclass";
    }
} 


function header_mobile2() {
  var x = document.getElementById("nav2");
  if (x.className === "navclass2") {
    x.className += " responsive2";
  } else {
    x.className = "navclass2";
  }
} 

