const express = require("express");
const router = express.Router();
const sql = require("mssql");
const conn = require("../Connection/Connect")();

router.get('/', (req, res) => {
    conn.connect().then(function () {
            const sqlQuery = "Select * from Products";
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
            console.log(err)
            res.status(400).send(err)
        });
})

router.post('/', (req, res) => {
    conn.connect().then(function () {
        const sprocedure = new sql.Transaction(conn);
        sprocedure.begin().then(function () {
            const request = new sql.Request(sprocedure);
            request.input("ProductName", sql.VarChar(50), req.body.ProductName)
            request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
            request.execute("Product_Insert").then(function () {
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

router.put('/:id', (req, res) => {
    const _productsID = req.params.id;
    conn.connect().then(function () {
        const sprocedure = new sql.Transaction(conn);
        sprocedure.begin().then(function () {
            const request = new sql.Request(sprocedure);
            request.input("ProductID", sql.Int, _productsID)
            request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
            request.execute("Product_Update").then(function () {
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

// router.post('/', (req, res) => {
//     conn.connect().then(function () {
//         const sprocedure = new sql.Transaction(conn);
//         sprocedure.begin().then(function () {
//             const request = new sql.Request(sprocedure);
//             request.input("ProductName", sql.VarChar(50), req.body.ProductName)
//             request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
//             request.execute("Product_Insert").then(function () {
//                 sprocedure.commit().then(function (recordSet) {
//                     conn.close();
//                     res.status(200).send(req.body);
//                 }).catch(function (err) {
//                     conn.close();
//                     res.status(400).send(err);
//                 });
//             }).catch(function (err) {
//                 conn.close();
//                 res.status(400).send(err);
//             });
//         }).catch(function (err) {
//             conn.close();
//             res.status(400).send(err);
//         });
//     }).catch(function (err) {
//         conn.close();
//         res.status(400).send(err);
//     });
// });

router.delete('/:id', (req, res) => {
    const _productsID = req.params.id;
    conn.connect().then(function () {
        const sprocedure = new sql.Transaction(conn);
        sprocedure.begin().then(function () {
            const request = new sql.Request(sprocedure);
            request.input("ProductID", sql.Int, _productsID)
            request.execute("Product_Delete").then(function () {
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


module.exports = router;