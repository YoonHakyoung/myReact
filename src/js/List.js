import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/List.css'; // 수정된 CSS 파일 경로로 변경

function EventInfo({ event }) {
  const { title, date, place, org_name, use_trgt, use_fee, org_link, main_img, rgstdate } = event;
  const [isInterested, setIsInterested] = useState(false);

  const toggleInterest = () => {
    setIsInterested(!isInterested);
  };

  const handleBooking = () => {
    const confirmed = window.confirm('예매하시겠습니까?');
    if (confirmed) {
      window.alert('예매되었습니다!');
      // 예매가 확인되었을 때 실행할 작업 추가
    }
  };

  return (
    <div className="event-info">
      <img src={main_img} alt="Main Image" />
      <div className="content">
        <h3 className="info-title">{title}</h3>
        <div className="row">
          <div className="col-sm-3"><strong>날짜</strong></div>
          <div className="col-sm-9">{date}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3"><strong>장소</strong></div>
          <div className="col-sm-9">{place} <a href={org_link} target="_blank" rel="noopener noreferrer">지도보기</a></div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3"><strong>기관명</strong></div>
          <div className="col-sm-9">{org_name}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3"><strong>연령</strong></div>
          <div className="col-sm-9">{use_trgt}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3"><strong>이용 요금</strong></div>
          <div className="col-sm-9">{use_fee}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3"><strong>작품 소개</strong></div>
          <div className="col-sm-9"><a href={org_link} target="_blank" rel="noopener noreferrer">보러가기</a></div>
        </div>
        <div className="row">
          <button type="button" className={`btn btn-default btn-sm col-sm-5 interest-btn ${isInterested ? 'interested' : ''}`} onClick={toggleInterest}>⭐ 관심상품</button>
          <button type="button" className="btn btn-default btn-sm col-sm-5 toggle" onClick={handleBooking}>🎫 예매하기</button>
        </div>
      </div>
    </div>
  );
}

function ConcertList() {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    console.log(currentPage);

    const key = "7a7a456a7879686b313030514d69784a"; 
    const type = "xml"; 
    const service = "culturalEventInfo"; 
  
    useEffect(() => {
      loadPage(currentPage);
    }, [currentPage]);
  
    const calculateRange = (page) => {
      const start = (page - 1) * 10 + 1;
      const end = start + 10 - 1;
      return [start, end];
    };
  
    const loadPage = (page) => {
      setCurrentPage(page);
      const range = calculateRange(page);
      const url = `http://openapi.seoul.go.kr:8088/${key}/${type}/${service}/${range[0]}/${range[1]}/`;
  
      axios.get(url)
        .then(response => {
            const parser = new DOMParser();
            const xmlData = response.data;
            const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
            const rows = xmlDoc.querySelectorAll('row');

            // 각각의 row에 대해 필요한 정보를 추출하고 이벤트 목록을 구성
            const eventsData = Array.from(rows).map(row => ({
            title: row.querySelector('TITLE').textContent,
            date: row.querySelector('DATE').textContent,
            place: row.querySelector('PLACE').textContent,
            org_name: row.querySelector('ORG_NAME').textContent,
            use_trgt: row.querySelector('USE_TRGT').textContent,
            use_fee: row.querySelector('USE_FEE').textContent,
            org_link: row.querySelector('ORG_LINK').textContent,
            main_img: row.querySelector('MAIN_IMG').textContent,
            rgstdate: row.querySelector('RGSTDATE').textContent,
            }));

            setEvents(eventsData);
            window.scrollTo(0, 0);
        })
        .catch(error => console.error('Error fetching data:', error));

    };

    const prevPage = () => {
      if (currentPage > 1) {
        loadPage(currentPage - 1);
      }
    };
  
    const nextPage = () => {
      loadPage(currentPage + 1);
    };
  
    return (
      <div>
        <h1 className="title">공연 정보</h1>
        <div id="eventsList">
          {events.map(event => (
            <EventInfo key={event.id} event={event} />
          ))}
          <div id="pagination" className="text-center">
            <button onClick={prevPage} className="btn btn-default">이전</button>
            <span id="currentPage">{currentPage}</span>
            <button onClick={nextPage} className="btn btn-default">다음</button>
          </div>
        </div>
        
      </div>
    );
  }
  
export default ConcertList;
