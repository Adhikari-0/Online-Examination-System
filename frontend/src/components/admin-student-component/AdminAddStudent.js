import React from 'react'
import '../admin-student-component/AdminAddStudent.css'

const AdminAddStudent = () => {
    return (
        <div className='add-student'>
            <div className='add-student-heading'>Add New Student</div>
            <div className='add-student-profile'>
                <div className='add-student-profile-image'>
                    <img src='' alt='' />
                </div>
                <div className='add-student-profile-detail'>
                    <div className='add-student-profile-detail-first-row'>
                        <input placeholder='Full name' />
                        <input placeholder='Roll No' />
                        <input placeholder='Department Name' />
                        <input placeholder='D-Short Name' />
                    </div>
                    <div className='add-student-profile-detail-second-row'>
                        <input placeholder='Batch' />
                        <input placeholder='Semester' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddStudent