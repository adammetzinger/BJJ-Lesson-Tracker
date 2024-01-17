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
// DELETE /lessons/:id
router.delete('/:id', ensureLoggedIn, lessonCtrl.delete);
// GET /lessons/:id
router.get('/:id/edit', lessonCtrl.edit);
// PUT /lesson/:id
router.put('/:id', lessonCtrl.update);

module.exports = router;