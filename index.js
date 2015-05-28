var DB_NAME   = 'qadb',
    PORT      = 9000,
    HOST_NAME = 'localhost';

var ws     = require('./WebServer'),
    jade   = require('jade'),
    cradle = require('cradle'),
    server = ws.WebServer({ 'port': PORT, 'hostname': HOST_NAME }),
    db     = new(cradle.Connection)().database(DB_NAME);

server.AddRoute("GET", /^\/$/, function (params) {
    var locals, result, that = this;

    db.view('stats/ProgrammingLanguageCount', {group: true, reduce: true}, function (err, res) {
        locals = {
            PageTitle: 'Language Statistics on StackOverflow',
            Stats: res
        };

        result = that.view.Render('./temp.jade', locals);

        that.response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': result.length });
        that.response.write(result);
        that.response.end();
    });
});

server.Start();
