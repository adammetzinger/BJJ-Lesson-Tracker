const Lesson = require('../models/lesson');

module.export = {
    index,
};

async function index(req, res) {
    const lessons = await Lesson.find({});
    res.render('lessons/index', { title: 'All Lessions', lessons } );
};