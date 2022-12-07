document.getElementById('buttonAdd').onclick = addElement;
document.getElementById('buttonDelete').onclick = removeElement;

function addElement(){
    let incert = document.getElementsByClassName('text')[0];
    let html = "<input class='txt' class='insert-text' type='text' placeholder='Введите текст'>";
    incert.insertAdjacentHTML('beforeEnd',html);     
}
function removeElement()
{
    let txt = document.getElementsByClassName("txt");
    txt[txt.length-1].remove();                    
}
