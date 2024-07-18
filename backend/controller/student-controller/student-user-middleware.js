import { body, validationResult } from 'express-validator';

export const loginVerifiyStudentUser =  [
    body('studentId', 'Enter a valid studentId').isNumeric().isLength({min: 7}),
    body('password', 'password must be atleast 7 character').isString().isLength({min: 7}),
    function(req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(500).send("Please try to use correct credentials")
        }
        next()
    }
 ];

 export const verifySaveQuestionAnswerStudentUser =  [
    body('q_number', 'Questions number must be given').isNumeric().isLength({min: 1}),
    body('question', 'Questions must be provided').isString().isLength({min: 7}),
    body('ans_1', 'Answer must be written').isString().isLength({min: 1}),
    body('ans_2', 'Answer must be written').isString().isLength({min: 1}),
    body('ans_3', 'Answer must be written').isString().isLength({min: 1}),
    body('ans_4', 'Answer must be written').isString().isLength({min: 1}),
    function(req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(500).send("Please input the requirement properly");
        }
        next();
    }
 ];