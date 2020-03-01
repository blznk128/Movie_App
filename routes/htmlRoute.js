const path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/landing.html"))
    });

    // app.get("/addEmployee", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/addEmployee.html"))
    // });
};