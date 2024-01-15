const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    curriculum: {type: String, required: true},
    rounds: {type: Number, required: true},
    timerounds: {type: Number, required: true},
    students: {type: String, required: true},
    belt: {type: String, },
    date: {type: Date, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

module.exports = mongoose.model('Lesson', lessonSchema);