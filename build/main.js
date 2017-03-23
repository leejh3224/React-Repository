'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    port = 3000;

app.use(_bodyParser2.default.json());

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));

app.get('/scrape', function (req, res) {

  var url = 'https://namu.wiki/w/%EC%86%A1%EC%A0%95%EC%97%AD(%EB%B6%80%EC%82%B0)',
      encoded = encodeURI(url),
      decoded = decodeURI(encoded),
      json = { title: '' },
      title,
      options = {
    url: decoded,
    encoding: null
  },
      ent;

  (0, _request2.default)(decoded, function (error, response, body) {
    if (!error) {
      console.log('request is on service..');
      var $ = _cheerio2.default.load(body);

      title = $('.wiki-inner-content').children('p').text();

      ent = encodeURI(title);

      title = decodeURI(ent);

      return res.send(title);
    }
  });
});

app.listen(port, function () {
  console.log('express is listening on', port);
});