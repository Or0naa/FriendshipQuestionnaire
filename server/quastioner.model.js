const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    falseAnswer: {
        type: String,
        required: true
    },
    halfFalsy: {
        type: String
    },
    halfTrue: {
        type: String
    },
    trueAnswer: {
        type: String,
        required: true
    }
});

const questionerSchema = new mongoose.Schema({
    questions: [questionSchema],
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

questionerSchema.index({
    name: "text"
});

module.exports = mongoose.models.Questioner || mongoose.model('Questioner', questionerSchema);