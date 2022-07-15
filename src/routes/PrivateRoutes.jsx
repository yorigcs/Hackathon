import { Route, Routes } from "react-router-dom";
import Home from '../screens/Home/Home';
import SignUp from '../screens/Login_Page/LoginPage';
import SignIn from '../screens/Register_Page/RegisterPage';
import DashBoard from '../screens/Dashboard/Dashboard';


const PrivateRoutes = () => (
    <Routes>
       <Route path='/' element={<Home />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>

    </Routes>
)

export default PrivateRoutes;