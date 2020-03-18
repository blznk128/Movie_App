let db = require("../models");

module.exports = (app) => {
    app.post("/api/registerUser", (req, res) => {
        db.User.create({
            userName: req.body.userName,
            password: req.body.password,
            favoriteMovies: req.body.favoriteMovies
        })
        .then(dbUser => {
            res.json(dbUser)
            req.session.dbUser = dbUser.dataValues;
            console.log("new this one: " + req.session.dbUser.userName)
        })
    });

    // app.post("/api/logIn", (req, res) => {
        
    //     var userName = req.body.userName,
    //         password = req.body.password;

    //     db.User.findOne({ where: { userName: userName } }).then(function (user) {
    //         if (!user) {
    //             console.log("not logged in");
    //         }  else {
    //             req.session.user = user.dataValues;
    //             // res.redirect('/dashboard');
    //             console.log("logged in ", user.dataValues.userName)
    //         }
    //     });
    // });
    var sessionChecker = (req, res, next) => {
        if (req.session.user && req.cookies.user_sid) {
            
            res.redirect('/api/dashboard');
        } else {
            next();
        }    
    };
    
    app.route("/api/login")
    .get(sessionChecker, (req, res) => {
        //res.sendFile(__dirname + '/public/login.html');
        // res.render('login', hbsContent);
    })
    .post((req, res) => {
        var userName = req.body.userName,
            password = req.body.password;

        db.User.findOne({ where: { userName: userName } }).then(function (user) {
            if (!user) {
                console.log("not logged in");
            }  else {
                req.session.user = user.dataValues;
                res.redirect('/api/dashboard');
                console.log("logged in ", user.dataValues.userName)
            }
        });
    });

    app.get('/api/dashboard', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            loggedin = true; 
            userName = req.session.user.userName; 
            //console.log(JSON.stringify(req.session.user)); 
            console.log("hey over here " + req.session.user.favoriteMovies); 
            // hbsContent.title = "You are logged in"; 
            //res.sendFile(__dirname + '/public/dashboard.html');
            // res.render('landing.html', hbsContent);
         }res.json(req.session.user)
        
    });
}