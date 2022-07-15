

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyles from '../../assets/globalStyles/globalStyles';
import RegisterPage from '../Register_Page/RegisterPage';
import LoginPage from '../Login_Page/LoginPage';
//import react


function App() {

  return (
    <>
    <GlobalStyles/>
     <BrowserRouter>
       <Routes>
          <Route path='/' element ={<LoginPage/>} />
          <Route path='/signUp' element ={<RegisterPage/>} />
        </Routes>
     </BrowserRouter>
    </>
  

   
  )
}

export default App
