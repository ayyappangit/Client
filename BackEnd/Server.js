const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3007;
app.use(express.json());
app.use(cors());
const controller = require('./Controller/ToDo');
app.use("/api/todo", controller);
app.listen(port, function () {
    console.log("Server running on port: " + port);
});