var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');

var app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(routes);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    var server = ' port ' + PORT;
    if (!process.env.PORT) server = ': http://localhost:' + PORT;
    console.log('Server listening on' + server);
});