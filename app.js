/*
    Require modules
*/
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const path = require('path');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
var {mongoose} = require('./server/db/mongoose.js');

/*
    View Engine
*/
var app = express();
// app.use([path,] callback [, callback...]) -> puts middleware fot the app
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
// app.engine('.extenionName', renderingEngine) -> renders files
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
// app.set('view engine', 'engineToUse') -> sets default viewing engine
app.set('view engine', 'handlebars');

/*
    Bodyparser Middleware + Express session
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// session -> keep the user loggin after he login in on the website
//         -> creates an object req.session, where you can add properties
//         -> (ex: req.session.page_views, to count how many times he entered on the page)
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

/*
    Initialize Passport (authetification) to keep persisten login data (i.e in cookies)
*/
app.use(passport.initialize());
app.use(passport.session());

/*
     Validator to validate data incoming with the re object to the server
*/
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


/*
    Flash to pop-up mesages in the browser
*/
app.use(flash());
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

/*
    Website routes
*/
var routes = require('./routes/index');
var users = require('./routes/users');
app.use('/', routes);
app.use('/users', users);

/*
    Fire the server online
*/
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
	console.log('Server started on port '+ app.get('port'));
});