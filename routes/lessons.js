var express = require('express');
var router = express.Router();
const lessonsCtrl = require('../controllers/lessions');
var ensureLoggedIn = require('ensureLoggedIn');

//GET /Lessons
router.get('/less', lessonsCtrl.index);