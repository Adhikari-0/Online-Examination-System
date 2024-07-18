import mongoose  from "mongoose";

const superUserModelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const superUserModel = mongoose.model('superusers', superUserModelSchema);

export default superUserModel;