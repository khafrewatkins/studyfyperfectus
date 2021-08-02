// Load Node modules
const express = require('express');
// Initialise Express


const app = express();
// ----------------------
// const morgan = require('morgan')
// const mongoose = require('mongoose');
// const dotenv = require('dotenv')
// const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const connectDB = require('./config/db')
// const methodOverride = require('method-override')



// const PORT = process.env.PORT||3000;
// dotenv.config({ path: './config/config.env' })

// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// })

// ==================================
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.static(__dirname + '/views'));


// ======================================

// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   )
//   // Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// --------------------------------
// Render static files
app.use(express.static('public'));
// Port website will run on


// app.use(require("./routes/index"))
// app.use('/auth', require('./routes/auth'))


app.listen(process.env.PORT||3000);






const ejs = require('ejs');

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/about/about');
    console.log('we running now! catch up!');
});

app.get('/flashcards', function(req, res)  {
    res.render('pages/flashcard/flashcards');
});

app.get('/calendars', function(req, res)  {
    res.render('pages/calendar/calendars');
});


app.get('/index', function(req, res)  {
    res.render('pages/index');
});









