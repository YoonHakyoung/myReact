import { Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import MainPage from './main_new';
import ConcertList from './List';
import MyPage from './MyPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/list' element={<ConcertList />} />
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/signup" element={<RegisterForm />} /> 
            <Route path='/mypage' element={<MyPage />}/>
        </Routes>
    );
}


export default Router;