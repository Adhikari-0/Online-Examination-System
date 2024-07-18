// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/homecomponents/Home';
import AdminStudent from './components/admin-student-component/AdminStudent';
import Navbar from './components/homecomponents/Navbar';
import AdminAddStudent from './components/admin-student-component/AdminAddStudent';
import AdminQuestions from './components/admin-questions-component/AdminQuestions';
import EditStudent from './components/admin-student-component/EditStudent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/viewstudents" element={<AdminStudent />} />
            <Route path='/addstudent' element={<AdminAddStudent />} />
            <Route path='/viewquestions' element={<AdminQuestions />} />
            <Route path='/about' element={<EditStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
