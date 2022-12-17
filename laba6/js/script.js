$("#button1").click(function(){
    //
    // where id>2
    //
    let mission1 = $(`.id${3}`);
    var txt1 = document.createElement("ol");  
    $("#menu").append(txt1);
    var txt2 = document.createElement("p"); 
    txt2.innerText="id=3" 
    txt1.append(txt2);

    let lala1 = /(?=[А-ЯЁ])/g[Symbol.split](mission1.text())
    for(let i = 0; i<lala1.length;i++){
        txt1.innerHTML += `<li> ${lala1[i]} </li>` ;
    }
    //
    // where id>2 && class!=class3
    //
    let mission2;
    for(let i=2; i<4;i++){
        mission2 = $(`ol[class!='class1'] .id${i}`);
    }
    
    var txt1 = document.createElement("ol");  
    $("#menu").append(txt1);
    var txt2 = document.createElement("p"); 
    txt2.innerText="id>2 && class!=class1" 
    txt1.append(txt2);

    let lala2 = /(?=[А-ЯЁ])/g[Symbol.split](mission2.text())
    for(let i = 0; i<lala2.length;i++){
        txt1.innerHTML += `<li> ${lala2[i]} </li>` ;
    }
    //
    // last children
    //
    let mission31 = $("ol[class='class1'] li:last-child");
    let mission32 = $("ol[class='class2'] li:last-child");
    let mission33 = $("ol[class='class3'] li:last-child");

    var txt1 = document.createElement("ol");  
    $("#menu").append(txt1);
    var txt2 = document.createElement("p"); 
    txt2.innerText="last children" 
    txt1.append(txt2);

    let lala31 = mission31.text();
    let lala32 = mission32.text();
    let lala33 = mission33.text();    

    txt1.innerHTML += `<li> ${lala31} </li> <li>${lala32} </li> <li>${lala33} </li>` ;

});

$("#button2").click(function(){
    $("#button1").attr('disabled', true); 
    let mission41 = $("ol.class1");
    let mission42 = $("ol.class2");
    let mission43 = $("ol.class3");
    mission41.hide(500);
    mission42.hide(500);
    mission43.hide(500);
});