/*function migrateDB(transaction) {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS authors(" + 
        "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "firstName TEXT, " +
        "lastName TEXT, " +
        "dateCreated TIMESTAMP DEFAULT(datetime('now', 'localtime')))"
    );
}
function onError(error) {
    console.log('Error Code:', error.code, 'Message: ', error.message );
}
function onSuccess() {
    console.log('Migration complete!');
}

var db = openDatabase('Library', '2.0', 'My  library', 2 * 1024 * 1024);
/*db.transaction(function(t) {
    t.executeSql("INSERT INTO authors (firstName, lastName) " +
        " VALUES ('James', 'Priest')");
});*/

/*function itemInserted(transaction, results) {
    console.log("Id:", results.insertId);
    console.log("Length:", results.rows.length);
}

var firstName = 'James';
var lastName = 'Priest';
db.transaction(function(t) {
    t.executeSql("INSERT INTO authors (firstName, lastName) VALUES(?, ?)",
        [firstName, lastName],
        itemInserted);
});

var authorIdUpdate = 6;
var lastName = 'Priest';
db.transaction(function(t) {
    t.executeSql("UPDATE authors SET lastName = ? WHERE id = ?"
        , [lastName, authorIdUpdate]);
});

var authorIdDelete = 14;
db.transaction(function(t) {
    t.executeSql("DELETE FROM authors WHERE id = ?", [authorIdDelete]);
});*/

/*
function displayResults(transaction, results) {
  for (var i = 0; i < results.rows.length; i++) {
    var item = results.rows.items(i);
    $('#items').append('<li>' + item.firstName + ' ' + item.lastName + '</li>');
  }
}

var db = openDatabase('library', '2.0', 'My library', 5 * 1024 * 1024);
db.transaction(function(t) {
    t.executeSql("SELECT * FROM authors", [], displayResults)
});
*/