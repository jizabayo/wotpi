

var express = require('express'),
    actuatorRoutes = require('./../routes/actuator'),
    sensorRoutes = require('./../routes/sensor'),
    resources = require('./../resources/model'),
    cors = require('cors');

var app = express();

var engines = require('consolidate');

app.set('views', 'views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.use(cors());
app.use('/pi/actuators', actuatorRoutes);
app.use('/pi/sensors', sensorRoutes);
app.use('/pi', function(req, res){
    res.render('vis.html');
});
// app.get('pi', function(req, res){
//     res.render('vis.html');
// });
module.exports = app;