const express = require("express");
const router = express.Router();
const sql = require("mssql");
const conn = require("../Connection/Connect")();

//#region Page Load

//Select Current User ToDo

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    conn.connect().then(function () {
            const sqlQuery = "Select * from ToDo where AssignedTo = '" + id + "' and Active = 1 order by OrderID asc";
            const req = new sql.Request(conn);
            req.query(sqlQuery).then(function (recordset) {
                    res.send(recordset.recordset);
                    conn.close();
                })
                .catch(function (err) {
                    conn.close();
                    res.status(400).send(err);
                });
        })
        .catch(function (err) {
            conn.close();
            res.status(400).send(err)
        });
})

//#endregion

//#region Event's

//Change Status
router.put('/changestatus/:id/:status', (req, res) => {
    const _todoID = req.params.id;
    const _todoStatus = req.params.status;
    conn.connect().then(function () {
        const sprocedure = new sql.Transaction(conn);
        sprocedure.begin().then(function () {
            const request = new sql.Request(sprocedure);
            request.input("ToDoID", sql.Int, _todoID);
            request.input("Status", sql.VarChar(20), _todoStatus)
            request.execute("ToDo_ChangeStatus").then(function () {
                sprocedure.commit().then(function (recordSet) {
                    conn.close();
                    var jsonRes = '{"status":200}';
                    res.status(200).send(JSON.stringify(jsonRes));
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send(err);
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send(err);
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send(err);
        });
    }).catch(function (err) {
        conn.close();
        res.status(400).send(err);
    });
});

router.put('/changecolor/:id/:color', (req, res) => {
    const _todoID = req.params.id;
    const _todoColor = req.params.color;
    conn.connect().then(function () {
        const sprocedure = new sql.Transaction(conn);
        sprocedure.begin().then(function () {
            const request = new sql.Request(sprocedure);
            request.input("ToDoID", sql.Int, _todoID);
            request.input("Color", sql.VarChar(20), _todoColor)
            request.execute("ToDo_ChangeColor").then(function () {
                sprocedure.commit().then(function (recordSet) {
                    conn.close();
                    var jsonRes = '{"status":200}';
                    res.status(200).send(JSON.stringify(jsonRes));

                }).catch(function (err) {
                    conn.close();
                    res.status(400).send(err);
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send(err);
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send(err);
        });
    }).catch(function (err) {
        conn.close();
        res.status(400).send(err);
    });
});

//#endregion

//#region Unused

//Select All Active ToDo
router.get('/', (req, res) => {
    conn.connect().then(function () {
            const sqlQuery = "Select * from ToDo where Active = 1 order by OrderID asc";
            const req = new sql.Request(conn);
            req.query(sqlQuery).then(function (recordset) {
                    res.send(recordset.recordset);
                    conn.close();
                })
                .catch(function (err) {
                    conn.close();
                    res.status(400).send(err);
                });
        })
        .catch(function (err) {
            conn.close();
            res.status(400).send(err)
        });
})

//Select all Unique Status
router.get('/status', (req, res) => {
    conn.connect().then(function () {
            const sqlQuery = "Select distinct status from ToDo where Active = 1";
            const req = new sql.Request(conn);
            req.query(sqlQuery).then(function (recordset) {
                    res.send(recordset.recordset);
                    conn.close();
                })
                .catch(function (err) {
                    conn.close();
                    res.status(400).send(err);
                });
        })
        .catch(function (err) {
            conn.close();
            res.status(400).send(err)
        });
})

//Create ToDo SP
router.post('/', (req, res) => {
    conn.connect().then(function () {
        const sprocedure = new sql.Transaction(conn);
        sprocedure.begin().then(function () {
            const request = new sql.Request(sprocedure);
            request.input("TaskTitle", sql.NVarChar(100), req.body.TaskTitle);
            request.input("TaskDesc", sql.NVarChar(500), req.body.TaskDesc);
            //request.input("DueDate", sql.Date, req.body.DueDate);
            request.execute("ToDo_Create").then(function () {
                sprocedure.commit().then(function (recordSet) {
                    conn.close();
                    res.status(200).send(req.body);
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send(err + "Hello1");
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send(err + "Hello2");
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send(err + "Hello3");
        });
    }).catch(function (err) {
        conn.close();
        res.status(400).send(err + "Hello4");
    });
});

//Update TODO SP
router.put('/todoupdate/:id', (req, res) => {
    const _todoID = req.params.id;
    conn.connect().then(function () {
        const sprocedure = new sql.Transaction(conn);
        sprocedure.begin().then(function () {
            const request = new sql.Request(sprocedure);
            request.input("TaskTitle", sql.NVarChar(100), req.body.TaskTitle)
            request.input("TaskDesc", sql.NVarChar(500), req.body.TaskDesc)
            request.input("Active", sql.Bit, req.body.Active)
            request.input("DueDate", sql.Date, req.body.DueDate)
            request.input("AssignedTo", sql.NVarChar(50), req.body.AssignedTo)
            request.execute("ToDo_Update").then(function () {
                sprocedure.commit().then(function (recordSet) {
                    conn.close();
                    res.status(200).send(req.body);
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send(err);
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send(err);
            });
        }).catch(function (err) {
            conn.close();
            res.status(400).send(err);
        });
    }).catch(function (err) {
        conn.close();
        res.status(400).send(err);
    });
});

//#endregion

module.exports = router;