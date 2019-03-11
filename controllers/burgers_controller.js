var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    db.Burger.findAll({
        include: [db.Customer]
    }).then(function(result) {
        var hbsObject = {
            burgers: result
        };
        res.render('index', hbsObject);
    })
});

router.post('/api/burgers', function(req, res) {
    db.Burger.create(req.body)
        .then(function(result) {
            res.json({ id: result.insertId });
        });
});

router.put('/api/burgers/:id', function(req, res) {
    db.Customer.findOne({
        where: req.body
    }).then(function(result) {
        console.log(result);
        if (result) {
            db.Burger.update({
                devoured: true,
                CustomerId: result.id
            }, {
                where: { id: req.params.id }
            }).then(function(result) {
                res.json(result);
            });
        } else {
            db.Customer.create(req.body)
                .then(function(result) {
                    db.Burger.update({
                        devoured: true,
                        CustomerId: result.id
                    }, {
                        where: { id: req.params.id }
                    }).then(function(result) {
                        res.json(result);
                    });
                });
        };
    });
})

module.exports = router;