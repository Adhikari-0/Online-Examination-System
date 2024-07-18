import adminUserModel from "../../model/super-model/admin-user-model.js";
import bcrypt from 'bcryptjs';

//creating admin user from super user
export const createAdminUser = async (req, res) => {
    let success = false;
    const { name, instituteIdNo, password } = req.body;
    try {
        if (!instituteIdNo) {
            return res.status(400).json({ error: "Please Fill up the admin user correctly" })
        }
        let user = await adminUserModel.findOne({ adminId: instituteIdNo }).select("-password");
        if (user) {
            return res.status(200).json({ success, msg: 'user already exist' });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        user = await adminUserModel.create({
            superAdminId: req.user.userId,
            name: name,
            adminId: instituteIdNo,
            password: secPass
        });

        const data = {
            user: {
                instituteIdNo: user.adminId,
                name: user.name
            }
        }

        success = true;
        res.json({ success, data });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
}

export const getAdminUser = async (req, res) => {
    let success = false
    try {
        const user = await adminUserModel.find().select("-password").select("-_id").select("-__v");
        success = true;
        res.json({ success, user });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const updateAdminUser = async (req, res) => {
    let success = false
    const { name, instituteIdNo, password } = req.body;
    console.log(req.body);
    try {
        //Create a newData object
        const newData = {};

        if (name) { newData.name = name };
        if (password) {
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);
            newData.password = secPass
        };

        //Find the admin to be updated and update it
        let exist = await adminUserModel.findOne({ adminId: instituteIdNo });
        if (!exist) { return res.status(400).json({ success, msg: 'Admin not Found' }) };

        exist = await adminUserModel.findOneAndUpdate({ adminId: instituteIdNo }, { $set: newData }, { new: true }).select("-password");
        const data = {
            user: {
                instituteIdNo: exist.adminId,
                name: exist.name
            }
        }
        success = true
        res.json({ success, data });

    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const deleteAdminUser = async (req, res) => {
    let success = false;
    const adminId = req.body.instituteIdNo;
    try {
        let exist = await adminUserModel.findOne({ adminId: adminId });
        if (!exist) {
            return res.status(400).json({ success, error: "User Does not Exist" })
        }
        exist = await adminUserModel.findOneAndDelete({ adminId: adminId });
        const data = {
            user : {
                instituteIdNo: exist.adminId,
                name: exist.name
            }
        }
        success = true;
        res.json({ success, data });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}