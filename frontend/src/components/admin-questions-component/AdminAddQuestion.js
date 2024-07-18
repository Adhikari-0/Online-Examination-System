import React from 'react'
import '../admin-questions-component/AdminAddQuestion.css'

const AdminAddQuestion = ({closeModal}) => {
    return (
        <div id="myModal" className='add-question-modal'>
            <div className='add-question-modal-content'>
                <div className='add-question-modal-header'>
                    <span className='close' onClick={() => closeModal(false)}>&times;</span>
                    <h2>Add Question</h2>
                </div>
                <div className='add-question-modal-body'>
                    <input placeholder='Write Question here ?'/>
                    <input placeholder='Answer 1'/>
                    <input placeholder='Answer 2'/>
                    <input placeholder='Answer 3'/>
                    <input placeholder='Answer 4'/>
                </div>
                <div className='add-question-modal-footer'>
                    <button>Add</button>
                    <button onClick={() => closeModal(false)}>Cancle</button>
                </div>
            </div>

        </div>
    )
}

export default AdminAddQuestion