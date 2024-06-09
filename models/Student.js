const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: True
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Student', studentSchema);