const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    belt: {
        type: String,
        enum: ['White', 'Blue', 'Purple', 'Brown', 'Black','white', 'blue', 'purple', 'brown', 'black']
    },
    stripes: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);