import { Route, Routes } from "react-router-dom";
import Home from '../screens/Home/Home';

import DashBoard from '../screens/Dashboard/Dashboard';
import RegisterPage from "../screens/Register_Page/RegisterPage";
import LoginPage from "../screens/Login_Page/LoginPage";
import AddCardPage from "../screens/Add_Card_Page/AddCardPage";


const PrivateRoutes = () => (
    <Routes>
       <Route path='/' element={ <AddCardPage/> }/>
        <Route path='/signUp' element={<RegisterPage />}></Route>
        <Route path='/signIn' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>

    </Routes>
)

export default PrivateRoutes;