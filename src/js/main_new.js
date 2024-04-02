import React, { useState, useEffect } from 'react';
import '../css/main_new.css'; 
import mainImage from '../img/mainImage.png';

const MainPage = () => {
    const [mainImages, setMainImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://openapi.seoul.go.kr:8088/7a7a456a7879686b313030514d69784a/json/culturalEventInfo/1/4/');
                const data = await response.json();
                const events = data?.culturalEventInfo?.row || [];
                const images = events.map(event => event.MAIN_IMG);
                setMainImages(images);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="image-container">
            <img src={mainImage} alt="메인 이미지" />
    
            <div className="slider">
                {mainImages.map((image, index) => (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img key={index} src={image} alt={`Main Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
