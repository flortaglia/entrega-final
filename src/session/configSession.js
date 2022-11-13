const MongoStore = require( "connect-mongo");
const session = require( "express-session");
const config = require('../config.js');
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = session({
    store: MongoStore.create({
      mongoUrl: config.url,
      mongoOptions,
      ttl:config.sessionTtl, //time to live sec session CHANGE TO =>10MIN 10*60 -expiry time of the session
      autoRemove: 'native' //session expires the doc in mongodb will be removed
    }),
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true, // Re initialization of the time in every request
    cookie: {
      maxAge: config.sessionTtl*1000, //CHANGE TO 5 MIN=> 1*1000*60 = 1min
    },
  })
  // req.session.cookie.maxAge