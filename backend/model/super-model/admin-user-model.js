import mongoose from 'mongoose';

const adminUserModelSchema = mongoose.Schema({
    superAdminId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    adminId: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    } 
})
const adminUserModel = mongoose.model('adminusers', adminUserModelSchema);
export default adminUserModel;