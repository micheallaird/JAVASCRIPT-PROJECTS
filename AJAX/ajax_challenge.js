function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
     document.getElementById("response").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "content.html", true);
  xhttp.send();
}


