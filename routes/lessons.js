var express = require('express');
var router = express.Router();
const lessonCtrl = require('../controllers/lessons');
var ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /Lessons
router.get('/', lessonCtrl.index);
// GET /lessons
router.get('/new', lessonCtrl.new);
//POST /lessons
router.post('/', lessonCtrl.create);
// Get /lessons
router.get('/show', lessonCtrl.show);
// DELETE /lessons/:id
router.delete('/:id', ensureLoggedIn, lessonCtrl.delete);

module.exports = router;