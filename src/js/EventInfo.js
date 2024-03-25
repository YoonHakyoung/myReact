function EventInfo({ event }) {
  const { title, date, place, org_name, use_trgt, use_fee, org_link, main_img, rgstdate } = event;

  return (
    <div className="event-info">
      <img src={main_img} alt="Main Image" style={{ width: '300px', height: '450px', marginRight: '20px' }} />
      <div className="content" style={{ width: '100%' }}>
        <h3 style={{ margin: '20px', fontFamily: 'Pretendard-Regular', fontWeight: '600', fontSize: '30px' }}>{title}</h3>
        <div className="row">
          <div className="col-sm-3"><strong>날짜</strong></div>
          <div className="col-sm-9">{date}</div>
        </div>
        <hr style={{ margin: '10px' }} />
        <div className="row">
          <div className="col-sm-3"><strong>장소</strong></div>
          <div className="col-sm-9">{place} <a href={org_link} target="_blank">지도보기</a></div>
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
          <div className="col-sm-9"><a href={org_link}>보러가기</a></div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3"><strong>신청일</strong></div>
          <div className="col-sm-9">{rgstdate}</div>
        </div>
        <hr />
        <div className="row">
          <button type="button" className="btn btn-default btn-sm col-sm-5 interest-btn" style={{ height: '50px', fontSize: '15px' }}>⭐ 관심상품</button>
          <button type="button" className="btn btn-default btn-sm col-sm-5" data-toggle="modal" data-target="#myModal" style={{ height: '50px', fontSize: '15px' }}>🎫 예매하기</button>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;