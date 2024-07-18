import mongoose from "mongoose";

const studentUserModelSchema = mongoose.Schema({
    admin_Id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roll_Number: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);
const studentUserModel = mongoose.model('students_Id_Password', studentUserModelSchema);
export default studentUserModel;