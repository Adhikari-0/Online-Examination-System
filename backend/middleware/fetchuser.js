import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN;
const JWT_SECRET_STUDENT = process.env.JWT_SECRET_STUDENT;

export const fetchuser = (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Please authenticate using valid token'})
    } 
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        console.log(data.user)
        next();
    } catch (error) {
        res.status(401).send({error: 'Please authenticate using valid token'})
    }
}
export const fetchuserAdmin = (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Please authenticate using valid token'})
    } 
    try{
        const data = jwt.verify(token, JWT_SECRET_ADMIN);
        req.user = data.user;
        console.log(data.user);
        next();
    } catch (error) {
        res.status(401).send({error: 'Please authenticate using valid token'})
    }
}

export const fetchuserStudent = (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Please authenticate using valid token'})
    } 
    try{
        const data = jwt.verify(token, JWT_SECRET_STUDENT);
        req.user = data.user;
        console.log(data.user);
        next();
    } catch (error) {
        res.status(401).send({error: 'Please authenticate using valid token'})
    }
}