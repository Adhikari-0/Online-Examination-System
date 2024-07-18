import React from 'react'
import '../admin-student-component/AdminStudent.css'
import squareLeft from '../admin-student-component/solid-arrow-left.png';
import squareRight from '../admin-student-component/solid-arrow-right.png'

const AdminStudent = () => {
    return (
        <div className='admin-student'>
            <div className='admin-student-header'>
                <div className='admin-student-header-name'>
                    Student List
                </div>
                <div className='admin-student-header-count'>
                    <div>1-50 of 1000</div>
                    <div className='admin-student-header-count-image'>
                        <img src={squareLeft} alt=''/>
                        <img src={squareRight} alt='' />
                    </div>
                </div>
            </div>
            <div className='admin-students-list'>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Roll_Number</th>
                        <th>Department</th>
                        <th>Batch</th>
                        <th>Semester</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Krishna Nand Yadav</td>
                        <td>11172640</td>
                        <td>CSE</td>
                        <td>2020</td>
                        <td>7</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Krishna Nand Yadav</td>
                        <td>11172640</td>
                        <td>CSE</td>
                        <td>2020</td>
                        <td>7</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Krishna Nand Yadav</td>
                        <td>11172640</td>
                        <td>CSE</td>
                        <td>2020</td>
                        <td>7</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Krishna Nand Yadav</td>
                        <td>11172640</td>
                        <td>CSE</td>
                        <td>2020</td>
                        <td>7</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Krishna Nand Yadav</td>
                        <td>11172640</td>
                        <td>CSE</td>
                        <td>2020</td>
                        <td>7</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default AdminStudent