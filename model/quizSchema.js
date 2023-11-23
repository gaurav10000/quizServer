import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    quizId: {
        type: String,
        ref: 'Quiz'
    },
    question: {
        type: String,
        required: true,
    },
    opt1: {
        type: String,
        required: true,
    },
    opt2: {
        type: String,
        required: true,
    },
    opt3: {
        type: String,
        required: true,
    },
    opt4: {
        type: String,
        required: true,
    },
    correctOpt: {
        type: String,
        required: true,
    },
})

export default mongoose.model('quiz', quizSchema);