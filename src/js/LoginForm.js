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
        <div style={{ width: '300px', margin: 'auto', padding: '20px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)', borderRadius: '5px', marginTop: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>SIGN IN</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: '16px' }}>
                    <label for="email"><b>E-Mail</b></label>
                    <input type="text" id="email" placeholder="이메일을 입력하세요" value={email} onChange={(e) => setEmail(e.target.value)} required />
            
                    <label for="password"><b>Password</b></label>
                    <input type="password" id="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} required />
            
                    <button type="submit">SIGN IN</button>
                </div>
    
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                    <p>계정이 없으신가요? <a href="/register">회원가입하기</a>.</p>
                </div>
            </form>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="https://www.facebook.com/yourpage" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/yourprofile" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    );
};

export default LoginForm;
