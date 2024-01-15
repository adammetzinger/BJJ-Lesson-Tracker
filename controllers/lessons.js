const lessons = require('../models/lessons');
const Lesson = require('../models/lessons');


module.exports = {
    index,
    show,
    new: newLesson,
    create,
    delete: deleteLesson,
};

async function index(req, res) {
    const lessons = await Lesson.find({});
    res.render('lessons/index', { title: 'All Lessons', lessons } );
};

async function show(req, res) {
    const lesson = await Lesson.find({});
    res.render('lessons/show', { title: 'All Lesson Details', lesson })
}

function newLesson(req, res) {
    res.render('lessons/new', { title: 'New Lesson', errorMsg: '' });
}

async function create(req, res) {
    try{
        const lesson = await Lesson.create(req.body);
        res.redirect(`/lessons/${lesson._id}`);
    } catch (err) {
        console.log(err);
        res.render('lessons/new', { errorMsg: err.message });
    }
}

async function deleteLesson() {
    const lesson = await Lesson.findOne({ 'lessons._id': req.params.id, 'lesson.user': req.use._id });
    if (!lesson) return res.redirect('/lessons');
    lesson.remove(req.params.id);
    await lesson.save();
    res.redirect('lessons/show');
}
