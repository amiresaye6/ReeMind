const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();


const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.get('/', (_, res) => {
    return res.status(200).json({
        message: "welcome to ReeMind API",
        about: "a universal media organization and reminder tool that helps you capture, categorize, and revisit meaningful content",
        routes: "to-do"
    });
});


app.listen(1234, () => {
    console.log(`Server is running on http://localhost:1234`);
})