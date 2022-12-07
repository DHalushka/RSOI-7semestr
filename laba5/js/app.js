/*let table = document.querySelector('#full-table');
table.classList.remove("full-table");*/


function App(baseName, tableName){
    this.db = new DataBase(baseName);
    this.tbl= tableName;
    this.fields={
        addName: document.querySelector('#add-name'),
        addSurname: document.querySelector('#add-surname'),
        addMail: document.querySelector('#add-mail'),
        addPhoneNumber: document.querySelector('#add-phone-number'),
    };
    this.btn = {
        add: document.querySelector('#add'),
        clear: document.querySelector('#btnClear'),
        del: document.querySelector('.table'),
    };
};
App.prototype.create = function(){
    this.db.create(this.tbl);
    this.btn.add.addEventListener('click', e =>{
        if(e.target.tagName == 'INPUT'){
            if(this.fields.addName != ''&& this.fields.addSurname != ''&& this.fields.addMail != '' && this.fields.addPhoneNumber != ''){
                this.db.add(this.tbl);
                this.db.load(this.tbl);
            }
            for(const key in this.fields){
                this.fields[key].value='';
            }
        }
    });
    this.btn.clear.addEventListener('click', e=>{
        if(e.target.tagName == 'BUTTON'){
            this.db.clear(this.tbl);
        }
    });
    this.btn.del.addEventListener('click', e=>{
        if(e.target.tagName == 'BUTTON'){
            this.db.del(this.tbl, parseInt(e.target.getAttribute('data-id')));
            this.db.load(this.tbl);
        }
    });
    /*this.btn.del.addEventListener('dblclick', e=>{
        if(e.target.tagName == 'DIV'){
            e.target.setAttribute('contenteditable', 'true');
            e.target.focus();
        }
    });
    this.btn.del.addEventListener('keydown', e=>{
        if(e.target.tagName == 'DIV' && e.target.getAttribute('contenteditable')=='true'){
            if(e.keyCode==13){
                e.target.setAttribute('contenteditable', 'false');
                var fld = e.target.getAttribute('data-field');
                var vle = e.target.innerText;
                var id = parseInt(e.target.getAttribute('data-id'));
                this.db.update(this.tbl, fld, vle, id)
            }
        }
    });*/

}
//let table = document.querySelector('#full-table');
let show = document.querySelector('#show');
console.log(table);

/*show.addEventListener('click', e=>{
    table.classList.remove("full-table");
}
)

function showTable(){
    table.classList.remove("full-table");
}*/


/**
 * В первую очередь вызовем метод create()
 *  объекта DataBase(), тем самым мы создадим
 *  таблицу, если она отсутствует. Затем
 *  повесим на кнопку добавить событие click.
 *  Убедимся, что клик был сделан по кнопке и
 *  проверяем. заполнены ли поля. Если всё так,
 *  то добавим новую запись в базу и сразу
 *  выведем обновленные данные в таблицу. После
 *  очистим текстовые поля, пройдясь по ним в
 *  цикле for. Следующим шагом повесим событие
 *  click на нашу таблицу и также убедимся, что
 *  клик произведен по кнопке. Если все верно,
 *  то удалим таблицу из базы данных. Теперь
 *  повесим на таблицу событие click, убедимся
 *  что кликнули по кнопке, а не по ячейке и.
 *  если все верно, удалим строку из базы данных
 *  и загрузим обновленные данные. Еще повесим
 *  на таблицу событие dblclick и убедившись,
 *  что кликнули дважды по ячейке таблицы,
 *  сделаем ее редактируемой, добавив атрибут
 *  contenteditable. установленный в true, и
 *  установим фокус на ячейке. В завершении
 *  повесим на таблицу событие keydown. Проверим,
 *  вызвано ли событие на ячейки таблицы и
 *  является ли ячейка в данный момент
 *  редактируемой. Далее проверяем на нажатие
 *  кнопки ENTER и, если всё верно, то выключаем
 *  редактирование ячейки. установив событие
 *  contenteditable в false. В переменной fld
 *  сохраним имя редактируемого поля, переменной
 *  vle присвоим новое значение отредактированного
 *  поля, а в переменной id сохраним порядковый
 *  номер строки и обновим данные в базе.
 */