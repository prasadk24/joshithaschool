 function myFunction() {
     var x = document.getElementById("navbarResponsive");
     if (x.className === "navbar-nav") {
         x.className += " responsive";
     } else {
         x.className = "navbar-nav";
     }
 }

 fetch("reuseheader.html")
     .then(response => {
         return response.text()
     })
     .then(data => {
         document.querySelector("header").innerHTML = data;
     });