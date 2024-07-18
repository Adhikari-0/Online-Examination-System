import express from 'express';
import { fetchuser, fetchuserAdmin, fetchuserStudent } from '../middleware/fetchuser.js';
//Super user
import { createVerifiySuperUser, loginVerifiySuperUser, deleteVerifySuperUser } from '../controller/super-controller/super-user-middleware.js';
import { createVerifyAdminSuperUser, deleteVerifyAdminSuperUser, updateVerifyAdminSuperUser } from '../controller/super-controller/super-admin-middleware.js';
import { createSuperUser, loginSuperUser, getSuperUser, deleteSuperUser } from '../controller/super-controller/super-user-controller.js';
//Operation on Admin user from Super user
import { createAdminUser, deleteAdminUser, getAdminUser, updateAdminUser } from '../controller/super-controller/super-admin-controller.js';
//Admin user
import { loginVerifiyAdminUser } from '../controller/admin-controller/admin-user-middleware.js';
import { loginAdminUser } from '../controller/admin-controller/admin-profile-controller.js';
//creating student user by Admin
import { createVerifyStudentAdminUser, deleteVerifyStudentAdminUser, updateVerifyStudentAdminUser } from '../controller/admin-controller/admin-student-middleware.js';
import { createStudentUser, deleteStudentUser, getStudentUser, updateStudentUser } from '../controller/admin-controller/admin-student-controller.js';
//Admin user questions
import { addQuestion, deleteQuestion, getQuestions, updateQuestion } from '../controller/admin-controller/admin-questions-controller.js';
import { addQuoraVeriryAdminUser, deleteQuoraVeriryAdminUser, updateQuoraVeriryAdminUser } from '../controller/admin-controller/admin-questions-middleware.js';
//Student
import { loginVerifiyStudentUser, verifySaveQuestionAnswerStudentUser } from '../controller/student-controller/student-user-middleware.js';
import { loginStudentUser, getQuestionsStudent, saveQuestionAnswerStudentUser } from '../controller/student-controller/student-user-controller.js';

const route = express.Router();

//Super admin routes
route.post('/superadmin/createsuperuser', createVerifiySuperUser, createSuperUser);
route.post('/superadmin/loginsuperuser', loginVerifiySuperUser, loginSuperUser);
route.get('/superadmin/getsuperuser', getSuperUser);
route.delete('/superadmin/deletesuperuser',deleteVerifySuperUser, deleteSuperUser);

//Operation on admin from Super user
route.post('/superadmin/createadminuser', createVerifyAdminSuperUser, fetchuser, createAdminUser);
route.get('/superadmin/getadminuser', fetchuser, getAdminUser);
route.put('/superadmin/updateadminuser',updateVerifyAdminSuperUser, fetchuser, updateAdminUser);
route.delete('/superadmin/deleteadminuser',deleteVerifyAdminSuperUser , fetchuser, deleteAdminUser);

//Admin routes
route.post('/admin/adminlogin',loginVerifiyAdminUser, loginAdminUser);

//Operation on student by admin
route.post('/admin/createstudent',createVerifyStudentAdminUser, fetchuserAdmin, createStudentUser);
route.get('/admin/getstudent', fetchuserAdmin, getStudentUser);
route.put('/admin/editstudent', updateVerifyStudentAdminUser, fetchuserAdmin, updateStudentUser);
route.delete('/admin/deletestudent', deleteVerifyStudentAdminUser, fetchuserAdmin, deleteStudentUser);

// Admin Questiona and answer
route.post('/admin/addquestion',addQuoraVeriryAdminUser, fetchuserAdmin, addQuestion);
route.get('/admin/getquestion', fetchuserAdmin, getQuestions);
route.put('/admin/updatequestion',updateQuoraVeriryAdminUser, fetchuserAdmin, updateQuestion);
route.delete('/admin/deletequestion',deleteQuoraVeriryAdminUser, fetchuserAdmin , deleteQuestion);

//Student routes
route.post('/student/login', loginVerifiyStudentUser, loginStudentUser);
route.get('/student/question', fetchuserStudent, getQuestionsStudent);
route.post('/student/Answersave', verifySaveQuestionAnswerStudentUser, fetchuserStudent, saveQuestionAnswerStudentUser);

export default route;