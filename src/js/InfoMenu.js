import React, { useState } from 'react';
import '../css/InfoMenu.css';

const reservationData = [
  { id: 1, name: 'John', status: 'Confirmed' },
  { id: 2, name: 'Alice', status: 'Pending' },
  { id: 3, name: 'Bob', status: 'Confirmed' }
];

const interestData = [
  { id: 1, name: 'Jane', interest: 'Art' },
  { id: 2, name: 'Doe', interest: 'Music' },
  { id: 3, name: 'Sam', interest: 'Books' }
];

const ReservationList = () => (
  <div>
    <h2>Reservation Status</h2>
    <ul>
      {reservationData.map(item => (
        <li key={item.id}>{item.name} - {item.status}</li>
      ))}
    </ul>
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
