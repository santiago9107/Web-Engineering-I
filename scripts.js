

function selectData() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/cgi-bin/cs213/mileageAjaxJSON', true);
    xhttp.send();


    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.querySelector('#city-display').innerHTML = this.responseText.replace(/(?:\r\n|\r|\n)/g, '<br>');
      }
    };
    
  }