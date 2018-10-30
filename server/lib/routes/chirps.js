"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _chirpstore = _interopRequireDefault(require("../chirpstore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get('/:id?', function (req, res) {
  var id = req.params.id;

  if (id) {
    res.send(_chirpstore.default.GetChirp(id));
  } else {
    res.send(_chirpstore.default.GetChirps());
  }
});
router.post('/', function (req, res) {
  var chirp = req.body;

  _chirpstore.default.CreateChirp(chirp);

  res.send('Chirp added!');
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var editedChirp = req.body;

  _chirpstore.default.UpdateChirp(id, editedChirp);

  res.send('Chirp edited successfully!');
});
router.delete('/:id', function (req, res) {
  var id = req.params.id;

  _chirpstore.default.DeleteChirp(id);

  res.send('Chirp deleted!');
});
var _default = _express.Router;
exports.default = _default;