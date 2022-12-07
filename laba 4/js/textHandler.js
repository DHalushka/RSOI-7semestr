const Form = document.querySelector('#myForm');
const text = document.querySelector("textarea[name=text]");

Form.onsubmit = evt => {
    evt.preventDefault();

    var rad=document.getElementsByName('radioBtn');                    
    if (rad[0].checked) {
        PasteTextAfter();
    }else{
        PasteTextBefore();
    }        
    Color();
    Size();
}

function PasteTextAfter() {
    let textToPaste = document.getElementsByClassName('txt');
    let add = (str) => text.insertAdjacentText('beforeend', str);
    for (let i=0; i<textToPaste.length; i++){
        if(textToPaste[i].value !== ""){ 
            add(textToPaste[i].value + "\n");
        }
    }
};

function PasteTextBefore() {
    let textToPaste = document.getElementsByClassName('txt');
    let add = (str) => text.insertAdjacentText('afterBegin', str);
    for (let i=0; i<textToPaste.length; i++){
        if(textToPaste[i].value !== ""){ 
            add(textToPaste[i].value + "\n");
        }
    }
};

function Color(){
    let color = document.getElementsByName('color[]')[0].value;
    text.style.color=color;                                    
}
function Size(){
    let size = document.getElementsByName('size[]')[0].value;
    text.style.fontSize=size;                                    
}                