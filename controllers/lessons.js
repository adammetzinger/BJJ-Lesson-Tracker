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
    const lessons = await Lesson.find({});
    res.render('lessons/show', { title: 'All Lesson Details', lessons })
}

function newLesson(req, res) {
    res.render('lessons/new', { title: 'New Lesson', errorMsg: '' });
}

async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const lesson = await Lesson.create(req.body);
        res.redirect(`/lessons`);
    } catch (err) {
        console.log(err);
        res.render('lessons/new', { errorMsg: err.message });
    }
}

async function deleteLesson(req, res) {
    const lesson = await Lesson.findOne({ 'lessons._id': req.params.id, 'lesson.user': req.use._id });
    if (!lesson) return res.redirect('/lessons/show');
    lesson.remove(req.params.id);
    await lesson.save();
    res.redirect('/lessons/show');
}
