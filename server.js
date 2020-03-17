const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

var hbsContent = {userName: '', loggedin: false, title: "You are not logged in today", body: "Hello World"}; 

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
		
        res.redirect('/api/dashboard');
    } else {
        next();
    }    
};

// app.route("/api/login")
//     .get(sessionChecker, (req, res) => {
//         //res.sendFile(__dirname + '/public/login.html');
//         res.render('login', hbsContent);
//     })
//     .post((req, res) => {
//         var userName = req.body.userName,
//             password = req.body.password;

//         db.User.findOne({ where: { userName: userName } }).then(function (user) {
//             if (!user) {
//                 console.log("not logged in");
//             }  else {
//                 req.session.user = user.dataValues;
//                 res.redirect('/dashboard');
//                 console.log("logged in ", user.dataValues.userName)
//             }
//         });
//     });

// app.get('/api/dashboard', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
// 		loggedin = true; 
// 		userName = req.session.user.userName; 
// 		//console.log(JSON.stringify(req.session.user)); 
// 		console.log("hey over here " + req.session.user.favoriteMovies); 
// 		// hbsContent.title = "You are logged in"; 
//         //res.sendFile(__dirname + '/public/dashboard.html');
//         // res.render('landing.html', hbsContent);
//     }// } res.redirect('/api/login')
    
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

db.sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => {
        console.log("This is running port: " + PORT)
    });
});