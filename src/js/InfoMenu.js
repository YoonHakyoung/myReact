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
  { id: 1, name: 'Jane', interest: 'Art' },
  { id: 2, name: 'Doe', interest: 'Music' },
  { id: 3, name: 'Sam', interest: 'Books' }
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
    <h2>Interest List</h2>
    <ul>
      {interestData.map(item => (
        <li key={item.id}>{item.name} - {item.interest}</li>
      ))}
    </ul>
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
