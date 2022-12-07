function DataBase(name){
    this.dbName=name;
    this.ucDbName=this.dbName[0].toUpperCase+this.dbName.substring(1);
    this.db=openDatabase(this.dbName,'1.0',this.ucDbName,5*1024*1024);
    //if(!db){alert("Failed to connect to database.");}
}
/**
 *  Конструктор объекта принимает имя базы данных, 
 *  которое затем присваивается свойству dbName. 
 *  Свойству ucDbName присваиваем тоже имя, 
 *  но первую букву делаем заглавной. 
 *  Свойству db присваиваем дескриптор открытой базы. 
 *  Функция openDatabase открывает базу данных
 *  и принимает четыре параметра:
 *  имя базы данных;
 *  версия базы;
 *  описание;
 *  размер базы.
 */



DataBase.prototype.create = function(name){
    var strFields = '';
    var fields ={
        name: 'TEXT',
        surname: 'TEXT',
        email: 'TEXT',
        phone: 'TEXT',
    }
    for(const key in fields){
        strFields+=", "+key+' '+fields[key];
    }
    this.db.transaction (function(tx){
        tx.executeSql('create table if not exists '+ name + '(id integer primary key autoincrement'+ strFields+')');
    });
}
/**
  * Метод принимает имя создаваемой таблицы 
  * в виде параметра. В переменной strFields 
  * будет содержаться sql запрос. В объект 
  * fields поместим имена наших полей и тип 
  * хранимых данных. В нашем случае у всех 
  * полей тип будет TEXT. В цикле for сформируем 
  * строку запроса. Методом transaction отправим 
  * запрос. В sql запросе присутствует условие 
  * create table if not exists - это значит, 
  * что таблица будет создана только в том 
  * случае. если она не существует. Теперь 
  * создадим метод add(). В качестве параметра 
  * методу передается имя таблицы.
 */
DataBase.prototype.add = function(name){
    var q = new Array();
    var vars = new Array();
    var vals = new Array();
    var values = {
        name: document.getElementById('add-name').value,
        surname: document.getElementById('add-surname').value,
        email: document.getElementById('add-mail').value,
        phone: document.getElementById('add-phone-number').value,
    }
    for(var i = 0; i<Object.keys(values).length; i++){
        q.push('?');
    }
    for(const key in values){
        vars.push(key);
    }
    for(const key in values){
        vals.push(values[key]);
    }
    this.db.transaction(function (tx){
        tx.executeSql('insert into '+name+'('+vars.join(", ")+') values ('+q.join(", ")+ ")", vals);
    });
}
/**
 *  Создадим три массива: q, vars и vals. 
 *  В методе values содержатся имена полей 
 *  таблицы с присвоенными значениями, которые 
 *  в свою очередь берутся из текстовых полей. 
 *  В цикле for заполним массив q знаками вопроса,
 *  массив vars заполним именами полей таблицы,
 *  а массив vals сформируем из значений полей 
 *  ввода. Далее отправим sql запрос. Создадим
 *  метод load(). Этот метод будет загружать
 *  данные из базы и выводить в виде таблицы.
 */
DataBase.prototype.load = function(name){
    var sql=`select * from ${name}`;
    document.querySelector('.table').innerHTML='';
    this.db.transaction(function(tx){
        tx.executeSql(sql, [], function(tx, result){
            var n = result.rows.length;
            for(var i = 0; i<n; i++){
                var work = result.rows.item(i);
                var tbl_block = document.querySelector('.table');
                var cell_name = document.createElement('div');
                var cell_del_btn = document.createElement('button');
                var del_btn = document.createElement('button');
                cell_name.setAttribute('class', 'cell-tbaable');
                cell_name.setAttribute('data-id', work.id);
                var cell_surname = cell_name.cloneNode(true);
                var cell_mail = cell_name.cloneNode(true);
                var cell_phone = cell_name.cloneNode(true);
                cell_name.setAttribute('data-field' , 'name');
                cell_surname.setAttribute('data-field' , 'surname');
                cell_mail.setAttribute('data-field' , 'email');
                cell_phone.setAttribute('data-field' , 'phone');
                cell_del_btn.setAttribute('data-field' , 'cell-tbaable');
                del_btn.setAttribute('data-id' , work.id);
                cell_name.innerText=work.name;
                cell_surname.innerText=work.surname;
                cell_mail.innerText=work.email;
                cell_phone.innerText=work.phone;
                del_btn.innerHTML='&times;';
                cell_del_btn.appendChild(del_btn);
                tbl_block.appendChild(cell_name);
                tbl_block.appendChild(cell_surname);
                tbl_block.appendChild(cell_mail);
                tbl_block.appendChild(cell_phone);
                tbl_block.appendChild(cell_del_btn);                
            }
        });
    });
};
/**
 *  Переменной sql присваиваем запрос, 
 *  а затем его отправляем. В переменной result 
 *  сохраняется результат запроса, т.е. наша 
 *  таблица из базы данных. В переменную n 
 *  сохраняем количество записей, прочитанных
 *  из базы. Далее формируем html таблицу из
 *  блоков div с полученными из базы данными.
 *  Теперь перейдём к созданию метода update().
 *  Этот метод будет служить для изменения
 *  записей в базе данных. В метод передадим
 *  четыре параметра:
    name - имя таблицы;
    field - имя изменяемого поля;
    value - новое значение изменяемого поля;
    id - номер строки в базе данных.
 */
DataBase.prototype.update = function(name, field, value, id){
    var sql = `update ${name} set ${field} = '${value}' WHERE id = ${id}`;
    this.db.transaction(function(tx){
        tx.executeSql(sql);
    });
};
/**
 *  В переменной sql формируем запрос,
 *  а затем отправляем его.
 *  Создадим метод del().
 *  Этот метод будет удалять указанную строку
 *  из базы данных. В метод передадим два
 *  параметра:
name - имя таблицы;
id - номер удаляемой строки.
 */
DataBase.prototype.del = function(name,id){
    var sql = `DELETE FROM ${name} WHERE id = ${id}`;
    this.db.transaction((tx)=>{
        tx.executeSql(sql);
    });
};
/**
 * В переменной sql формируем запрос,
 *  а затем отправляем его. И последним
 *  создадим метод clear() - этот метод
 *  будет удалять таблицу из базы данных.
 *  В метод передадим в качестве параметра
 *  имя удаляемой таблицы.
 */
DataBase.prototype.clear = function(name){
    var sql = `DROP TABLE ${name}`;
    this.db.transaction(function(tx){
        tx.executeSql(sql);
    });
    document.querySelector('.table').innerHTML='';
    location.reload();
}
/**
 * В переменной sql формируем запрос,
 *  затем отправляем его и в конце очистим
 *  нашу html таблицу. 
 */