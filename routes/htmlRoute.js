const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/landing.html"))
    });

    app.get("/register", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/register.html"))
    });

    app.get("/logIn", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/logIn.html"))
    });

    app.get("/landing", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/landing.html"))
    });

    app.get("/savedMovies", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/savedMovies.html"))
    })
};