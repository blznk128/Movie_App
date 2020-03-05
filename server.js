const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

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