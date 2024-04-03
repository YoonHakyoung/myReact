import React, { useState } from 'react';
import '../css/InfoMenu.css';

const reservationData = [
  { 
    date: '2024/12/07', 
    place: '세종대극장', 
    performance: '오페라 갈라' 
  },
  { 
    date: '2024/12/05', 
    place: '세종대극장', 
    performance: '서울시합창단 송년음악회' 
  },
  { 
    date: '2024/11/29', 
    place: '세종대극장', 
    performance: '서울시국악관현악단 제362회 정기연주회' 
  }
];

const interestData = [
  { id: 1, image: 'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=a6cb4e5a9b5b404e83454b084d88a399&thumb=Y'},
  { id: 2, image: 'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=86a744fd432e413b91b0d534bf96572f&thumb=Y'},
  { id: 3, image: 'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=d32968623ba34ff0a593e5a257304c6f&thumb=Y'}
];

const ReservationList = () => (
  <div>
    <table className="styled-table">
    <thead>
        <tr>
        <th>Date</th>
        <th>Place</th>
        </tr>
    </thead>
    <tbody>
        {reservationData.map((item, index) => (
        <tr key={index}>
            <td>{item.date}</td>
            <td>
                <div className="place">
                    <div className="small-text">{item.place}</div>
                    <div className="big-text">{item.performance}</div>
                </div>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
  </div>
);


const InterestList = () => (
  <div>
    <div className="interest-container">
      {interestData.map(item => (
        <div key={item.id} className="interest-item">
          <img src={item.image} alt={item.title} />
          <div className="item-title">{item.title}</div>
        </div>
      ))}
    </div>
  </div>
);

const InfoMenu = () => {
  const [activeMenu, setActiveMenu] = useState('reservation');

  return (
    <div>
      <div className="menu-container">
        <ul className="menu">
          <li className={activeMenu === 'reservation' ? 'active' : ''} onClick={() => setActiveMenu('reservation')}>🎫 예약 현황</li>
          <li className={activeMenu === 'interest' ? 'active' : ''} onClick={() => setActiveMenu('interest')}>🤍 관심 목록</li>
        </ul>
      </div>
      <div className="content-container">
        {activeMenu === 'reservation' && <ReservationList />}
        {activeMenu === 'interest' && <InterestList />}
      </div>
    </div>
  );
};

export default InfoMenu;
