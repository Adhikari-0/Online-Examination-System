import dotenv from "dotenv";
import adminUserModel from "../../model/super-model/admin-user-model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dotenv.config();

const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN;

export const loginAdminUser = async (req, res) => {
    let success = false;
    const { instituteIdNo, password } = req.body;
    try {
        if (!instituteIdNo && !password) {
            return res.status(400).json({ error: "Please try to use correct credentials" })
        }
        let user = await adminUserModel.findOne({adminId: instituteIdNo})
        if(!user){
            return res.status(400).json({ error: "Please try to use correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to use correct credentials" })
        }
        const data = {
            user: {
                instituteIdNo: user.adminId
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET_ADMIN);
        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}