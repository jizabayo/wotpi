var express = require('express'),
    router = express.Router(),
    resources = require('./../resources/model');
    router.route('/').get(function(req, res, next){
        res.send(resources.pi.sensors);
    });

    router.route('/pir').get(function(req, res, next){
        res.send(resources.pi.sensors.pir);
    });

    router.route('/temperature').get(function(req, res, next){
        res.send(resources.pi.sensors.temperature);
    });

    router.route('/value').get(function(req, res, next){
        res.send(resources.pi.sensors.temperature.value);
    });

    router.route('/humidity').get(function(req, res, next){
        res.send(resources.pi.sensors.humidity);
    });

    router.route('/humidityValue').get(function(req, res, next){
        res.send(resources.pi.sensors.humidity.value);
    });

    module.exports = router;