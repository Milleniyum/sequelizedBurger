var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
    burger.select(function(result) {
        var hbsObject = {
            burgers: result
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insert(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    burger.update(parseInt(req.params.id), function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        };
        res.status(200).end();
    });
})

module.exports = router;