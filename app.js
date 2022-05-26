const express = require("express");
const app = express();
const sessions = require('express-session');
var cookieParser = require('cookie-parser')
const expressValidator = require('express-validator');
const path=require("path");
const hbs = require("hbs");
const connectDB = require('./helpers/db');

const port=process.env.PORT || 3000;

require('dotenv').config({ path: './.env' });



// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

//require('./helpers/db');

const cors = require('cors');
require('express-async-errors');
app.use(cors())
//bodyparses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//end of bodypasres
// app.use(expressValidator());

//assets config
app.use(express.static(path.join(__dirname, 'public')));

// cookie parser middleware
app.use(cookieParser());


//hbs config
app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('html', require('hbs').__express);
 hbs.registerPartials(`${__dirname}/views/partials`);
hbs.registerPartial('bell', '{{bell}}');
// hbs.registerPartial('sideBar', '{{sideBar}}');
// hbs.registerPartial('settings', '{{settings}}');
// hbs.registerPartial('footer', '{{footer}}');
//end of hbs config

const userRoute = require('./routes/user');
const home=require("./routes/home");
const cart=require("./routes/cart");
const kayitol=require("./routes/kayitol");
const kitap=require("./routes/kitap");
const reviews=require("./routes/reviews");
const aboutus=require("./routes/aboutus")
const books=require("./routes/books")




//endpoints
app.use("/home",home);
app.use('/user', userRoute);
app.use('/books', books);
app.use('/cart',cart);
app.use('/aboutus',aboutus);
app.use('/kayitol',kayitol);
app.use('/kitap',kitap)
app.use('/reviews',reviews)


//app.use(errorHandler);

//404 page
app.use((req, res) => {
    res.status(404).render("404")
})
// const url='mongodb://localhost:27017/books';
//listen to port and start the app
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();