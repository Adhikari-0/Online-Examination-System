import React from 'react'
import '../homecomponents/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='home-navba'>
                <a className='active' href="/">Home</a>
                <a href="/viewstudents">View Student</a>
                <a href="/addstudent">Add Student</a>
                <a href="/viewquestions">View Questions</a>
                <a href="/about">About</a>
            </div>
        </div>
    )
}

export default Navbar