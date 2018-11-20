const sql = require("mssql");
console.log('Local DB Connected')
const connect = function () {
    const conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'sa',
        server: 'US1153935W1',
        database: 'DataBase',
        port: 1433
    });
    //console.log('Azure DB Connected')
    // const conn = new sql.ConnectionPool({
    //     user: 'vaasadmin',
    //     password: 'Password1',
    //     server: 'vaasserver.database.windows.net',
    //     database: 'SQLDB',
    //     port: 1433,
    //     encrypt: true
    // });

    return conn;
};

module.exports = connect;


// const sql = require("mssql");
// const config = {
//     user: 'sa',  
//     password: 'sa',  
//     server: 'US1153935W1',  
//     database: 'DataBase',
//     port:1433
// };
// const pool = sql.connect(config).then(p => {
// console.log("Connected",p);
// });