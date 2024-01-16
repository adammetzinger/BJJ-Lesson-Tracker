const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    belt: {
        type: String,
        enum: ['White', 'Blue', 'Purple', 'Brown', 'Black']
    },
    stripes: {
        type: Number,
        enum: [1, 2, 3, 4],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);