import { Route, Routes } from 'react-router-dom';
import AddCardPage from '../screens/Add_Card_Page/AddCardPage';
import Home from '../screens/Home/Home';
import LoginPage from '../screens/Login_Page/LoginPage';

import RegisterPage from '../screens/Register_Page/RegisterPage';


const PublicRoutes = () => (
    <Routes>
        <Route path='/' element={ <AddCardPage/> }/>
        <Route path='/add-card-page' element={<Home />}/>
        <Route path='/signUp' element={<RegisterPage />}></Route>
        <Route path='/signIn' element={<LoginPage />}></Route>
    </Routes>
)
export default PublicRoutes;