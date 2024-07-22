const express = require('express');
const app = express();
require("dotenv").config();
const colors = require("colors");
const data = require('./data/data');
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

//------- Connnect database
const connectDB = require("./config/db");
connectDB();
//-------

//------- API
    //======= User API
    const userRoutes = require("./routes/UserRoutes");
    app.use("/api/user", userRoutes);

    
    //=======
//-------

const port = process.env.PORT;
app.listen(port, () => console.log(`Sever is running on port ${port}!`.yellow.bold));