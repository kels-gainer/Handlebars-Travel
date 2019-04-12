var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8070;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/places_controller");
app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
