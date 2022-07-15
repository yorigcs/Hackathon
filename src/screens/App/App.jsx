

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyles from '../../assets/globalStyles/globalStyles';
import RegisterPage from '../Register_Page/RegisterPage';
//import react


function App() {

  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<RegisterPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  

   
  )
}

export default App
