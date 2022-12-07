/*let body = document.querySelector('#body');
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 
if(!db){alert("Failed to connect to database.");}

        var msg;     
        db.transaction(function (tx) { 
            tx.executeSql('CREATE TABLE IF NOT EXISTS STUDENTS (id unique, log, address, classNum, olympics)'); 
            tx.executeSql('INSERT INTO STUDENTS (id, fio, address, classNum, olympics) VALUES (1, "foobar", "Khoninova 3", 2, 0)'); 
            tx.executeSql('INSERT INTO STUDENTS (id, log, address, classNum, olympics) VALUES (2, "logmsg", "Oktyabrskaya 56", 2, 1)'); 
            msg = '<p>Log message created and row inserted.</p>'; 
            document.querySelector('#body').innerHTML +=  msg; 
        })

        db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM STUDENTS', [], function (tx, results) { 
                var len = results.rows.length; 
                msg = "<p>Found rows: " + len + "</p>"; 
                document.querySelector('#body').innerHTML +=  msg;         
                for (let i = 0; i < len; i++) { 
                    msg = "<p><b>" + results.rows.item(i).log + "</b></p>"; 
                    document.querySelector('#body').innerHTML +=  msg; 
                } 
            }, null); 
        }); */