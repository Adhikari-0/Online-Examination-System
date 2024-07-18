import dotenv from "dotenv";
import studentUserModel from "../../model/admin-model/Student-User-model.js";
import bcrypt from 'bcryptjs';
dotenv.config();

//creating student user
export const createStudentUser = async (req, res) => {
    let success = false
    const { name, rollNumber, password } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ success, error: "Name should not be empty" });
        }
        if (!rollNumber) {
            return res.status(400).json({ success, error: "Roll number should not be empty" });
        }
        if (!password) {
            return res.status(400).json({ success, error: "Password should not be empty" });
        }
        let exist = await studentUserModel.findOne({ roll_Number: rollNumber });
        if (exist) {
            return res.status(400).json({ success, error: "Sorry a user with this Roll Number already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        exist = await studentUserModel.create({
            admin_Id: req.user.instituteIdNo,
            name: name,
            roll_Number: rollNumber,
            password: secPass,
        });
        const data = {
            user: {
                admin: exist.admin_Id,
                name: exist.name,
                rollNumber: exist.roll_Number
            }
        }

        success = true;
        res.json({ success, data });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
}

export const getStudentUser = async (req, res) => {
    let success = false;
    try {
        const studentList = await studentUserModel.find({}).select("-password").select("-__v").select("-_id");
        success = true;
        res.json({ success, studentList });
    } catch (error) {
        res.status(500).json("Internal server error");
    }

}

export const updateStudentUser = async (req, res) => {
    let success = false;
    const studentId = req.body.rollNumber;
    const name = req.body.name;
    const password = req.body.password;
    try {
        if (!studentId) {
            return res.status(400).json({ success, error: "please enter the roll number" });
        }
        const newData = {};

        if (name) { newData.name = name };
        if (password) {
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);
            newData.password = secPass
        };
        let exist = await studentUserModel.findOne({ roll_Number: studentId });
        if (!exist) {
            return res.status(400).json({ success, error: "Roll Number doesnot exist" });
        }
        if (exist.admin_Id !== req.user.instituteIdNo) {
            return res.status(400).json({ success, error: `Sorry ${exist.admin_Id} can only update` });
        }
        exist = await studentUserModel.findOneAndUpdate({ roll_Number: studentId }, { $set: newData }, { new: true }).select("-password");
        const data = {
            instituteIdNo: exist.admin_Id,
            name: exist.name,
            rollNumber: exist.roll_Number,
            created_date: exist.createdAt,
            update_date: exist.updatedAt
        }
        success = true;
        res.json({ success, data });

    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

export const deleteStudentUser = async (req, res) => {
    let success = false;
    const studentId = req.body.rollNumber;
    try {
        if (!studentId) {
            return res.status(400).json({ success, error: "please enter the roll number" });
        }
        let exist = await studentUserModel.findOne({ roll_Number: studentId })
        if (!exist) {
            return res.status(400).json({ success, error: "Roll Number doesnot exist" });
        }
        if (exist.admin_Id !== req.user.instituteIdNo) {
            return res.status(400).json({ success, error: `Sorry ${exist.admin_Id} can only delete` });
        }
        exist = await studentUserModel.findOneAndDelete({ roll_Number: studentId });
        const data = {
            user: {
                rollNumber: exist.roll_Number,
                name: exist.name
            }
        }
        success = true;
        res.json({ success, data });

    } catch (error) {
        res.status(500).json("Internal server error");
    }
};