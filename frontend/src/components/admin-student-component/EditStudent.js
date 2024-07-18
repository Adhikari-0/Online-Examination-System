import React from 'react'
import '../admin-student-component/EditStudent.css'

const EditStudent = () => {
  return (
    <div className='editstudent'>
        <div className='editstudent-heading'>Edit Student</div>
        <div className='editstudent-profile'>
                <div className='editstudent-profile-image'>
                    <img src='' alt='' />
                </div>
                <div className='editstudent-profile-detail'>
                    <div className='editstudent-profile-detail-first-row'>
                        <input placeholder='Full name' /><span>edit</span>
                        <input placeholder='Roll No' />
                        <input placeholder='Department Name' />
                        <input placeholder='D-Short Name' />
                    </div>
                    <div className='editstudent-profile-detail-second-row'>
                        <input placeholder='Batch' />
                        <input placeholder='Semester' />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default EditStudent;