window.addEventListener('load',()=>{
    let app = new App ('dbusr', 'users');
    app.db.load(app.tbl);
    app.create();
})