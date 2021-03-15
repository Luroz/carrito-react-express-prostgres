const express = require('express')
const routerProducts = require('./routers/products')
const cors = require("cors");
const morgan = require("morgan")
const helmet = require("helmet");
const bodyParser = require('body-parser')
const rateLimit = require("express-rate-limit");
//const url = require("url");
const port = process.env.PORT

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });

const app = express()

// Middlewares
app.use(morgan("common"))
app.use(helmet());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))
app.use(limiter)

//Routers
app.use(routerProducts)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.use((req, res) => {
    res.status(404).json({ message: "Direccion Inexistente." });
});