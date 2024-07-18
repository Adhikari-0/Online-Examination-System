import { body, validationResult } from 'express-validator';

export const addQuoraVeriryAdminUser = [
    body('q_number', 'Questions number must be mension').isNumeric({min: 1}),
    body('question', 'Questions must be retain').isString({min: 5}),
    body('ans_1', 'answer must be given').isString({min: 1}),
    body('ans_2', 'answer must be given').isString({min: 1}),
    body('ans_3', 'answer must be given').isString({min: 1}),
    body('ans_4', 'answer must be given').isString({min: 1}),
    function(req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            //return errors.res;
            console.log("error occures first : "+req);
            console.log("error occures second : "+res);
            return res.status(500).send("Please Write the question properly")
        }
        next()
    }
 ];
 export const updateQuoraVeriryAdminUser = [
    body('q_number', 'Questions number must be Written').isNumeric({min: 1}),
    function(req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(500).send("Please try to use correct credentials from verify")
        }
        next()
    }
 ];

 export const deleteQuoraVeriryAdminUser = [
    body('q_number', 'Questions number must be mension').isNumeric({min: 1}),
    function(req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(500).send("Please try to use correct credentials from verify")
        }
        next()
    }
 ];