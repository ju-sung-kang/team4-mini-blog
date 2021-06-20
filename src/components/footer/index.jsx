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
    const [user, setUser] = useState({});

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


    const profileImageError = (e) => {
        e.target.src = "data:image/png;base64,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";
    }

    return (
        <S.FooterContainer>
            <S.Profile>
                <S.ProfileImage src={user.image} onError={profileImageError}/>
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
        </S.FooterContainer>
    )
}

export default Footer;