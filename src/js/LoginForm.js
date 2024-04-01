import React, { useState } from 'react';
import '../css/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                sessionStorage.setItem('userId', loginData.email);
                if (xhr.status === 200) {
                    // 서버로부터의 응답이 성공적으로 도착한 경우
                    const response = JSON.parse(xhr.responseText);
                    if (response.message === "success") {
                        // 세션 스토리지에 사용자 아이디 저장
                        sessionStorage.setItem('userId', loginData.email);
                        alert("로그인이 성공적으로 완료되었습니다.");
                        console.log("로그인 성공");
                        navigate("/"); // 홈페이지로 이동하도록 수정
                    } else {
                        console.log("서버 응답: 성공 메시지를 받았으나 처리 실패");
                    }
                } else {
                    // 서버로부터의 응답이 실패한 경우
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
            </form>
        </div>
    );
};

export default LoginForm;
