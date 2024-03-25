import React, { useState } from 'react';
import '../css/LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const loginData = {
            email: email,
            password: password
        };

        // 서버로 로그인 데이터를 전송
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:8000/user/login/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(loginData));

        // 서버 응답 처리
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("로그인 성공");
                } else {
                    console.log("로그인 실패");
                }
            }
        };
    };

    return (
        <div className="login-form-container">
            <h2 style={{ textAlign: 'center' }}>SIGN IN</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="email"><b>E-Mail</b></label>
                    <input type="text" id="email" placeholder="이메일을 입력하세요" value={email} onChange={(e) => setEmail(e.target.value)} required />
            
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} required />
            
                    <button type="submit" className="login-button">SIGN IN</button>
                </div>
    
                <div className="no-account">
                    <p>계정이 없으신가요? <a href="/register" rel="noopener noreferrer">회원가입하기</a>.</p>
                </div>
            </form>
            <div className="social-icons">
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
};

export default LoginForm;
