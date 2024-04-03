const express = require("express");
const dotenv = require("dotenv").config();
const errorhandler = require("./middlewares/errorhandler");
const connectDb  = require("./config/dbConnection");
const app = express();
connectDb();
const port = 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorhandler)




app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})
