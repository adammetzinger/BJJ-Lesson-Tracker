const Student = require('../models/student');
const Lesson = require('../models/lessons');

module.exports = {
    new: newStudent,
    create,
    addToLesson,
}

async function newStudent(req, res) {
    res.render('students/new', { title: 'New Student', errorMsg: '' });
}

async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const student = await Student.create(req.body);
        res.redirect('/students/new');
    } catch (err) {
        console.log(err);
        res.render('students/new', { title: '', errorMsg: err.message });
    }
}

async function addToLesson(req, res) {
    const lesson = await Lesson.findById(req.params.id);
    lesson.students.push(req.body.studentId);
    console.log(lesson.students);
    await lesson.save();
    res.redirect('/lessons')
}
