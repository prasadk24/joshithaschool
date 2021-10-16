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
 fetch("menu.html")
     .then(response => {
         return response.text()
     })
     .then(data => {
         let str = location.href.toString();
         let val = str.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.html)$/i);
         let doc = new DOMParser().parseFromString(data, "text/html");
         let list = doc.body.firstChild.getElementsByTagName('li');
         if (val === null || val[0] === 'index.html') {
             list[0].classList.add('active');
         } else if (val[0] === 'contact.html') {
             list[list.length - 1].classList.add('active');
         } else {
             for (let i = 0; i < list.length; i++) {
                 if (list[i].innerHTML.includes(val[0])) {
                     let element = list[i].getElementsByTagName('a');
                     console.log(element);
                     for (let j = 0; j < element.length; j++) {

                         if (element[j].outerHTML.includes(val[0])) {
                             element[j].classList.add('active');
                         }
                     }
                     list[i].classList.add('active');
                 }
             }
         }

         document.getElementById("navbarResponsive").innerHTML = doc.body.innerHTML;
     });