const regForm    = document.querySelector('#registration-form');
const tableTbody = document.querySelector('#registration-table tbody');
const listOfUsers = document.querySelector('.list-of-users');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

regForm.onsubmit = evt => 
{
    evt.preventDefault()  

    string = regForm.querySelectorAll('[name="communication"]'); //получаем поле communication
    let communication="";
    let k = 0;
    for(let i=0;i<string.length;i++){
        if(string[i].checked===true){
            communication+=string[i].value+"<br />";
            k++;
        }
    }
    if(k === 0) {
        alert("Выберите что дает человеку общение с классической музыкой");
        return;
    }
    
    let newRow = tableTbody.insertRow()

    newRow.insertCell().textContent = regForm.name.value;    
    newRow.insertCell().textContent = regForm.month.value; 
    newRow.insertCell().innerHTML = communication;
    newRow.insertCell().textContent = regForm.performer.value;
    newRow.insertCell().textContent = regForm.visit.value;
    newRow.insertCell().textContent = regForm.date.value;
    newRow.insertCell().textContent = regForm.email.value; 
    

    let user = document.createElement('option');
    user.innerHTML = regForm.name.value;
    listOfUsers.appendChild(user);
    
    regForm.reset();
}