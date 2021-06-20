import React, {useState, useEffect } from 'react';
import * as S from './styles.js';
import db from '../../firebase.js';
import { useHistory } from 'react-router-dom';

const Footer = (props) => {

    const API_KEY = "53da2272c20bab85b6e0a1ba478a531e";
    const history = useHistory();
    const [loc, setLoc] = useState({lat: 0, long: 0});
    const [weather, setWeather] = useState({temperature: 0, name: "", icon: ""})
    const [categoryList, setCategoryList] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(()=>{
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
            console.log("footer category list getting success");
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
    }

    const categoryClick = (categoryId) => {
        props.categoryHandler(categoryId);
    }

    const getUser = () => {
        db.collection('blogInfo').doc('info')
        .get()
        .then((doc) => {
            if (doc.exists) {
                const tmp = doc.data();
                setUser({
                    image: tmp.profileImageUrl,
                    name: tmp.nickName,
                    intro: tmp.introduction,
                    blogName: tmp.blogName
                });
                console.log("footer user data getting success");
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

    const goToSettingsBlogInfo = () => {
        history.push("/settings");
    }

    const goToSettingsCategory = () => {
        history.push("/settings");
    }

    const img_url = `http://openweathermap.org/img/w/${weather.icon}.png`;

    return (
        <S.FooterContainer>
            <S.Profile>
                <S.ProfileImage src={user.image}/>
                <S.ProfileName>{user.name}</S.ProfileName>
                <S.ProfileIntro>{user.intro}</S.ProfileIntro>
                <S.Settings>
                    <S.BlogInfoSettingsContainer>
                        <S.BlogInfoSettingsEmoji>▸</S.BlogInfoSettingsEmoji>
                        <S.BlogInfoSettings onClick={goToSettingsBlogInfo}> 프로필 설정</S.BlogInfoSettings>
                    </S.BlogInfoSettingsContainer>
                    <S.CategorySettings onClick={goToSettingsCategory}>⚙️ 카테고리 설정</S.CategorySettings>
                </S.Settings>
            </S.Profile>
            <S.CategoryAndWeather>
            <S.Category>
                <S.CategoryLabel>카테고리</S.CategoryLabel>
                <S.CategoryUl>
                {categoryList.length === 0 ? (
                    <S.NoCategory>설정에서 카테고리를 추가해주세요!</S.NoCategory>
                    ) : (
                    categoryList.map((category) => (
                        <S.CategoryTitle key={category.categoryId} onClick={()=>categoryClick(category.categoryId)}>
                            {category.categoryName}
                        </S.CategoryTitle>
                    ))
                )}
                </S.CategoryUl>
            </S.Category>
            <S.Weather>
                <S.WeatherTemperature>{weather.name} / {weather.temperature}℃</S.WeatherTemperature>
                <S.WeatherImage src={img_url} alt="weather_icon"/>
            </S.Weather>
            </S.CategoryAndWeather>
<<<<<<< HEAD
            <S.BlogBanner>{user.blogName}&nbsp;_&nbsp;{user.name}</S.BlogBanner>
=======
            
>>>>>>> 0da7d16dbad78f8895f524f5e73373a01d50bc2a
        </S.FooterContainer>
    )
}

export default Footer;