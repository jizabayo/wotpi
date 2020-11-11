var express = require('express'),
    router = express.Router(),//router to define the path to our resources
    resources = require('./../resources/model');
    router.route('/').get(function(req, res, next){
        res.send(resources.pi.actuators);
    });
    router.route('/led').get(function(req, res, next){
        res.send(resources.pi.actuators.led);
    });

    module.exports = router;