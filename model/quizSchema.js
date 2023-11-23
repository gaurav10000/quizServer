import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    quizId: {
        type: String,
        ref: 'Quiz'
    },
    questions: [
        {
            question: String,
            options: [
                {
                    option: String,
                    isCorrect: Boolean
                }
            ]
        }
    ]
})

export default mongoose.model('quiz', quizSchema);