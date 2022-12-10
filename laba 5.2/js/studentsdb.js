var db = openDatabase('Students', '2.0', 'My  library', 5 * 1024 * 1024);

/*db.transaction(function(t){
    t.executeSql("DROP TABLE students");
})*/

db.transaction(function(t) {
    t.executeSql("CREATE TABLE IF NOT EXISTS students(" + 
        "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "fio TEXT, " +
        "address TEXT, " +
        "olympics BOOLEAN, "+
        "classNumber INTEGER NOT NULL)"        
    );
});

let items = document.querySelector('#items');
let table = document.querySelector('#table');
let addId = document.querySelector('#id');
const app  = document.querySelector('#app');
let addTelId = document.querySelector('#addTelId');

app.onsubmit = () => {
    let student = {
        fio : app.fio.value,
        address : app.address.value,
        olympics : app.olympics.value,
        classNumber : app.classNumber.value,
    }
    db.transaction(function(t) {
        t.executeSql("INSERT INTO students (fio, address, olympics, classNumber) VALUES(?, ?, ?, ?)",
            [student.fio, student.address, student.olympics, student.classNumber]);
    });
}


let showTable = db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM students", [], function(tx, result) {
    for(var i = 0; i < result.rows.length; i++) {

        var student = result.rows.item(i);

        var id = document.createElement('option');
        id.innerText=student.id;
        id.setAttribute('value', student.id);
        addId.appendChild(id);

        var telId = document.createElement('option');
        telId.innerText=student.id;
        telId.setAttribute('value', student.id);
        addTelId.appendChild(telId);

        var table_row = document.createElement('tr');
        var cell_fio = document.createElement('td');
        var cell_address = cell_fio.cloneNode(true);
        var cell_olympics = cell_fio.cloneNode(true);
        var cell_classNumber = cell_fio.cloneNode(true);

        cell_fio.innerText=student.fio;
        cell_address.innerText=student.address;
        cell_olympics.innerText=student.olympics;
        cell_classNumber.innerText=student.classNumber;

        table.appendChild(table_row);
        table_row.appendChild(cell_fio);
        table_row.appendChild(cell_address);
        table_row.appendChild(cell_olympics);
        table_row.appendChild(cell_classNumber);
    }}, null)});    


let delBtn = document.querySelector('#delBtn');
delBtn.addEventListener('click', function(){
    var studentId = addId.value;
    db.transaction(function(t) {
        t.executeSql("DELETE FROM students WHERE id = ?", [studentId]);
    });
    window.location.href = window.location.href;
});

let btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', function(){
    db.transaction(function(t) {
        t.executeSql("DROP TABLE students");
    });
    window.location.href = window.location.href;
});

let showFio =  db.transaction(function(t) {
        t.executeSql("SELECT * FROM students WHERE olympics = 'false'", [], function(tx, result) {
            for(var i = 0; i < result.rows.length; i++) {        
                var student = result.rows.item(i);
                var list = document.createElement('li');
                list.innerText=student.fio;
                items.appendChild(list);        
}}, null)});    



document.querySelector('#addTel');
addTel.addEventListener('click', function(){
    db.transaction(function(t) {
        t.executeSql("ALTER TABLE students ADD COLUMN telephone TEXT");
});});

const addTelForm  = document.querySelector('#new-form');
addTelForm.onsubmit = () => {
    let student = {
        telephone : addTelForm.telephone.value,
    };
    var studentId = addTelId.value;
    var sql = `UPDATE students set telephone = '${student.telephone}' WHERE id = ${studentId}`;
    db.transaction(function(t) {
        t.executeSql(sql);        
    });
}

let telephones = document.querySelector('#telephones');
let showTel =  db.transaction(function(t) {
    t.executeSql("SELECT telephone FROM students", [], function(tx, result) {
        for(var i = 0; i < result.rows.length; i++) {        
            var student = result.rows.item(i);
            var list = document.createElement('li');
            list.innerText=student.telephone;
            telephones.appendChild(list);        
}}, null)});   
