let db = require("../models");

module.exports = (app) => {

    app.post("/api/registerUser", (req, res) => {
        db.User.create(
            req.body
        )
        .then((dbUser) => {
            res.json(dbUser)
            console.log("this is dbUser: " , dbUser)
        })
    });




}