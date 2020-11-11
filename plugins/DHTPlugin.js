var resources = require('./../resources/model');
fs = require('fs')


var interval, sensor;
var model = resources.pi.sensors;
var pluginName = 'Temperature & Humidity';
var localParams = {'simulate':false, 'frequency':7000};
    exports.start = function(params){
        localParams = params;
        if (params.simulate){
            simulate();
        }else{
            connectHarware();
        }
    };

    exports.stop = function(){
        if(params.simulate){
            clearInterval(interval);
        }else{
            sensor.unexport();
        }
        console.info('%s plugin stopped', pluginName);
    };

    function connectHarware(){
        var sensorDriver = require('node-dht-sensor');
        var sensor  = {
            initialize:function(){
                return sensorDriver.initialize(22, model.temperature.gpio);
            },
            read:function(){
                var readout = sensorDriver.read();
                model.temperature.value = parseFloat(readout.temperature.toFixed(2));
                model.humidity.value = parseFloat(readout.humidity.toFixed(2));
                fs.appendFile('log.txt', model.temperature.value + '\n', encoding='utf-8', function(err){
                    if (err) throw err;
                });
                showValue();
                setTimeout(function(){
                    sensor.read();
                }, localParams.frequency);
            }
        };
        if (sensor.initialize()){
            console.info('Hardware %s is started',pluginName);
            sensor.read();
        }else{
            console.warn("Failed to initaliaze");
        }
    };

    function simulate(){
        interval = setInterval(function(){
            showValue();
        }, localParams.frequency);
        
    };

    function showValue(){
        console.info('Temperature:%s C, humidity %s \%', 
    model.temperature.value, model.humidity.value);
    };