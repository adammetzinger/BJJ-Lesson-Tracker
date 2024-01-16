const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    curriculum: {type: String, required: true},
    rounds: {type: Number, required: true},
    timerounds: {type: Number, required: true},
    students: [{
        type: String,
        ref: 'Student'
    }],
    date: {type: Date, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})

module.exports = mongoose.model('Lesson', lessonSchema);