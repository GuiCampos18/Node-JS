var http = require('http');
var dia = require('./biblioteca');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>Brasil 0 x 0 Suíça</h2> \n');
    res.write('<p style=color:blue>'+Date().substring(16, 24)+'<br>');
    res.write(dia.diaDaSemana()+'</p><br>');
    res.end('Bom dia!');

}).listen(3000);
