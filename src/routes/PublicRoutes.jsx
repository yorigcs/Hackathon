import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';

import SignUp from '../screens/Login_Page/LoginPage';
import SignIn from '../screens/Register_Page/RegisterPage';

const PublicRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
    </Routes>
)
export default PublicRoutes;