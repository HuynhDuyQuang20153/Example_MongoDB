const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
var port = 8080;

//ket noi toi mongoDB
mongoose.connect('mongodb://localhost:27017/usersdb',
    {
        useNewUrlParser: true
        // useFindAndModify: false,
        // useUnifiedTopology: true
    }
);



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});



const Router = require("./routes")
app.use('/',Router);
app.listen(port, (err) => {
    if(err) console.log(err);
    console.log(`Server is running at port http://localhost:${port}`);
});