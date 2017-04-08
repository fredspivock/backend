var express = require('express');
var base32 = require('../base32');

var routes = function (Flavor) {
    var flavorRouter = express.Router();

    flavorRouter.route('/')
        .post(function (req, res) {
            var flavor = new Flavor(req.body);
            var query = {};

            if (req.query.name) {
                query.name = req.query.name;
            }
            var value = 0;
            Flavor.find(query, function (err, flavors) {
                flavors.forEach(function (flav) {
                    value = flav.value > value ? flav.value : value;
                });
                value++;
                flavor.value = value;
                flavor.save(function (err) {
                    if (err) {
                        res.status(500).send(err);
                    }
                    else {
                        res.status(201).send(flavor);
                    }
                });
            });
        })
        .get(function (req, res) {
            var query = {};

            if (req.query.name) {
                query.genre = req.query.genre;
            }

            Flavor.find(query, function (err, flavors) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.json(flavors);
                }
            });
        });
    //middleware gets item by id
    flavorRouter.use('/:flavorId', function (req, res, next) {
        Flavor.findById(req.params.flavorId, function (err, flavor) {
            if (err) {
                res.status(500).send(err);
            }
            else if (flavor) {
                req.flavor = flavor;
                next();
            }
            else {
                res.status(404).send('Not found');
            }
        });
    });

    flavorRouter.route('/:flavorId')
        .get(function (req, res) {
            res.json(req.flavor);
        }).put(function (req, res) {
        req.flavor.name = req.body.name;
        req.flavor.save(function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.json(req.flavor);
            }
        });
        res.json(req.flavor);
    }).delete(function (req, res) {
        req.flavor.remove(function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(204).send('Removed');
            }
        });
    });

    return flavorRouter;
};

module.exports = routes;