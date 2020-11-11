

var httpServer = require('./servers/http'),
    resources = require('./resources/model');

var DHTplugin = require('./plugins/DHTPlugin');
DHTplugin.start({'simulate':false, 'frequency':3000});

var server = httpServer.listen(resources.pi.port, function(){
    console.info('Your WoT server is running at http://localhost:%s', resources.pi.port);
});