document.addEventListener('DOMContentLoaded', function(){
  let form = document.querySelector('.form');
  let inputId = document.querySelector('.input-id');
  let inputFirstName = document.querySelector('.input-first-name');
  let inputLastName = document.querySelector('.input-last-name');
  let inputEmail = document.querySelector('.input-email');
  let buttonShow = document.querySelector('.button-show');
  let buttonSend = document.querySelector('.button-send');
  let buttonDelete = document.querySelector('.button-delete');
  let showDataContainer = document.querySelector('.show-data-container');
  
  let url = 'http://localhost:3000/employees';

  let showData = () => {
    let xmlhttp = new XMLHttpRequest();
  
    xmlhttp.open('GET', url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
        showDataContainer.innerHTML = xmlhttp.responseText;
      }
    }  
    return false;
  }
  
  let sendData = () => {
    let xmlhttp = new XMLHttpRequest();
    let firstNameValue = inputFirstName.value;
    let lastNameValue = inputLastName.value;
    let emailValue = inputEmail.value;
    
    let data = JSON.stringify({
      "firstName": firstNameValue,
      "lastName": lastNameValue,
      "email": emailValue
    })
  
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status == 201 && xmlhttp.readyState == 4) {
        alert('Data sent: ' + firstNameValue + ' ' + lastNameValue + ' ' + emailValue);
      }
    }
    xmlhttp.send(data);
  
    return false;
  }
  
  let deleteData = () => {
    let xmlhttp = new XMLHttpRequest();
    let idValue = inputId.value;
  
    xmlhttp.open('DELETE', url + '/' + idValue, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
  
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
        alert('Deleted ID: ' + idValue);
      }
      else if (xmlhttp.status == 404 && xmlhttp.readyState == 4) {
        alert('Object of ID ' + idValue + ' doesn\'t exist');
      }
    }
    return false;
  }

  form.addEventListener('submit', sendData)
  buttonDelete.addEventListener('click', deleteData);
  buttonShow.addEventListener('click', showData);
});