var express = require('express');
var base32 = require('../base32');

var routes = function (Nicotine) {
    var nicotineRouter = express.Router();

    nicotineRouter.route('/')
        .post(function (req, res) {
            var nicotine = new Nicotine(req.body);
            var query = {};

            if (req.query.name) {
                query.name = req.query.name;
            }
            var value = 0;
            Nicotine.find(query, function (err, nicotines) {
                nicotines.forEach(function (nic) {
                    value = nic.value > nic ? flav.nic : value;
                });
                value++;
                nicotine.value = value;
                nicotine.save(function (err) {
                    if (err) {
                        res.status(500).send(err);
                    }
                    else {
                        res.status(201).send(nicotine);
                    }
                });
            });
        })
        .get(function (req, res) {
            var query = {};

            if (req.query.name) {
                query.genre = req.query.genre;
            }

            Nicotine.find(query, function (err, nicotines) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.json(nicotines);
                }
            });
        });
    //middleware gets item by id
    nicotineRouter.use('/:nicotineId', function (req, res, next) {
        Nicotine.findById(req.params.nicotineId, function (err, nicotine) {
            if (err) {
                res.status(500).send(err);
            }
            else if (nicotine) {
                req.nicotine = nicotine;
                next();
            }
            else {
                res.status(404).send('Not found');
            }
        });
    });

    nicotineRouter.route('/:nicotineId')
        .get(function (req, res) {
            res.json(req.nicotine);
        }).put(function (req, res) {
        req.nicotine.name = req.body.name;
        req.nicotine.save(function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.json(req.nicotine);
            }
        });
        res.json(req.nicotine);
    }).delete(function (req, res) {
        req.nicotine.remove(function (err) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(204).send('Removed');
            }
        });
    });

    return nicotineRouter;
};

module.exports = routes;