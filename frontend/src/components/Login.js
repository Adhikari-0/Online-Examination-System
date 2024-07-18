import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/Login.css';

const Login = () => {
    const [adminUser, setAdminUser] = useState({ instituteIdNo: "", password: "" });
    const [studentUser, setStudentUser] = useState({ studentId: "", password: "" });

    let navigate = useNavigate();

    const handleSubmitAdminUser = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/admin/adminlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ instituteIdNo: adminUser.instituteIdNo, password: adminUser.password })
        });
        const json = await response.json()
        console.log(json);

        if(json.success){
            navigate("/home");
            alert("Access Guaranree");
        } else{
            alert("Access Denied");
        }
    }

    const handleSubmitStudentUser = async (e) => {
        e.preventDefault();
        console.log('you have clicked');

        const response = await fetch("http://localhost:5000/student/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ studentId: studentUser.studentId, password: studentUser.password })
        });
        const json = await response.json()
        console.log(json);
    }

    const onChangeAdminUser = (e) => {

        setAdminUser({ ...adminUser, [e.target.name]: e.target.value })

    }

    const onChangeStudentUser = (e) => {
        setStudentUser({ ...studentUser, [e.target.name]: e.target.value })

    }
    return (
        <div className='login-page-container'>
            <h1>University Or College Name</h1>
            <div className='login-container'>
                <div className='login-screen'>
                    <div className='login-loginbox'>
                        <div className='login-loginboxA'>
                            <p>Login as Admin</p>
                        </div>
                        <div className='login-loginboxB'>
                            <div className='login-loginboxBC'>
                                <input type='text' placeholder='User Id' value={adminUser.instituteIdNo} onChange={onChangeAdminUser} name="instituteIdNo" />
                            </div>
                            <div className='login-loginboxBC'>
                                <input type='text' placeholder='Password' value={adminUser.password} onChange={onChangeAdminUser} name="password" />
                            </div>
                            <div className='login-loginboxBC'>
                                <button onClick={handleSubmitAdminUser} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='login-screen'>
                    <div className='login-loginbox'>
                        <div className='login-loginboxA'>
                            <p>Login as Student</p>
                        </div>
                        <div className='login-loginboxB'>
                            <div className='login-loginboxBC'>
                                <input type='text' placeholder='User Id' value={studentUser.studentId} onChange={onChangeStudentUser} name="studentId" />
                            </div>
                            <div className='login-loginboxBC'>
                                <input type='text' placeholder='Password' value={studentUser.password} onChange={onChangeStudentUser} name="password" />
                            </div>
                            <div className='login-loginboxBC'>
                                <button onClick={handleSubmitStudentUser}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;