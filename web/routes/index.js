var express = require('express');
var path = require("path");
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen Interfaces' });
});
router.use("/geojson", express.static(path.join(__dirname, "web/geojson")));

module.exports = router;
