const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.zdid2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully !");
// })
mongoose.connect('mongodb+srv://sk2003sathish:sathish@mern.68i0oik.mongodb.net/Cateen?retryWrites=true&w=majority')
.then(() => console.log('DB connected'))
.catch(() => console.log('DB Error'))

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/api/user", UserRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
