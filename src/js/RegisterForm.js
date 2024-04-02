import React, { useState } from 'react';
import '../css/RegisterForm.css';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const registerData = {
            name: name,
            email: email,
            password: password,
            admin : isAdmin
        };

        // XMLHttpRequest 객체를 사용하여 POST 요청
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://211.183.3.100:30000/user/regsiter/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(registerData)); // registerData 객체를 JSON 문자열로 변환하여 서버로 전송

        console.log(registerData);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 서버로부터의 응답이 성공적으로 도착한 경우
                    const response = JSON.parse(xhr.responseText);
                    if (response.message === "success") {
                        alert("회원가입이 성공적으로 완료되었습니다.");
                        console.log("회원가입 성공");
                    } else {
                        console.log("서버 응답: 성공 메시지를 받았으나 처리 실패");
                    }
                } else {
                    // 서버로부터의 응답이 실패한 경우
                    console.log("회원가입 실패");
                }
            }
        };        
    };

    return (
        <div className="form-container">
            <h2 style={{ textAlign: 'center' }}>SIGN UP</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" id="name" placeholder="사용자 이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="email"><b>E-Mail</b></label>
                    <input type="email" id="email" placeholder="이메일 주소를 입력하세요" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <label htmlFor="admin">Admin</label>
                    <input type="checkbox" id="admin" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />

                    <button type="submit" className="register-button">SIGN UP</button>
                </div>
            </form>
            <div className="message" id="registerMessage"></div>
        </div>
    );
};

export default RegisterForm;
