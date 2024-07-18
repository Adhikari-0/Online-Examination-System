import { body, validationResult } from 'express-validator';

export const loginVerifiyAdminUser =  [
    body('instituteIdNo', 'Enter a valid userId').isNumeric().isLength({min: 7}),
    body('password', 'password must be atleast 7 character').isLength({min: 7}),
    function(req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(500).send("Please try to use correct credentials")
        }
        next()
    }
 ];