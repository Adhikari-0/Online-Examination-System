import { body, validationResult } from 'express-validator';

export const createVerifyAdminSuperUser = [
    body('name', 'Name should not be empty').isLength({ min: 3 }),
    body('instituteIdNo', 'Enter valid user id').isNumeric({ min: 7 }),
    body('password', 'Password must be at leat 8 character').isLength({ min: 7 }),
    function (req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(500).send("please try to use correct credentials");
        }
        next();
    }
];

export const updateVerifyAdminSuperUser = [
    body('instituteIdNo', 'Enter valid user id').isNumeric({ min: 7 }),
    function (req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(500).send("please try to use correct credentials");
        }
        next();
    }
];
export const deleteVerifyAdminSuperUser = [
    body('instituteIdNo', 'Enter valid user id').isNumeric({ min: 7 }),
    function (req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(500).send("please try to use correct credentials");
        }
        next();
    }
];