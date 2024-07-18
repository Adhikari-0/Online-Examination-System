import dotenv from "dotenv";
import superUserModel from "../../model/super-model/Super-User-model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

//creating super user
export const createSuperUser = async (req, res) => {
    let success = false;
    const { name, userId, password } = req.body;
    try {
        if (!name && !userId) {
            return res.status(400).json({ success, error: "Please enter username and user Id" })
        }
        if (!password) {
            return res.status(400).json({ success, error: "Please enter password" })
        }
        let user = await superUserModel.findOne({ userId: userId });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this user_Id already exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        //creating new user
        user = await superUserModel.create({
            name: name,
            userId: userId,
            password: secPass,
        })
        const data = {
            user_Id: user.userId,
            name: user.name
        }

        success = true;
        res.json({ success, msg: "Super user created successfully", data });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

}

// Login as super user
export const loginSuperUser = async (req, res) => {
    let success = false;
    const { userId, password } = req.body;
    try {
        if (!userId && !password) {
            return res.status(400).json({ error: "Please try to use correct credentials" })
        }
        let user = await superUserModel.findOne({ userId: userId })
        if (!user) {
            return res.status(400).json({ error: "Please try to use correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, error: "Please try to use correct credentials" })
        }
        const data = {
            user: {
                userId: user.userId
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

//deleting super user using userId field
export const deleteSuperUser = async (req, res) => {
    let success = false;
    const userId = req.body.userId;
    try {
        let exist = await superUserModel.findOne({ userId: userId }).select("-password");
        if (!exist) {
            return res.status(400).json({ success, error: "Please try to use correct Super User" })
        }
        console.log(userId)
        exist = await superUserModel.findOneAndDelete({ userId: userId })
        const data = {
            name: exist.name,
            userId: exist.userId
        }
        success = true;
        res.json(data)
    } catch (error) {
        res.status(500).send("Internal server error from delete");
    }
}

//getting all the super user
export const getSuperUser = async (req, res) => {
    try {
        const user = await superUserModel.find().select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

}

