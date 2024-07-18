import adminQuestionsModel from "../../model/admin-model/admin-questions-model.js";

export const addQuestion = async (req, res) => {
    let success = false;
    const { q_number, question, ans_1, ans_2, ans_3, ans_4 } = req.body;
    try {
        if (!q_number) {
            return res.status(400).json({ success, error: "Questions number must be given" });
        }
        if (!question) {
            return res.status(400).json({ success, error: "Questions must be given" });
        }
        if (!ans_1) {
            return res.status(400).json({ success, error: "Answer must be given 1" });
        }
        if (!ans_2) {
            return res.status(400).json({ success, error: "Answer must be given 2" });
        }
        if (!ans_3) {
            return res.status(400).json({ success, error: "Answer must be given 3" });
        }
        if (!ans_4) {
            return res.status(400).json({ success, error: "Answer must be given 4" });
        }
        let existQNo = await adminQuestionsModel.findOne({ q_number: q_number });
        if (existQNo) {
            return res.status(400).json({ success, error: "Questions number is already exists" });
        }
        existQNo = new adminQuestionsModel({
            admin_Id: req.user.instituteIdNo, q_number, question, ans_1, ans_2, ans_3, ans_4
        });
        existQNo = await existQNo.save();
        const data = {
            user: {
                admin_Id: existQNo.admin_Id,
                q_number: existQNo.q_number,
                question: existQNo.question,
                ans_1: existQNo.ans_1,
                ans_2: existQNo.ans_2,
                ans_3: existQNo.ans_3,
                ans_4: existQNo.ans_4,
                created_date: existQNo.createdAt,
                updated_date: existQNo.updatedAt

            }
        }
        success = true;
        res.json({ success, data });

    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const getQuestions = async (req, res) => {
    let success = false;
    try {
        const questions = await adminQuestionsModel.find({}).select("-_id").select("-__v");
        success = true;
        res.json(questions);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const updateQuestion = async (req, res) => {
    let success = false;
    const { q_number, question, ans_1, ans_2, ans_3, ans_4 } = req.body;
    try {
        console.log("0");
        if (!q_number) {
            return res.status(400).json({ success, error: "please enter the question number" });
            console.log("1");
        }
        const newData = {};

        if (question) { newData.question = question };
        if (ans_1) { newData.ans_1 = ans_1 };
        if (ans_2) { newData.ans_2 = ans_2 };
        if (ans_3) { newData.ans_3 = ans_3 };
        if (ans_4) { newData.ans_4 = ans_4 };

        let exist = await adminQuestionsModel.findOne({ q_number: q_number });
        if (!exist) {
            return res.status(400).json({ success, error: "Question Number doesnot exist" });
            console.log("2");
        }
        if (exist.admin_Id !== req.user.instituteIdNo) {
            return res.status(400).json({ success, error: `Sorry ${exist.admin_Id} can only update` });
            console.log("3");
        }
        exist = await adminQuestionsModel.findOneAndUpdate({ q_number: q_number }, { $set: newData }, { new: true });
        const data = {
            user: {
                admin_Id: exist.admin_Id,
                q_number: exist.q_number,
                question: exist.question,
                ans_1: exist.ans_1,
                ans_2: exist.ans_2,
                ans_3: exist.ans_3,
                ans_4: exist.ans_4,
                created_date: exist.createdAt,
                updated_date: exist.updatedAt
            }
        }
        success = true;
        res.json({ success, data });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}

export const deleteQuestion = async (req, res) => {
    const question_number = req.body.q_number;
    let success = false;
    try {
        if (!question_number) {
            return res.status(400).json({ success, error: "Questions number is not given" });
        }
        let exist = await adminQuestionsModel.findOne({ q_number: question_number });
        if (!exist) {
            return res.status(400).json({ success, error: "Questions number is not exist" });
        }
        if (exist.admin_Id !== req.user.instituteIdNo) {
            return res.status(400).json({ success, error: `Sorry ${exist.admin_Id} can only delete` });
        }
        exist = await adminQuestionsModel.findOneAndDelete({ q_number: question_number });
        const data = {
            user: {
                admin_Id: exist.admin_Id,
                q_number: exist.q_number,
                question: exist.question,
                ans_1: exist.ans_1,
                ans_2: exist.ans_2,
                ans_3: exist.ans_3,
                ans_4: exist.ans_4,
                created_date: exist.createdAt,
                updated_date: exist.updatedAt

            }
        }
        success = true;
        res.json({ success, data });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}