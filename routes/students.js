var express = require('express');
var router = express.Router();
const studentCtrl = require('../controllers/students');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /students/:id/students
router.get('/new', studentCtrl.new);
// POST /students
router.post('/', studentCtrl.create);
// POST /lessons/:id/students
router.post('/lessons/:id/students', ensureLoggedIn, studentCtrl.addToLesson);

module.exports = router;