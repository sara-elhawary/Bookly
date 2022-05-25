const express = require("express");
const app = express();
const path=require("path");
const hbs = require("hbs");
const port=process.env.PORT || 3000;

require('dotenv').config({ path: './.env' });

//require('./helpers/db');

const cors = require('cors');
require('express-async-errors');
app.use(cors())
//bodyparses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//end of bodypasres

//assets config
app.use(express.static(path.join(__dirname, 'public')));

//hbs config
app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('html', require('hbs').__express);
hbs.registerPartials(`${__dirname}/views/partials`);
hbs.registerPartial('header', '{{header}}');
hbs.registerPartial('sideBar', '{{sideBar}}');
hbs.registerPartial('settings', '{{settings}}');
hbs.registerPartial('footer', '{{footer}}');
//end of hbs config

const userRoute = require('./routes/user');
const books=require("./routes/books");
//endpoints
app.use("/books",books);
app.use('/user', userRoute);

//app.use(errorHandler);

//404 page
app.use((req, res) => {
    res.status(404).render("404")
})

//listen to port and start the app
app.listen(port, () => {
    console.log("server running at 3000");
})
