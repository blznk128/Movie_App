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
    app.use((req, res, next) => {
        if (req.cookies.user_sid && !req.session.user) {
            res.clearCookie('user_sid');        
        }
        next();
    });
    
    app.route("/api/login")
        .post((req, res) => {
            let userName = req.body.userName,
                password = req.body.password;
        db.User.findOne({ where: { userName: userName && password} }).then(function (user) {
            if (!user) {
                console.log(user);
            }  else {
                req.session.user = user.dataValues;
                res.redirect('/api/dashboard');
            }
        });
    });

    app.get('/api/dashboard', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            loggedin = true; 
            userName = req.session.user.userName;  
            console.log("hey over here " + req.session.user.favoriteMovies); 
         }
            res.json(req.session.user)
        
    });

    app.post('/api/logout', (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
            loggedin = false; 
            res.clearCookie('user_sid');
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    });

    app.put("/api/saveMovie", function(req, res) {
        db.User.update({
          favoriteMovies: req.body.favoriteMovies
        }, {
          where: {
            id: req.session.user.id
          }
        }).then(function(dbUser) {
          res.json(dbUser);
          console.log(req.body)
        })
      });

    app.get("/api/getUser/", (req, res) => {
        db.User.findAll({})
            .then((dbUser)=> {
                res.json(dbUser)
            });
    });

    app.get("/api/savedUsers/:id", function(req, res) {
        db.User.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbUser) {
            res.json(dbUser);
          });
      });
};