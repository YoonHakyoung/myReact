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

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/user/register", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(registerData));

        console.log(registerData);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("회원가입 성공");
                } else {
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
