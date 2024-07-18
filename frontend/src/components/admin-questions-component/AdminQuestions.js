import React, {useState} from 'react'
import '../admin-questions-component/AdminQuestions.css'
import squareLeft from '../admin-student-component/solid-arrow-left.png';
import squareRight from '../admin-student-component/solid-arrow-right.png'
import AdminAddQuestion from './AdminAddQuestion';

const AdminQuestions = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <AdminAddQuestion closeModal={setOpenModal} />}
      <div className='admin-questions'>
        <div className='admin-questions-select'>
          <div className='admin-questions-select-header'>List Of Questions</div>
          <div className='admin-questions-select-option'>
            <input placeholder='Department' />
            <input placeholder='Batch' />
            <input placeholder='Semester' />
          </div>
          <div className='admin-questions-select-count'>
            <div>1-50 of 1000</div>
            <div className='admin-questions-select-count-image'>
              <img src={squareLeft} alt=''/>
              <img src={squareRight} alt='' />
            </div>
            <button onClick={()=>{setOpenModal(true)}} > Add Question</button>
        </div>
      </div>
      <div className='admin-questions-list'>
        <table>
          <tbody>
            <tr>
              <td>1</td>
              <td>This cell contains a list
                <ul>
                  <li>apples</li>
                  <li>bananas</li>
                  <li>pineapples</li>
                </ul>
              </td>
              <td>View</td>
              <td>delete</td>
            </tr>
            <tr>
              <td>1</td>
              <td>This cell contains a list
                <ul>
                  <li>apples</li>
                  <li>bananas</li>
                  <li>pineapples</li>
                </ul>
              </td>
              <td>View</td>
              <td>delete</td>
            </tr>
            <tr>
              <td>1</td>
              <td>This cell contains a list
                <ul>
                  <li>apples</li>
                  <li>bananas</li>
                  <li>pineapples</li>
                </ul>
              </td>
              <td>View</td>
              <td>delete</td>
            </tr>
            <tr>
              <td>1</td>
              <td>This cell contains a list
                <ul>
                  <li>apples</li>
                  <li>bananas</li>
                  <li>pineapples</li>
                </ul>
              </td>
              <td>View</td>
              <td>delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default AdminQuestions;