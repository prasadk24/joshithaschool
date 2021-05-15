 function myFunction() {
    var x = document.getElementById("navbarResponsive");
    if (x.className === "navbar-nav") {
      x.className += " responsive";
    } else {
      x.className = "navbar-nav";
    }
  }