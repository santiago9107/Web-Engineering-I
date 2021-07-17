

document.querySelector('#usa').addEventListener('click', selectData);

function selectData() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'usa.txt', true);
    xhttp.send();


    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      document.querySelector('#city-display').innerHTML = this.responseText.replace(/(?:\r\n|\r|\n)/g, '<br>');
      }
    };
    
  }

  document.querySelector('#canada').addEventListener('click', selectData2);

  function selectData2() {
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', 'canada.txt', true);
      xhttp.send();
  
  
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.querySelector('#city-display').innerHTML = this.responseText.replace(/(?:\r\n|\r|\n)/g, '<br>');
        }
      };
      
    }

    document.querySelector('#mexico').addEventListener('click', selectData3);

    function selectData3() {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'mexico.txt', true);
        xhttp.send();
    
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          document.querySelector('#city-display').innerHTML = this.responseText.replace(/(?:\r\n|\r|\n)/g, '<br>');
          }
        };
        
      }
    
      document.querySelector('#russia').addEventListener('click', selectData4);
    
    function selectData4() {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'russia.txt', true);
        xhttp.send();
    
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          document.querySelector('#city-display').innerHTML = this.responseText.replace(/(?:\r\n|\r|\n)/g, '<br>');
          }
        };
        
      }
      
    
    function receiveData() {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', document.getElementById('json-file-input').value, true);
        xhttp.send();
    
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              let data = JSON.parse(this.responseText);
              let res = document.querySelector('#res');
              res.innerHTML = '';

              for(let item of data){
                  res.innerHTML +=`
                  <tr>
                    <td>${item.first}</td>
                    <td>${item.last}</td>
                    <td>${item.address}</td>
                    <td>${item.major}</td>
                    <td>${item.gpa}</td>
                </tr>
                  `
                }
         
          }
        }
        
      }
    
      