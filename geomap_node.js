const jsdom = require("jsdom");             //make node work like your js browser compiler
const { JSDOM } = jsdom;

console.log("hello world");
var http = require('http');     
var d3 = require('d3');                     //make d3 available

var server = http.createServer(function(request, response) {  //send initial write request to server
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello!</h1><p>You asked for <code>" +
                 request.url + "</code></p>");
  response.end();
});   //try http://localhost:8000/hello



/*var map = d3.geomap.choropleth()
    .geofile('/d3-geomap/topojson/countries/USA.json')
    .projection(d3.geo.albersUsa)
    .column('2012')
    .unitId('fips')
    .scale(1000)
    .legend(true);

d3.csv('/data/venture-capital.csv', function(error, data) {
    d3.select('#map')
        .datum(data)
        .call(map.draw, map);
      });*/

server.listen(8000);