import { body, validationResult } from 'express-validator';

export const createVerifyStudentAdminUser = [
    body('name', 'Name must be given').isString({min: 3}),
    body('rollNumber', 'Roll Number must be given').isNumeric({min: 7}),
    body('password', 'Password must be given').isString({min: 7}),
    function(req, res, next) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).send("Please create the student user clearly");
        }
        next();
    }
 ];

 export const updateVerifyStudentAdminUser = [
    body('rollNumber', 'Roll Number must be given').isNumeric({min: 7}),
    function(req, res, next) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).send("Please create the student user clearly");
        }
        next();
    }
 ];

 export const deleteVerifyStudentAdminUser = [
    body('rollNumber', 'Roll Number must be given').isNumeric({min: 7}),
    function(req, res, next) {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(500).send("Please create the student user clearly");
        }
        next();
    }
 ]