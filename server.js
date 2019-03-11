var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

var app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(routes);

var db = require('./models');
var PORT = process.env.PORT || 8080;

var forceSync = (process.env.NODE_ENV) ? false : true;

db.sequelize.sync({ force: forceSync }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});