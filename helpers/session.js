
const session = require('express-session');
const MongoDBStore=require('connect-mongodb-session')(session)
const url='mongodb://localhost:27017';

const store=new MongoDBStore({
 // uri:url,
   uri:'mongodb+srv://first:6PhsjC3EuCp4z9oy@cluster0.kb4eg.mongodb.net/clinc?authSource=admin&replicaSet=atlas-spouhm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
   collection:"session",
    databaseName:"todos"
  })
  exports.session=session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store:store
    
  })
