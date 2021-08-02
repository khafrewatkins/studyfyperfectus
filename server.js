// Load Node modules
const express = require('express');
// Initialise Express

// const http = require('http')

const app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(process.env.PORT || 3000);

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.static(__dirname + '/views'));





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




// const path = require("path");
// const router = express.Router();
// app.use("/", router);

// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/views/pages/index.html'));
    //__dirname : It will resolve to your project folder.
//   });
  
//   router.get('/flashcards',function(req,res){
//     res.sendFile(path.join(__dirname+'/views/pages/flashcard/flashcards.html'));
//   });
  
//   router.get('/calendars',function(req,res){
//     res.sendFile(path.join(__dirname+'/views/pages/calendar/calendars.html'));
//   });
  


// router.get('/', function (req, res) {
//         res.sendFile('pages/index');
//         console.log('we running now! catch up!');
//     });
    
// router.get('/flashcards', function(req, res)  {
//         res.render('pages/flashcard/flashcards');
//     });
    
// router.get('/calendars', function(req, res)  {
//         res.render('pages/calendar/calendars');
//     });
    

// router.get("/", (req, res) => {
//   res.sendFile('pages/index');
// });

// router.get("/flashcards", (req, res) => {
//   res.render('pages/flashcard/flashcards');
// });

// router.get("/calendars", (req, res) => {
//     res.render('pages/calendar/calendars');
//   });







