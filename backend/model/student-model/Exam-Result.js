import mongoose from 'mongoose';

const ExamQuestionsAnswerModelSchema = mongoose.Schema({
    admin_Id: {
        type: Number,
        required: true
    },
    q_number: {
        type: Number,
        required: true,
        unique: true
    },
    question: {
        type: String,
        required: true
    },
    ans_1: {
        type: String,
        required: true
    },
    ans_2: {
        type: String,
        required: true
    },
    ans_3: {
        type: String,
        required: true
    },
    ans_4: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);
const adminQuestionsModel = mongoose.model('adminquestions', adminQuestionsModelSchema);
export default adminQuestionsModel;