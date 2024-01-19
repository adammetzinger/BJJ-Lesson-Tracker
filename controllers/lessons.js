const Lesson = require('../models/lessons');
const Student = require('../models/student');

module.exports = {
    index,
    new: newLesson,
    create,
    delete: deleteLesson,
    edit,
    update,
};

async function index(req, res) {
    const lessons = await Lesson.find({}).populate('students');
    const students = await Student.find({ _id: { $nin: lessons.students } }).sort('name');
    res.render('lessons/index', { title: 'All Lessons', lessons, students } );
};

function newLesson(req, res) {
    res.render('lessons/new', { title: 'New Lesson', errorMsg: '' });
}

async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const lesson = await Lesson.create(req.body);
        res.redirect('/lessons');
    } catch (err) {
        console.log(err);
        res.render('lessons/new', { errorMsg: err.message });
    }
}

async function deleteLesson(req, res) {
    const lesson = await Lesson.findOneAndDelete(req.params.id);
    res.redirect('/lessons');
}

async function edit(req, res) {
    const lesson = await Lesson.findOne({_id: req.params.id, user: req.user._id});
    if (!lesson) return res.redirect('/lessons');
    res.render('lessons/edit', { title: 'Edit This Lesson', lesson });

}

async function update(req, res) {
    try{
        const updateLesson = await Lesson.findOneAndUpdate(
            {_id: req.params.id, user: req.user._id},
            req.body,
            {new: true},
        );
    } catch (e) {
        console.log(e.message);
        return res.redirect('/lessons');
    }
    return res.redirect('/lessons');
}