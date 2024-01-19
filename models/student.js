const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    belt: {
        type: String,
        enum: ['White', 'Blue', 'Purple', 'Brown', 'Black','white', 'blue', 'purple', 'brown', 'black'],
        required: true,
    },
    stripes: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);