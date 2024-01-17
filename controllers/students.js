const Student = require('../models/student');

module.exports = {
    new: newStudent,
    create,
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
