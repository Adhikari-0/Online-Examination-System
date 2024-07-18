import { body, validationResult } from 'express-validator';

export const createVerifiySuperUser = [
    body('name', 'Name should not be empty').isLength({ min: 3 }),
    body('userId', 'Enter a valid userId').isLength({ min: 7 }),
    body('password', 'password must be atleast 7 character').isLength({ min: 7 }),
    function (req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(500).send("Please try to use correct credentials")
        }
        next()
    }
];

export const loginVerifiySuperUser = [
    body('userId', 'Enter a valid userId').isLength({ min: 7 }),
    body('password', 'password must be atleast 7 character').isLength({ min: 7 }),
    function (req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(500).send("Please try to use correct credentials")
        }
        next()
    }
];

export const deleteVerifySuperUser = [
    body('userId', 'Enter valid userId').isLength({ min: 7 }),
    function (req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(500).send("Please try to use correct credentials")
        }
        next()
    }
];

