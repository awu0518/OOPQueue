const mongoose = require("mongoose")

const TASchema = new mongoose.Schema({
    username: {
        type: String,
        required: True,
        unique: True
    },
    password: {
        type: String,
        required: True
    }
});

module.exports = mongoose.model('TA', TAschema);