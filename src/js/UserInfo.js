import React, { useState, useEffect } from 'react';
import '../css/UserInfo.css'

const UserInfo = () => {
    // 상태 변수 선언
    const [userInfo, setUserInfo] = useState({}); // 사용자 정보를 담는 상태 변수

    // 컴포넌트가 마운트되었을 때 사용자 정보를 가져오는 함수
    useEffect(() => {
        // 여기서 서버로부터 사용자 정보를 가져오는 API를 호출하고, 가져온 정보를 setUserInfo를 사용하여 상태를 업데이트합니다.
        // 예를 들어, 서버로부터 사용자 정보를 가져오는 API를 호출하는 함수를 호출하고,
        // 그 함수의 반환값을 setUserInfo를 사용하여 상태를 업데이트합니다.

        // 서버로부터 사용자 정보를 가져오는 함수가 getUserInfo라고 가정하고 호출하는 코드
        // getUserInfo()
        //     .then(data => setUserInfo(data))
        //     .catch(error => console.error('Error fetching user info:', error));
        
        // 임시로 사용자 정보를 생성하여 상태를 업데이트하는 예시 코드
        const mockUserInfo = {
            name: '홍길동',
            email: 'gildong@example.com'
        };
        setUserInfo(mockUserInfo);
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행되어야 하므로 빈 배열을 전달하여 useEffect를 사용합니다.

    return (
        <div className="my-page-container">
            <div className="user-info">
                <p className="user-name"><strong>{userInfo.name} 님, 반갑습니다! 👋 </strong> </p>
                <p className="user-email">{userInfo.email}</p>
            </div>
        </div>
    );
};

export default UserInfo;
