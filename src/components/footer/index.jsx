import React, {useState, useEffect } from 'react';
import * as S from './styles.js';
import db from '../../firebase.js';

const Footer = (props) => {

    const API_KEY = "53da2272c20bab85b6e0a1ba478a531e";
    const [loc, setLoc] = useState({lat: 0, long: 0});
    const [weather, setWeather] = useState({temperature: 0, name: "", icon: ""})
    const [today, setToday] = useState(0);
    const [total, setTotal] = useState(0);
    const [categoryList, setCategoryList] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(()=>{
        setToday(today + 1);
        setTotal(total + 1);
        getCategoryList();
        getPosition();
        getUser();
    }, []);

    const getCategoryList = () => {
        db.collection('categories')
        .get()
        .then((querySnapshot) => {
            var array = [];
            querySnapshot.forEach((doc) => {
                const tmp = doc.data();
                array.push({categoryName: tmp.name, categoryId: doc.id});
            });
            setCategoryList(array);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
    }

    const categoryClick = (categoryId) => {
        props.categoryHandler(categoryId);
    }

    const getUser = () => {
        db.collection('blogInfo').doc('PkW2DmPU6YAZCQPBNc65')
        .get()
        .then((doc) => {
            if (doc.exists) {
                const tmp = doc.data();
                setUser({
                    image: tmp.profileImage,
                    name: tmp.nickName,
                    intro: tmp.introduction
                });
            }
            else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }


    const getPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                setLoc({
                lat: position.coords.latitude,
                long: position.coords.longitude
                });
            })
        }
        getWeather();
    }

    const getWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.long}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            setWeather({
                temperature: Math.floor(json.main.temp - 273.15),
                name: json.weather[0].main,
                icon: json.weather[0].icon
            });
        });
    }


    //useEffect(getPosition, []);

    const img_url = `http://openweathermap.org/img/w/${weather.icon}.png`;

    return (
        <S.FooterContainer>
            <S.Profile>
                <S.ProfileImage src={user.image}/>
                <S.ProfileName>{user.name}</S.ProfileName>
                <S.ProfileIntro>{user.intro}</S.ProfileIntro>
            </S.Profile>
            <S.Category>
                {categoryList.length === 0 ? (
                    <S.NoCategory>설정에서 카테고리를 추가해주세요!</S.NoCategory>
                ) : (
                  categoryList.map((category) => (
                    <S.CategoryLabel key={category.categoryId} onClick={()=>categoryClick(category.categoryId)}>
                        {category.categoryName}
                    </S.CategoryLabel>
                  ))
                )}
            </S.Category>
            <S.Weather>
                <h4>현재 지역 날씨</h4>
                <img src={img_url} alt="weather_icon" />
                <h5>온도: {weather.temperature}</h5>
                <h5>날씨: {weather.name}</h5>
            </S.Weather>
        </S.FooterContainer>
    )
}

export default Footer;